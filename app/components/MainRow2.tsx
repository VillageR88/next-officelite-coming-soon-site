import Image from 'next/image';
import img1 from '@/public/assets/images/illustration-passions.svg';
import img2 from '@/public/assets/images/illustration-financial-freedom.svg';
import img3 from '@/public/assets/images/illustration-lifestyle.svg';
import img4 from '@/public/assets/images/illustration-work-anywhere.svg';

export default function MainRow2() {
  const listItems = [
    {
      title: 'Indulge your passions',
      description: "Your passions shouldn't be just for the weekend. Earn a living doing what you love.",
      src: img1 as string,
      imageParams: 'xl:w-[88px] xl:h-[106px] w-[66px] h-[80px] ml-[8px]',
    },
    {
      title: 'Gain financial freedom',
      description: 'Start making money work for you. There’s nothing quite like earning while you sleep.',
      src: img2 as string,
      imageParams: 'xl:w-[74px] xl:h-[89px] w-[56px] h-[67px]',
    },
    {
      title: 'Choose your lifestyle',
      description: 'Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.',
      src: img3 as string,
      imageParams: 'xl:w-[80px] xl:h-[94px] w-[60px] h-[71px]',
    },
    {
      title: 'Work from anywhere',
      description: 'Selling online means not being pinned down. Want to work AND travel? Go for it!',
      src: img4 as string,
      imageParams: 'xl:w-[104px] xl:h-[74px] w-[78px] h-[56px]',
    },
  ];

  const MiddleBlock = ({
    title,
    description,
    src,
    classExtension,
    imageParams,
  }: {
    title: string;
    description: string;
    src: string;
    classExtension: string;
    imageParams: string;
  }) => {
    return (
      <li
        className={`${classExtension} flex flex-col items-center gap-[32px] px-[24px] sm:w-[515px] sm:gap-[48px] sm:px-0 md:h-[124px] md:flex-row md:items-start xl:h-[335px] xl:w-[255px] xl:flex-col`}
      >
        <div className="flex h-[124px] w-[120px] items-center justify-center rounded-[45px] bg-[#093F68] xl:h-[164px] xl:w-[160px]">
          <Image className={imageParams} src={src} alt={title} />
        </div>
        <section className="flex max-w-[340px] flex-col gap-[23px] text-center md:text-start xl:max-w-[255px]">
          <h2>{title}</h2>
          <p className="text-[#777F98]">{description}</p>
        </section>
      </li>
    );
  };

  return (
    <ul className="mt-[144px] flex w-full max-w-[573px] flex-col items-center gap-[56px] text-white sm:mt-[110px] sm:gap-[40px] md:h-[614px] xl:mt-[202px] xl:h-[383px] xl:max-w-[1110px] xl:flex-row xl:gap-[30px]">
      {listItems.map((item, index) => (
        <MiddleBlock
          classExtension={index % 2 ? 'xl:self-end md:self-start ' : 'xl:self-start md:self-end'}
          key={index}
          title={item.title}
          src={item.src}
          description={item.description}
          imageParams={item.imageParams}
        />
      ))}
    </ul>
  );
}
