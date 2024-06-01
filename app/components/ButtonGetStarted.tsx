'use client';
import Link from 'next/link';
import { Routes } from '../routes';
import { DataContext } from '../_providers/DataContext';
import { useContext } from 'react';

export default function ButtonGetStarted() {
  const { setPreferredOption } = useContext(DataContext);
  return (
    <Link href={Routes.signUp}>
      <button
        onClick={() => {
          setPreferredOption('Basic Pack');
        }}
        type="button"
        className="h-[56px] w-[171px] bg-[#5175FF] transition-colors hover:bg-[#829CFF]"
      >
        Get Started
      </button>
    </Link>
  );
}
