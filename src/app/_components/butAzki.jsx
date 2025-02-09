import Image from "next/image";
import mainPic from "../../../public/assets/img/buy azki/main.webp";
import ques from "../../../public/assets/img/buy azki/ques.svg";
import item1 from "../../../public/assets/img/buy azki/first/1.svg";
import item2 from "../../../public/assets/img/buy azki/first/2.svg";
import item3 from "../../../public/assets/img/buy azki/first/3.svg";
import item4 from "../../../public/assets/img/buy azki/first/4.svg";
import item5 from "../../../public/assets/img/buy azki/first/5.svg";

import secondItem1 from "../../../public/assets/img/buy azki/second/1.svg";
import secondItem2 from "../../../public/assets/img/buy azki/second/2.svg";
import secondItem3 from "../../../public/assets/img/buy azki/second/3.svg";
import secondItem4 from "../../../public/assets/img/buy azki/second/4.svg";

import content from "../../../public/assets/img/1.webp";

const BuyAzki = () => {
  const gridContent = [
    {
      id: 1,
      icon: item1,
      title: "مقایسه قیمت و خدمات بیمه‌ها",
      extra:
        "با بررسی‌‌ فهرست قیمت و خدمات تمام شرکت‌ها، ‌بیمه‌‌‌ت رو زیرکانه انتخاب کن.",
    },
    {
      id: 2,
      icon: item2,
      title: "خرید بیمه؛ هر زمان و هر کجا",
      extra:
        "بیمه‌‌ موردنیازت رو در ۲۴ ساعت شبانه‌روز و از هر کجا که هستی خریداری کن.",
    },
    {
      id: 3,
      icon: item3,
      title: "امکان خرید قسطی بیمه",
      extra: "بی سود، بی‌چک و بی‌سفته بیمه بخر و هزینه‌ش رو طی ۱۰ ماه بپرداز.",
    },
    {
      id: 4,
      icon: item4,
      title: "تحت نظارت بیمه مرکزی",
      extra:
        "تمامی فعالیت‌های ما در «ازکی» تحت کنترل و نظارت بیمه مرکزی انجام میشه.",
    },
    {
      id: 5,
      icon: item5,
      title: "صدور سریع بیمه‌نامه",
      extra:
        "بیمه‌ای که احتیاج به بازدید نداره، همون روز صادر میشه و قابل استفاده‌ست.",
    },
  ];

  const optionItem = [
    { id: 1, icon: secondItem1, text: "امکان خرید اقساطی" },
    { id: 2, icon: secondItem2, text: "امکان مقایسه بیمه‌ها" },
    { id: 3, icon: secondItem3, text: "پشتیبانی ۲۴ ساعته" },
    { id: 4, icon: secondItem4, text: "ارسال رایگان به سراسر ایران" },
  ];

  return (
    <>
      <div className="pt-[15%] lg:pt-[5%] flex w-full lg:w-[70%] mx-auto lg:px-0 justify-center">
        <div className="w-1/3 mt-5 hidden xl:flex">
          <Image src={mainPic} alt="noen" className="w-fit" />
        </div>

        <div className="flex flex-col w-full lg:w-2/3 lg:pl-[5%]">
          <div className="flex justify-between items-center ">
            <div className="flex flex-col items-center w-full text-center">
              <p className="lg:text-3xl text-xl">چرا از «ازکی» بخرم؟</p>
              <p className="lg:text-xl text-xs mt-4 text-slate-600">
                چون ما در ازکی بهت کمک می‌کنیم، مناسب‌ترین بیمه رو انتخاب کنی.
              </p>
            </div>
            <Image
              src={ques}
              alt="none"
              className="w-fit -rotate-12 top-0 hidden xl:flex"
            />
          </div>

          <div className="grid xl:grid-cols-2 gap-14 px-8 xl:pr-10 mt-10 w-2/3 mx-auto xl:w-full ">
            {gridContent.map((item) => (
              <div className="flex justify-between gap-5" key={item.id}>
                <Image src={item.icon} alt="None" className="w-fit" />
                <div className="flex flex-col gap-2">
                  <p className="IRANSansX-DemiBold">{item.title}</p>
                  <p className="text-sm text-slate-700 leading-6 font-thin">
                    {item.extra}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-3/4 mx-auto mt-[15%] lg:mt-[6%] mb-[12%] lg:gap-3 grid gap-9 grid-cols-2 lg:flex pl-10 items-center justify-center">
        {optionItem.map((item, index) => (
          <div
            key={item.id}
            className={` ${
              index == 3 && "border-none"
            } w-[150px] lg:w-[200px] flex-col flex items-center justify-center lg:border-l border-slate-300 mx-auto`}
          >
            <Image src={item.icon} alt="none" className="w-fit" />
            <p className="text-xs">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="w-[90%] lg:w-[90%] xl:w-[70%] lg:mx-auto bg-[#21293c] h-[300px] items-center hidden lg:flex justify-between rounded-2xl">
        <Image
          src={content}
          alt="none"
          className="w-1/3 -translate-y-[13px] -translate-x-5"
        />

        <div className="flex flex-col gap-3 items-center w-full">
          <p className="text-white text-xl">
            {" "}
            «ازکی» چشم‌اندازی نوین در عرصه سنتی بیمه
          </p>
          <p className="text-white text-3xl mt-5">دستاوردهای ما در یک نگاه</p>

          <div className="flex gap-0 xl:gap-5 mt-8">
            {[
              { id: 1, big: "۲۰+ نوع", small: "خدمات بیمه" },
              { id: 2, big: "۷ سال", small: "سابقه در عرصه بیمه" },
              { id: 3, big: "۴۰۰+ شهر", small: "تحت پوشش ازکی" },
            ].map((item, index) => (
              <div
                key={item.id}
                className={`flex-col flex gap-4 ${
                  index == 2 && "border-none"
                } border-l-2 border-slate-400 w-[200px] xl:w-[190px] justify-center items-center`}
              >
                <p className="text-2xl xl:text-4xl text-[#23b4ff]">
                  {item.big}
                </p>
                <p className="text-xl text-white">{item.small}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyAzki;
