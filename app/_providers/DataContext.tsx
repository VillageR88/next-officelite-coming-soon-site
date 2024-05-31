'use client';
import { createContext, useState, useEffect } from 'react';
import { TimerValue } from '@/app/_lib/interfaces';

export const DataContext = createContext(
  {} as {
    timerValue: TimerValue;
    current4thOfNextMonth: Date;
  },
);
export default function DataProvider({ children }: { children: React.ReactNode }) {
  const currentDate = new Date();
  const current4thOfNextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 4);
  const [currentDifference, setCurrentDifference] = useState<number>(
    current4thOfNextMonth.getTime() - currentDate.getTime(),
  );
  const currentDifferenceAsDate = new Date(currentDifference);
  const timerValue = {
    days: (currentDifferenceAsDate.getDate() - 1).toLocaleString('en-UK', { minimumIntegerDigits: 1 }),
    hours: currentDifferenceAsDate.getHours().toLocaleString('en-UK', { minimumIntegerDigits: 2 }),
    mi: currentDifferenceAsDate.getMinutes().toLocaleString('en-UK', { minimumIntegerDigits: 2 }),
    sec: currentDifferenceAsDate.getSeconds().toLocaleString('en-UK', { minimumIntegerDigits: 2 }),
  } as TimerValue;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDifference((prev) => prev - 1000);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
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
