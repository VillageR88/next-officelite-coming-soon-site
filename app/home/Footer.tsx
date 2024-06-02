import Timer from '../components/Timer';
import ButtonGetStarted from '../components/ButtonGetStarted';

export default function Footer() {
  return (
    <footer className="relative -z-10 mt-[-550px] flex h-[986px] w-full items-end justify-center bg-[#25293A] bg-[url('../public/assets/home/bg-pattern-footer.svg')] bg-[length:1300px] bg-[50%_-34%] bg-no-repeat px-10 screenInBetween:mt-[-254px] screenInBetween:h-[603px] screenInBetween:bg-[length:2036px] screenInBetween:bg-[calc(50%-400px)_43%] screen1200:px-0">
      <div className="z-10 mb-[100px] flex w-full max-w-[1110px] flex-col items-center justify-between gap-[48px] screenInBetween:mb-[91px] screenInBetween:flex-row">
        <Timer
          textColor1="text-[#FFFFFF]"
          textColor2="text-[#FFFFFF]"
          textColor3="text-[#FFFFFF]/50"
          backgroundColor="bg-[#333950]"
        />
        <ButtonGetStarted />
      </div>
    </footer>
  );
}
