'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { Message } from '@/app/_lib/interfaces';
import { CreateInvoiceContactForm } from '@/app/_lib/functionsServer';
import Loader from '@/app/components/Loader';
import { useEffect, useState } from 'react';

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="flex h-[48px] w-full items-center justify-center rounded-[24px] border-2 border-[#3EE9E5] bg-[#3EE9E5] stroke-[#093F68] text-[15px] font-extrabold text-[#093F68] shadow-none transition-colors hover:bg-[#080C20] hover:stroke-[#FFFFFF] hover:text-[#FFFFFF] sm:w-[140px]"
      type="submit"
    >
      {pending ? <Loader pending={pending} /> : <span>Get notified</span>}
    </button>
  );
};

export default function Footer() {
  const [state, action] = useFormState<{ message: Message; number: number }, FormData>(CreateInvoiceContactForm, {
    message: Message.valid,
    number: 0,
  });
  const [value, setValue] = useState<string>('');
  const [trackedNumber, setTrackedNumber] = useState<number>(0);
  useEffect(() => {
    if (state.message === Message.success) {
      setValue('');
    }
  }, [state]);

  return (
    <footer className="mt-[144px] flex h-[140px] w-full justify-center bg-[url('../public/assets/images/bg-footer-squiggle.svg')] bg-cover bg-center text-center text-[#FFFFFF] sm:mr-[230px] sm:mt-[119px] sm:w-[1022px] xl:mr-[223px] xl:mt-[151px] xl:h-[228px] xl:w-[1665px]">
      <form
        className="flex h-[219px] w-full max-w-[450px] flex-col items-center gap-[42px] px-[24px] sm:ml-[230px] sm:mt-[16px] md:h-[134px] md:max-w-[730px]  xl:ml-[223px] xl:mt-[52px]"
        action={action}
      >
        <label htmlFor="email">Get notified when we launch</label>
        <div className="flex w-full flex-col items-start gap-[16px] sm:w-fit sm:flex-row">
          <div className="flex w-full flex-col gap-[4px] sm:w-fit">
            <input
              placeholder="Email address"
              className={`h-[48px] w-full rounded-[24px] border-2 bg-[#093F68] px-[18px] text-[15px] font-extrabold text-[#FFFFFF] outline-none outline-offset-0 sm:w-[320px] ${state.message === Message.valid || state.message === Message.success || state.number === trackedNumber ? 'border-transparent focus:border-[#3EE9E5]' : ' border-[#FF2965]'}`}
              id="email"
              type="text"
              name="email"
              autoComplete="email"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setTrackedNumber(state.number);
              }}
            />
            <span
              className={`-z-10 ml-[18px] self-start text-[12px] leading-[25px] ${state.message === Message.success ? 'text-green-400' : 'text-[#FF2965]'}`}
            >
              {state.number !== trackedNumber ? state.message : ''}
            </span>
          </div>
          <SubmitButton />
        </div>
      </form>
    </footer>
  );
}
