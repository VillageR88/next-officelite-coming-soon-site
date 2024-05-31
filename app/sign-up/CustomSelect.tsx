'use client';

import { useState } from 'react';

export default function CustomSelect() {
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

  return (
    <div className="relative">
      <button
        id="select-button"
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="h-[69px] w-full px-4 text-left text-black"
      >
        <div className="flex gap-[8px]">
          <span className="text-[#333950]">{options.find((option) => option.value === selectedOption)?.label1}</span>
          <span className="text-[#333950]/40">{options.find((option) => option.value === selectedOption)?.label2}</span>
        </div>
      </button>
      {isOpen && (
        <ul
          title="name"
          role="listbox"
          className="absolute mt-[8px] flex w-full flex-col rounded-[8px] border border-[#333950]/15 bg-white py-[8px] shadow-2xl"
        >
          {options.map((option, index) => (
            <div key={option.value} className="flex flex-col">
              <li
                value={option.value}
                role="option"
                aria-selected={option.value === selectedOption ? 'true' : 'false'}
                onClick={() => {
                  handleOptionClick(option.value);
                }}
                className="flex h-[60px] cursor-pointer items-center gap-[8px] px-4 text-[16px] font-bold hover:bg-[#5175FF]/10"
              >
                <span className="text-[#333950]">{option.label1}</span>
                <span className="text-[#333950]/40">{option.label2}</span>
              </li>
              {index + 1 !== options.length && <div className="h-px w-full bg-[#747B95]/25"></div>}
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
