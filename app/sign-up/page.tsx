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
          <div className="mt-[126px] h-[508px] w-[445px] rounded-[13px] bg-[#FFFFFF] shadow-2xl"></div>
        </div>
      </div>
    </main>
  );
}

//1020
//420
