import Link from 'next/link';
import { Routes } from '../routes';

export default function ButtonGetStarted() {
  return (
    <Link href={Routes.signUp}>
      <button type="button" className="h-[56px] w-[171px] bg-[#5175FF] transition-colors hover:bg-[#829CFF]">
        Get Started
      </button>
    </Link>
  );
}
