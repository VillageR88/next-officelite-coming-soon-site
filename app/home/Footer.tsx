import Timer from '../components/Timer';

export default function Footer() {
  return (
    <footer className="relative -z-10 mt-[-254px] flex h-[603px] w-full items-end justify-center bg-[#25293A] bg-[url('../public/assets/home/bg-pattern-footer.svg')] bg-[calc(50%-400px)_43%] bg-no-repeat">
      <div className="z-10 mb-[91px] flex h-[176px] w-full max-w-[1110px] items-center justify-between">
        <Timer
          textColor1="text-[#FFFFFF]"
          textColor2="text-[#FFFFFF]"
          textColor3="text-[#FFFFFF]/50"
          backgroundColor="bg-[#333950]"
        />
        <button type="button" className="h-[56px] w-[171px] bg-[#5175FF] transition-colors hover:bg-[#829CFF]">
          Get Started
        </button>
      </div>
    </footer>
  );
}
