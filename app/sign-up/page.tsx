import Image from 'next/image';
import logo from '@/public/assets/shared/logo.svg';
import Timer from '../components/Timer';
export default function SignUp() {
  const firstColItems = {
    title: 'Work smarter. Save time.',
    description:
      'Easily manage your projects. Get on the list and receive in-app perks available only to early subscribers. We are moving into final development and getting ready for official launch soon.',
  };

  return (
    <main className="relative z-0 flex min-h-dvh justify-center font-kumbhSans sm:min-h-screen">
      <div className="absolute -z-10 flex size-full">
        <div className="flex min-h-full w-[70.83333333333333%] flex-col items-start bg-white"></div>
        <div className="min-h-full w-[29.16666666666667%] bg-[#25293A]"></div>
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
        <div className="flex">
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
        </div>
      </div>
    </main>
  );
}

//1020
//420
