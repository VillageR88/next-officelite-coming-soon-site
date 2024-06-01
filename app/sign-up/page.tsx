'use client';

import Image from 'next/image';
import logo from '@/public/assets/shared/logo.svg';
import iconArrow from '@/public/assets/sign-up/icon-arrow-down.svg';
import iconCross from '@/public/assets/sign-up/icon-cross.svg';
import Timer from '../components/Timer';
import { useEffect, useState, useRef } from 'react';
import { CreateInvoiceContactForm } from '@/app/_lib/functionsServer';
import { useFormState } from 'react-dom';
import type { ErrorData } from '@/app/_lib/interfaces';

function CustomSelect() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>('first');

  const options = [
    { value: 'first', label1: 'Basic Pack', label2: 'Free' },
    { value: 'second', label1: 'Pro Pack', label2: '$9.99' },
    { value: 'third', label1: 'Ultimate Pack', label2: '$19.99' },
  ];

  const handleOptionClick = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (event: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        id="select-button"
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="h-[69px] w-full px-4 text-left text-black"
      >
        <div className="flex items-center justify-between">
          <div className="flex gap-[8px]">
            <span className="text-[#333950]">{options.find((option) => option.value === selectedOption)?.label1}</span>
            <span className="text-[#333950]/40">
              {options.find((option) => option.value === selectedOption)?.label2}
            </span>
          </div>
          <Image
            className={`h-[8px] w-[13px] transition duration-[300] ${isOpen ? 'scale-100' : 'scale-[-100%]'}`}
            width={13}
            height={8}
            src={iconArrow as string}
            alt="arrow icon"
          />
        </div>
      </button>
      <ul
        title={selectedOption}
        role="listbox"
        className={`${isOpen ? 'z-auto opacity-100' : '-z-10 opacity-0'} absolute mt-[8px] flex w-full flex-col divide-y divide-[#747B95]/25 rounded-[8px] border border-[#333950]/15 bg-white shadow-2xl transition duration-[200]`}
      >
        {options.map((option, index) => (
          <li
            tabIndex={isOpen ? 0 : -1}
            title={option.label1}
            key={index}
            value={option.value}
            role="option"
            aria-selected={option.value === selectedOption ? 'true' : 'false'}
            onClick={() => {
              handleOptionClick(option.value);
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                handleOptionClick(option.value);
              }
            }}
            className={`${index === 0 ? 'rounded-t-[8px]' : index === options.length - 1 ? 'rounded-b-[8px]' : ''} flex h-[67px] cursor-pointer items-center gap-[8px] px-4 text-[16px] font-bold hover:bg-[#5175FF]/10`}
          >
            <span className="text-[#11121a]">{option.label1}</span>
            <span className="text-[#333950]/40">{option.label2}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SignUp() {
  //trackedErrors is used to hide input's error when input changes - it's kind of clean up
  const [trackedErrors, setTrackedErrors] = useState<{
    name: number;
    email: number;
    phone: number;
    company: number;
  }>({
    name: 0,
    email: 0,
    phone: 0,
    company: 0,
  });
  const [state, action] = useFormState<
    {
      errorData: ErrorData;
      number: number;
    },
    FormData
  >(CreateInvoiceContactForm, {
    errorData: { name: false, email: false, phone: false, company: false },
    number: 0,
  });

  const firstColItems = {
    title: 'Work smarter. Save time.',
    description:
      'Easily manage your projects. Get on the list and receive in-app perks available only to early subscribers. We are moving into final development and getting ready for official launch soon.',
  };

  return (
    <main className="relative z-0 flex min-h-dvh justify-center font-kumbhSans sm:min-h-screen">
      <div className="absolute -z-10 flex size-full bg-white">
        <div className="flex min-h-full w-[calc(50%)] flex-col items-start bg-white"></div>
        <div className="ml-[600px] min-h-full w-1/2 bg-[#25293A] bg-[url('../public/assets/sign-up/bg-pattern-side.svg')] bg-[calc(0%-760px)_calc(0%-780px)] bg-no-repeat"></div>
      </div>
      <div className="flex w-full max-w-[1110px] flex-col">
        <Image
          className="mt-[81px] h-[30px] w-[155px]"
          width={155}
          height={30}
          src={logo as string}
          alt="logo"
          priority
        />
        <div className="flex gap-[125px]">
          <div className="mt-[154px] flex max-w-[540px] flex-col gap-[40px]">
            <section className="flex flex-col gap-[24px]">
              <h1 className="text-[#333950]">{firstColItems.title}</h1>
              <p className="text-[#747B95]">{firstColItems.description}</p>
            </section>
            <Timer
              textColor1="text-[#333950]"
              textColor2="text-[#5175FF]"
              textColor3="text-[#333950]/50"
              backgroundColor="bg-[#5175FF]/10"
            />
          </div>
          <form
            noValidate
            action={action}
            className="mt-[126px] flex h-[508px] w-[445px] flex-col items-center divide-[#747B95]/50 rounded-[13px] bg-[#FFFFFF] px-[43px] pt-[16px] shadow-2xl"
          >
            <div className="flex w-full items-center gap-4 border-b pl-[16px] pr-[20px]">
              <input
                onChange={() => {
                  setTrackedErrors({ ...trackedErrors, name: state.number });
                }}
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                autoComplete="name"
              />
              <Image
                className={state.errorData.name && trackedErrors.name !== state.number ? 'block' : 'hidden'}
                src={iconCross as string}
                alt="cross icon"
                width={20}
                height={20}
              />
            </div>
            <div className="flex w-full items-center gap-4 border-b pl-[16px] pr-[20px]">
              <input
                onChange={() => {
                  setTrackedErrors({ ...trackedErrors, email: state.number });
                }}
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                autoComplete="email"
              />
              <Image
                className={state.errorData.email && trackedErrors.email !== state.number ? 'block' : 'hidden'}
                src={iconCross as string}
                alt="cross icon"
                width={20}
                height={20}
              />
            </div>
            <div className="w-full border-b">
              <CustomSelect />
            </div>
            <div className="flex w-full items-center gap-4 border-b pl-[16px] pr-[20px]">
              <input
                onChange={() => {
                  setTrackedErrors({ ...trackedErrors, phone: state.number });
                }}
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone Number"
                autoComplete="tel"
              />
              <Image
                className={state.errorData.phone && trackedErrors.phone !== state.number ? 'block' : 'hidden'}
                src={iconCross as string}
                alt="cross icon"
                width={20}
                height={20}
              />
            </div>
            <div className="flex w-full items-center gap-4 border-b pl-[16px] pr-[20px]">
              <input
                onChange={() => {
                  setTrackedErrors({ ...trackedErrors, company: state.number });
                }}
                id="company"
                name="company"
                placeholder="Company"
                type="text"
                autoComplete="organization"
              />
              <Image
                className={state.errorData.company && trackedErrors.company !== state.number ? 'block' : 'hidden'}
                src={iconCross as string}
                alt="cross icon"
                width={20}
                height={20}
              />
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="mt-[40px] h-[56px] w-full bg-[#5175FF] transition-colors hover:bg-[#829CFF]"
              >
                Get on the list
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

//1020
//420
