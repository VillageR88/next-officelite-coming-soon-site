import Image from 'next/image';
import image1 from '@/public/assets/home/illustration-charts.svg';
import ButtonGetStarted from '../components/ButtonGetStarted';

export default function MainRow1() {
  return (
    <div className="flex size-full items-center justify-between gap-8 px-10 lg:items-start screen1200:px-0">
      <div className="mt-[72px] flex w-[540px] flex-col items-start justify-between gap-[38px] screen1200:gap-[32px]">
        <section className="flex flex-col gap-[24px]">
          <h1>A simple solution to complex tasks is coming soon</h1>
          <p>
            Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new
            collaboration platform built with an intuitive interface to improve productivity.
          </p>
        </section>
        <ButtonGetStarted shadow />
      </div>
      <div>
        <Image
          className="lg:min-h-[531px] lg:min-w-[475px]"
          src={image1 as string}
          alt="illustration charts"
          priority
        />
      </div>
    </div>
  );
}
