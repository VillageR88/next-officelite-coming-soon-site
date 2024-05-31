import Image from 'next/image';
import image1 from '@/public/assets/home/illustration-charts.svg';
import ButtonGetStarted from '../components/ButtonGetStarted';

export default function MainRow1() {
  return (
    <div className="flex size-full items-start justify-between">
      <div className="mt-[72px] flex h-[388px] w-[540px] flex-col items-start justify-between">
        <section className="flex flex-col gap-[24px]">
          <h1>A simple solution to complex tasks is coming soon</h1>
          <p>
            Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new
            collaboration platform built with an intuitive interface to improve productivity.
          </p>
        </section>
        <ButtonGetStarted />
      </div>
      <Image className="min-h-[531px] min-w-[475px]" src={image1 as string} alt="illustration charts" priority />
    </div>
  );
}
