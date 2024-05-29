import Header from '@/app/components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Image from 'next/image';
import heroSquiggle from '@/public/assets/images/bg-hero-squiggle.svg';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-start overflow-x-clip pb-[235px] pt-[48px] font-manrope sm:min-h-screen sm:pb-[105px] xl:pb-[117px] xl:pt-[81px]">
      <div className="absolute top-0 -z-10 mt-[194px] hidden h-[268px] w-[386px] md:block xl:mt-[213px] xl:h-[378px] xl:w-[544px]">
        <Image fill src={heroSquiggle as string} alt="background" priority />
      </div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
