import Image from 'next/image';
import logo from '@/public/assets/images/logo.svg';

export default function Header() {
  return (
    <header className="flex w-full max-w-[800px] justify-center md:justify-start md:pl-[39px] xl:max-w-[calc(1110px+39px)]">
      <div>
        <Image width={120} height={35} src={logo as string} alt="logo" />
      </div>
    </header>
  );
}
