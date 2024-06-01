'use client';
import { createContext, useState, useEffect, useMemo } from 'react';
import { TimerValue } from '@/app/_lib/interfaces';

export const DataContext = createContext(
  {} as {
    timerValue: TimerValue;
    current4thOfNextMonth: Date;
  },
);
export default function DataProvider({ children }: { children: React.ReactNode }) {
  const current4thOfNextMonth = useMemo(() => {
    const currentDate = new Date();
    return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 4);
  }, []);
  const [timerValue, setTimerValue] = useState<TimerValue>({
    days: '00',
    hours: '00',
    mi: '00',
    sec: '00',
  });

  useEffect(() => {
    const timeFunction = () => {
      const currentDifference = current4thOfNextMonth.getTime() - new Date().getTime();
      const currentDifferenceAsDate = new Date(currentDifference);
      setTimerValue({
        days: currentDifferenceAsDate.getDate().toLocaleString('en-UK', { minimumIntegerDigits: 1 }),
        hours: currentDifferenceAsDate.getHours().toLocaleString('en-UK', { minimumIntegerDigits: 2 }),
        mi: currentDifferenceAsDate.getMinutes().toLocaleString('en-UK', { minimumIntegerDigits: 2 }),
        sec: currentDifferenceAsDate.getSeconds().toLocaleString('en-UK', { minimumIntegerDigits: 2 }),
      });
    };
    if (timerValue.days === '00' && timerValue.hours === '00' && timerValue.mi === '00' && timerValue.sec === '00') {
      timeFunction();
    }
    const interval = setInterval(() => {
      timeFunction();
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [current4thOfNextMonth, timerValue.days, timerValue.hours, timerValue.mi, timerValue.sec]);
  return (
    <DataContext.Provider
      value={{
        timerValue,
        current4thOfNextMonth,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
