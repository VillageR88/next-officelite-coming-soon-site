import Image from 'next/image';
import patternHeader from '@/public/assets/home/bg-pattern-header.svg';
import logo from '@/public/assets/shared/logo.svg';

export default function Header() {
  return (
    <header className="flex w-full max-w-[calc(1110px)] px-10 screen1200:px-0">
      <Image
        className=" mt-[81px] h-[30px] w-[155px]"
        width={155}
        height={30}
        src={logo as string}
        alt="logo"
        priority
      />
      <Image
        width={1134}
        height={1134}
        className="ml-[337px] mt-[-419px] min-h-[1134px] min-w-[1134px]"
        src={patternHeader as string}
        alt="background image"
      />
    </header>
  );
}
