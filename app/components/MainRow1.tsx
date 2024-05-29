import Image from 'next/image';
import imageHeroLeft from '@/public/assets/images/illustration-hero-left.svg';
import imageHeroRight from '@/public/assets/images/illustration-hero-right.svg';
import imageHeroMobile from '@/public/assets/images/illustration-hero-mobile.png';
import imageScroll from '@/public/assets/images/icon-scroll.svg';

export default function MainRow1() {
  return (
    <div className="flex w-full justify-center md:h-[356px] md:w-[1108px] xl:h-[459px] xl:w-[1553px]">
      <Image
        className="hidden h-[354px] w-[313px] md:block xl:h-[459px] xl:w-[408px]"
        width={408}
        height={459}
        src={imageHeroLeft as string}
        alt="image of people"
        priority
      />
      <div className="flex w-full flex-col items-center gap-[47px]">
        <Image
          width={410}
          height={233}
          className="block h-[233px] min-w-[410px] md:hidden"
          src={imageHeroMobile}
          alt="image of people"
        />
        <div className="flex w-full max-w-[410px] flex-col items-center px-[24px] text-white sm:h-[254px] xl:h-[318px] xl:min-w-[730px] xl:pl-0 xl:pr-[19px]">
          <h1 className="mt-[10px] w-full sm:mt-[51px] sm:whitespace-pre xl:mt-[71px]">
            <span>{'Get paid for the work\n'}</span>
            <span>
              you <span className="text-[#3EE9E5]">love</span> to do.
            </span>
          </h1>
          <p className="mt-[24px] max-w-[457px] px-[10px] text-center text-[#777F98] xl:max-w-[540px]">
            The 9-5 grind is so last century. We believe in living life on your own terms. Whether you’re looking to
            escape the rat race or set up a side hustle, we’ve got you covered.
          </p>
          <Image
            width={26}
            height={42}
            className="mt-[32px] h-[42px] w-[26px] xl:mt-[64px]"
            src={imageScroll as string}
            alt="scroll image"
          />
        </div>
      </div>
      <Image
        className="hidden h-[356px] w-[317px] md:block xl:h-[444px] xl:w-[396px]"
        width={396}
        height={444}
        src={imageHeroRight as string}
        alt="image of people"
      />
    </div>
  );
}
