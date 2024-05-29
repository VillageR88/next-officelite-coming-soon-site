import MainRow1 from './MainRow1';
import MainRow2 from './MainRow2';
import MainRow3 from './MainRow3';

export default function Main() {
  return (
    <main className="mt-[65px] flex w-full flex-col items-center sm:mt-[77px] xl:mt-[114px]">
      <MainRow1 />
      <MainRow2 />
      <MainRow3 />
    </main>
  );
}
