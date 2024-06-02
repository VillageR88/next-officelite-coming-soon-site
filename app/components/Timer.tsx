'use client';

import { useContext } from 'react';
import { DataContext } from '@/app/_providers/DataContext';
export default function Timer({
  textColor1,
  textColor2,
  textColor3,
  backgroundColor,
}: {
  textColor1: string;
  textColor2: string;
  textColor3: string;
  backgroundColor: string;
}) {
  const { timerValue, current4thOfNextMonth } = useContext(DataContext);
  return (
    <div className="flex flex-col justify-between text-center screenInBetween:text-start">
      <span className={`text-[16px] font-bold leading-[48px] tracking-[5px] ${textColor1}`}>
        COMING{' '}
        <span className="text-[#5175FF]">
          {current4thOfNextMonth
            .toLocaleDateString('en-UK', { day: '2-digit', month: 'short', year: 'numeric' })
            .toUpperCase()}
        </span>
      </span>
      <div className="flex h-[128px] w-[448px] gap-[16px]">
        {Object.keys(timerValue).map((key) => (
          <div
            className={`flex h-[128px] w-[100px] flex-col items-center justify-center gap-[2px] rounded-[13px] ${backgroundColor} pt-[16px]`}
            key={key}
          >
            <span className={`text-[56px] font-bold leading-[48px] ${textColor2}`}>
              {timerValue[key as keyof typeof timerValue]}
            </span>
            <span className={`text-[16px] font-bold leading-[28px] ${textColor3}`}>{key}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
