"use client";

import buy1 from "../../../public/assets/img/online buy/1.svg";
import buy2 from "../../../public/assets/img/online buy/2.svg";
import buy3 from "../../../public/assets/img/online buy/3.svg";
import buy4 from "../../../public/assets/img/online buy/4.svg";
import arrow from "../../../public/assets/img/online buy/arrow.svg";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Autoplay, Navigation } from "swiper/modules";
import banner1 from "../../../public/assets/img/banner/1.webp";
import banner2 from "../../../public/assets/img/banner/2.webp";
import banner3 from "../../../public/assets/img/banner/3.webp";
import "swiper/css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

const OnlineBuy = () => {
  const content = [
    {
      id: 1,
      img: buy1,
      text: "چرا بیمه رو آنلاین بخرم؟",
      extra:
        "«خدمات آنلاین» متنوع، سریع و امن هستن. برای خرید بهترین بیمه از «ازکی» می‌تونی در یک نگاه تمام شرکت‌های بیمه رو با هم مقایسه کنی و بعد از انتخاب گزینه مناسب، بدون درگیری با مراحل اداری صدور، بیمه‌نامه معتبر خودت‌ رو‌‌ در محل موردنظر دریافت کنی.",
    },
    {
      id: 2,
      img: buy2,
      text: "خرید آنلاین بیمه، سخته یا آسون؟",
      extra:
        "استفاده از وب‌سایت «ازکی» آسونه! چون هدفمون ساده کردن مراحل سنتی و پیچیده‌ی بیمه‌ست. ما سعی کردیم با طراحی وب‌سایتی کاربرمَدار و روان، فرآیند خرید بیمه رو شفاف کنیم؛ فقط کافیه با انتخاب نوع بیمه مورد نیازت شروع کنی و قدم به قدم مسیر رو ادامه بدی.",
    },
    {
      id: 3,
      img: buy3,
      text: "اگه اطلاعاتم رو اشتباه وارد کنم چی میشه؟",
      extra:
        "کارشناسان «ازکی» قبل از صدور بیمه‌نامه، اطلاعات موردنیاز رو در سامانه‌های رسمی استعلام می‌گیرند تا از صحت اون‌ها مطمئن بشن و اگر به اشتباه یا عدم تطابق اطلاعات بر بخورن، حتما باهات تماس می‌گیرن تا برای صدور بیمه‌نامه اصلاحات لازم رو انجام بدن. پس اصلاً نگران نباش!",
    },
    {
      id: 4,
      img: buy4,
      text: "ممکنه تاریخ سررسید بیمه‌ام یادم بره؟",
      extra:
        "طبیعیه که با وجود مشغله‌ی روزمره، زمان تمدید رو فراموش کنی! یکی از فواید خرید از ازکی، یادآوری زمان تمدید بیمه‌ست. اینطوری در صورت وقوع حادثه، هم از ضرر مالی پیشگیری می‌کنی و هم مجبور به پرداخت جریمه دیرکرد برای بیمه‌های اجباری نمیشی.",
    },
  ];

  const BannerArr = [
    { id: 1, img: banner1 },
    { id: 2, img: banner2 },
    { id: 3, img: banner3 },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full mt-[8%]">
      <div className="items-center justify-center w-[50%] mx-auto gap-1 hidden xl:flex mb-[8%]">
        <button className="hidden md:flex button-prev-stories">
          <RightOutlined className="text-slate-700" />
        </button>

        <Swiper
          speed={2500}
          spaceBetween={70}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          a11y
          slidesPerView={1}
          navigation={{
            nextEl: ".button-next-stories",
            prevEl: ".button-prev-stories",
          }}
          className="w-full !px-6"
        >
          {BannerArr.map((item) => (
            <SwiperSlide className="!w-full" key={item.id}>
              <Image src={item.img} alt="none" className="rounded-xl" />
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="hidden md:flex button-next-stories">
          <LeftOutlined className="text-slate-700" />
        </button>
      </div>

      <p className="lg:text-3xl text-xl IRANSansX-DemiBold">
        خرید آنلاین بیمه بدون نگرانی
      </p>
      <p className="text-slate-600 mt-3 lg:mt-5 lg:text-xl text-xs">
        با پشتیبانی ۲۴ ساعته همراهت هستیم.
      </p>

      <div className="flex flex-col w-full lg:w-[39%] mx-auto mt-16 gap-10 relative">
        <div className="absolute -right-[12%] top-[15%] hidden lg:flex">
          <Image alt="none" src={arrow} priority />
        </div>

        <div className="absolute -right-[12%] top-[67%] hidden lg:flex">
          <Image alt="none" src={arrow} priority />
        </div>

        <div className="absolute -left-[12%] top-[40%] transform scale-x-[-1] hidden lg:flex">
          <Image alt="none" src={arrow} priority />
        </div>

        {content.map((item, index) => (
          <div
            key={item.id}
            className="flex flex-col lg:flex-row justify-between items-center gap-5 p-3 px-4 lg:px-10 shadow-[0px_0px_30px_-2px_rgba(0,_0,_0,_0.1)] rounded-2xl mx-5"
          >
            {index % 2 == 0 ? (
              <>
                <Image src={item.img} alt="None" className="w-3/3 lg:w-1/3" />

                <div className="flex flex-col text-right gap-3 w-full lg:w-2/3 ">
                  <p className="">{item.text}</p>
                  <p className="text-slate-600 leading-7 text-sm font-extralight">
                    {item.extra}
                  </p>
                </div>
              </>
            ) : (
              <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
                <div className="flex flex-col text-right gap-3 w-full lg:w-2/3">
                  <p className="">{item.text}</p>
                  <p className="text-slate-600 leading-7 text-sm font-extralight">
                    {item.extra}
                  </p>
                </div>

                <Image src={item.img} alt="None" className="w-3/3 lg:w-1/3" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineBuy;
