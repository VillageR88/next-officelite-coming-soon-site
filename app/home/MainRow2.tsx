const itemList = [
  {
    title: 'Basic',
    paragraph1: 'Free',
    paragraph2: 'Up to 5 users for free',
    paragraph3: 'Basic document collaboration',
    paragraph4: '2 GB storage',
    paragraph5: 'Great security and support',
    text1Color: 'text-[#333950]',
    text2Color: 'text-[#747B95]',
    backgroundColor: 'bg-[#FFFFFF]',
    backgroundImage: undefined,
    buttonTextColor: 'text-[#5175FF]',
    buttonBackgroundColor: 'bg-[#5175FF]/15 hover:bg-[#5175FF]/25',
  },
  {
    title: 'Pro',
    paragraph1: '$9.99',
    paragraph2: 'Per user, billed monthly',
    paragraph3: 'All essential integrations',
    paragraph4: '50 GB storage',
    paragraph5: 'More control and insights',
    text1Color: 'text-[#FFFFFF]',
    text2Color: 'text-[#FFFFFF]/75',
    backgroundColor: 'bg-[#5175FF]',
    backgroundImage: "bg-[url('../public/assets/home/bg-pattern-pricing.svg')]",
    buttonTextColor: 'text-[#5175FF] hover:text-[#829CFF]',
    buttonBackgroundColor: 'bg-[#FFFFFF]',
  },
  {
    title: 'Ultimate',
    paragraph1: '$19.99',
    paragraph2: 'Per user, billed monthly',
    paragraph3: 'Robust work management',
    paragraph4: '100 GB storage',
    paragraph5: 'VIP support',
    text1Color: 'text-[#333950]',
    text2Color: 'text-[#747B95]',
    backgroundColor: 'bg-[#FFFFFF]',
    backgroundImage: undefined,
    buttonTextColor: 'text-[#5175FF]',
    buttonBackgroundColor: 'bg-[#5175FF]/15 hover:bg-[#5175FF]/25',
  },
];
const MiddleBox = ({
  title,
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  paragraph5,
  text1Color,
  text2Color,
  backgroundColor,
  backgroundImage,
  buttonTextColor,
  buttonBackgroundColor,
}: {
  title: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  paragraph4: string;
  paragraph5: string;
  text1Color: string;
  text2Color: string;
  backgroundColor: string;
  backgroundImage?: string;
  buttonTextColor: string;
  buttonBackgroundColor: string;
}) => {
  return (
    <li
      className={`${[backgroundColor, backgroundImage].map((item) => item).join(' ')} flex h-[508px] w-[350px] flex-col items-center rounded-[13px] bg-[50%_102%] bg-no-repeat py-[40px]`}
    >
      <h2 className={text1Color}>{title}</h2>
      <p className={`${text1Color} p1 mt-[40px]`}>{paragraph1}</p>
      <p className={`${text1Color} p2 mt-[8px]`}>{paragraph2}</p>
      <p className={`${text2Color} p2 mt-[56px]`}>{paragraph3}</p>
      <p className={`${text2Color} p2 mt-[16px]`}>{paragraph4}</p>
      <p className={`${text2Color} p2 mt-[16px]`}>{paragraph5}</p>
      <button
        className={`${[buttonBackgroundColor, buttonTextColor].map((item) => item).join(' ')} mt-[32px] h-[56px] w-[171px] transition-colors`}
      >
        Try for Free
      </button>
    </li>
  );
};
export default function MainRow2() {
  return (
    <div className="mt-[109px] w-full max-w-[1110px]">
      <ul className="flex justify-center gap-[30px]">
        {itemList.map((item, index) => {
          return (
            <MiddleBox
              key={index}
              title={item.title}
              paragraph1={item.paragraph1}
              paragraph2={item.paragraph2}
              paragraph3={item.paragraph3}
              paragraph4={item.paragraph4}
              paragraph5={item.paragraph5}
              text1Color={item.text1Color}
              text2Color={item.text2Color}
              backgroundColor={item.backgroundColor}
              backgroundImage={item.backgroundImage}
              buttonTextColor={item.buttonTextColor}
              buttonBackgroundColor={item.buttonBackgroundColor}
            />
          );
        })}
      </ul>
    </div>
  );
}
