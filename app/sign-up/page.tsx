import Image from 'next/image';
import logo from '@/public/assets/shared/logo.svg';
import Timer from '../components/Timer';
import CustomSelect from '@/app/sign-up/CustomSelect';

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
          <form className="mt-[126px] flex h-[508px] w-[445px] flex-col items-center divide-y divide-[#747B95]/50 rounded-[13px] bg-[#FFFFFF] px-[43px] pt-[16px] shadow-2xl">
            <div className="flex w-full flex-col">
              <input id="name" type="text" placeholder="Name" autoComplete="name" />
            </div>
            <div className="flex w-full flex-col">
              <input id="email" type="email" placeholder="Email Address" autoComplete="email" />
            </div>
            <div className="flex w-full flex-col">
              <CustomSelect />
            </div>
            <div className="flex w-full flex-col">
              <input id="phone" type="tel" placeholder="Phone Number" autoComplete="tel" />
            </div>
            <div className="flex w-full flex-col">
              <input id="company" placeholder="Company" type="text" />
            </div>
            <div className="w-full">
              <button type="submit" className="mt-[40px] h-[56px] w-full bg-[#5175FF]">
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
