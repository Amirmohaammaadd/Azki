"use client";

import Image from "next/image";
import itemTop1 from "../../../public/assets/img/hero/Top 1/1.webp";
import itemTop2 from "../../../public/assets/img/hero/Top 2/2.webp";
import itemTop3 from "../../../public/assets/img/hero/Top 3/3.webp";

import minibanner from "../../../public/assets/img/hero/mini banner/1.webp";
import minibanner2 from "../../../public/assets/img/hero/mini banner/2.webp";

import content1 from "../../../public/assets/img/hero/Top 1/third.svg";
import content1ON from "../../../public/assets/img/hero/Top 1/third-on.svg";
import content2 from "../../../public/assets/img/hero/Top 1/body.svg";
import content2ON from "../../../public/assets/img/hero/Top 1/body-on.svg";
import content3 from "../../../public/assets/img/hero/Top 1/motorcycle.svg";
import content3ON from "../../../public/assets/img/hero/Top 1/motorcycle-on.svg";
import content4 from "../../../public/assets/img/hero/Top 1/house.svg";
import content4ON from "../../../public/assets/img/hero/Top 1/house-on.svg";
import content5 from "../../../public/assets/img/hero/Top 1/health.svg";
import content5ON from "../../../public/assets/img/hero/Top 1/health-on.svg";
import content6 from "../../../public/assets/img/hero/Top 1/life.svg";
import content6ON from "../../../public/assets/img/hero/Top 1/life-on.svg";
import content7 from "../../../public/assets/img/hero/Top 1/mobile.svg";
import content7ON from "../../../public/assets/img/hero/Top 1/mobile-on.svg";
import content8 from "../../../public/assets/img/hero/Top 1/travel.svg";
import content8ON from "../../../public/assets/img/hero/Top 1/travel-on.svg";

// -------------------------------

import contentTwo1 from "../../../public/assets/img/hero/Top 2/digital.svg";
import contentTwo1ON from "../../../public/assets/img/hero/Top 2/digital-on.svg";
import contentTwo2 from "../../../public/assets/img/hero/Top 2/home-appliances.svg";
import contentTwo2ON from "../../../public/assets/img/hero/Top 2/home-appliances-on.svg";
import contentTwo3 from "../../../public/assets/img/hero/Top 2/jewelry.svg";
import contentTwo3ON from "../../../public/assets/img/hero/Top 2/jewelry-on.svg";
import contentTwo4 from "../../../public/assets/img/hero/Top 2/tourism.svg";
import contentTwo4ON from "../../../public/assets/img/hero/Top 2/tourism-on.svg";
import contentBottom from "../../../public/assets/img/hero/Top 2/azkivam-banner.png";

import contentIcon from "../../../public/assets/img/hero/Top 3/compare-fancy.svg";

import titleSecondTop1 from "../../../public/assets/img/azki sarmaye/1.svg";
import titleSecondTop2 from "../../../public/assets/img/azki sarmaye/2.svg";
import titleSecondTop3 from "../../../public/assets/img/azki sarmaye/3.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import {
  CheckOutlined,
  LeftOutlined,
  RightOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Divider, Input, Slider } from "antd";
import { useState } from "react";

const topContent = [
  { id: 1, img: itemTop1, title: "بیمه", extra: "مقایسه و خرید آنلاین" },
  { id: 2, img: itemTop2, title: "کالا و خدمات", extra: "اقساطی و بدون ضامن" },
  { id: 3, img: itemTop3, title: "سرمایه گذاری", extra: "آسان و سریع" },
];

const miniBanner = [
  {
    id: 1,
    content: (
      <>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col gap-2">
            <p className="text-blue-600 text-">بخشودگی 100%</p>
            <p className="text-blue-600 text-xs">جریمه دیرکرد شخص ثالث</p>
            <span className="bg-yellow-500 text-slate-800 p-1 text-xs text-center w-fit px-2 rounded-xl">
              خرید بدون جریمه
            </span>
          </div>

          <Image src={minibanner} alt="none" priority className="w-[200px]" />
        </div>
      </>
    ),
  },
  {
    id: 2,
    content: (
      <>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col gap-2">
            <p className="text-blue-600 text-lg">2 میلیون تومان تخفیف</p>
            <p className="text-slate-400 text-xs">ویژه ثالث و بدنه</p>
            <span className="bg-yellow-500 text-slate-800 p-1 text-xs text-center w-fit px-2 rounded-xl">
              کد تخفیف : AZADGJH{" "}
            </span>
          </div>

          <Image src={minibanner2} alt="none" priority className="w-[200px]" />
        </div>
      </>
    ),
  },
];

const topContentOne = {
  sectionOne: [
    {
      id: 1,
      title: "بیمه شخص ثالث خودرو",
      extra: "سواری، وانت، کامیون و ...",
      bottomContent: "اگه تا ساعت ۲۱ سفارش بدی، بیمه‌نامه امروز صادر میشه!",
      navBanner: "اعتباری بدون پیش پرداخت",
      icon: content1,
      onIcon: content1ON,
    },
    {
      id: 2,
      title: "بیمه بدنه خودرو",
      extra: "سواری و وانت",
      bottomContent: "بازدید توسط مشتری در سراسر ایران",
      navBanner: "اعتباری بدون پیش پرداخت",
      icon: content2,
      onIcon: content2ON,
    },
  ],

  sectionTwo: [
    {
      id: 1,
      title: "بیمه موتور",
      extra: "تک سیلندر و دو سیلندر و ...",
      navBanner: null,
      icon: content3,
      onIcon: content3ON,
    },
    {
      id: 2,
      title: "بیمه خانه",
      extra: "آتش سوزی زلزله و آسانسور",
      navBanner: "صدور آنی",
      icon: content4,
      onIcon: content4ON,
    },
    {
      id: 3,
      title: "بیمه تکمیلی",
      extra: "انفرادی و خانوادگی و شرکتی",
      navBanner: "نقدی و اقساط",
      icon: content5,
      onIcon: content5ON,
    },
    {
      id: 4,
      title: "بیمه عمر",
      extra: "عمر و سرمایه گذاری",
      navBanner: null,
      icon: content6,
      onIcon: content6ON,
    },
    {
      id: 5,
      title: "بیمه موبایل",
      extra: "سرقت و آسیب دیدگی و ...",
      navBanner: "70% تخفیف",
      icon: content7,
      onIcon: content7ON,
    },
    {
      id: 6,
      title: "بیمه مسافرتی",
      extra: "داخلی و خارجی و ...",
      navBanner: "صدور آنی",
      icon: content8,
      onIcon: content8ON,
    },
  ],
};

const topContentTwo = [
  {
    id: 1,
    img: contentTwo1,
    imgON: contentTwo1ON,
    title: "کالای دیجیتال",
    extra: "موبایل و تبلت و لبتاب و ...",
  },
  {
    id: 2,
    img: contentTwo3,
    imgON: contentTwo3ON,
    title: "طلا و جواهر",
    extra: "زیورآالات و سرویس و شمش",
  },
  {
    id: 3,
    img: contentTwo2,
    imgON: contentTwo2ON,
    title: "لوازم خانگی",
    extra: "یخچال و فرش و جارو و ...",
  },
  {
    id: 4,
    img: contentTwo4,
    imgON: contentTwo4ON,
    title: "گردشگری",
    extra: "بلیط هتل و تور",
  },
];

const HeroContent = () => {
  const [contentPart, setContentPart] = useState(1);

  const [firstPart, setfirstPart] = useState(null);
  const [secondPart, setSecondPart] = useState(null);

  const [sliderPrice, setSliderPrice] = useState(1);

  const [activeBtn, setActiveBtn] = useState(1);

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-center max-h-full pt-[6%] relative"
        style={{ backgroundImage: "url('assets/img/hero/hero-bg.jpg')" }}
      >
        <div className="w-full px-4 lg:px-0 lg:w-[85%] xl:w-[64%] mx-auto flex flex-col justify-between py-3 mt-10 ">
          <div className="flex flex-col-reverse gap-8 lg:gap-5 lg:flex-row justify-between w-full">
            {/* -------------- top icon  --------------- */}

            <div className="bg-white w-full lg:w-1/2 xl:w-[450px] lg:px-10 px-1 flex items-center justify-evenly xl:justify-between p-3 rounded-t-2xl mt-5 lg:border-none border-t border-l border-r">
              {topContent.map((item, index) => {
                return (
                  <div
                    onClick={() => setContentPart(item.id)}
                    className="cursor-pointer flex flex-col gap-2 items-center justify-center relative"
                    key={item.id}
                  >
                    <Image
                      src={item.img}
                      priority
                      alt="None"
                      className={`absolute transition-all duration-200  ${
                        contentPart == item.id
                          ? "w-16 -translate-y-12"
                          : "pb-14 w-9"
                      }`}
                    />
                    <p className="text-xs IRANSansX-DemiBold pt-8">
                      {item.title}
                    </p>
                    <p className="text-[10px]">{item.extra}</p>
                  </div>
                );
              })}
            </div>

            {/* ------------- mini banner -------------- */}

            <div className="flex items-center justify-center w-full lg:w-1/2 gap-5">
              <button className="hidden md:flex button-prev-stories">
                <RightOutlined className="text-slate-700" />
              </button>

              <Swiper
                speed={2000}
                spaceBetween={100}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                modules={[Navigation, Autoplay]}
                a11y
                slidesPerView={1}
                navigation={{
                  nextEl: ".button-next-stories",
                  prevEl: ".button-prev-stories",
                }}
                className="w-full !px-6"
              >
                {miniBanner.map((item) => (
                  <SwiperSlide className="!w-full" key={item.id}>
                    {item.content}
                  </SwiperSlide>
                ))}
              </Swiper>

              <button className="hidden md:flex button-next-stories">
                <LeftOutlined className="text-slate-700" />
              </button>
            </div>
          </div>

          {/* --------------- tab content -------------- */}

          <div className="bg-white w-full pb-5 rounded-b-2xl rounded-tl-none lg:rounded-tl-2xl lg:px-10 pt-7 border-l border-r border-b">
            {contentPart == 1 ? (
              <>
                {/* ---------- A --------- */}
                <div className="flex flex-col lg:flex-row justify-between ">
                  <div className="flex flex-col gap-3">
                    <p className="text-xl lg:text-2xl text-slate-800 text-center">
                      ازکی؛ مقایسه و خرید آنلاین بیمه
                    </p>
                    <p className="lg:text-[16px] text-sm text-slate-400 IRANSansX-Regular text-center">
                      بیمه‌ مورد نظرت رو انتخاب کن!
                    </p>
                  </div>

                  <Input
                    className="!IRANSansX-Regular hidden lg:flex rounded-2xl w-full lg:w-[400px] text-slate-600 border-slate-300 h-12 items-center"
                    prefix={
                      <>
                        <SearchOutlined className="text-xl pl-2" />
                      </>
                    }
                    placeholder="بیمه مورد نظر را جست و جو کنید ..."
                    size="middle"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 w-full lg:gap-3 mt-10 gap-y-5">
                  {/* -------- 1 -------- */}
                  {topContentOne.sectionOne.map((item) => (
                    <div
                      onMouseEnter={() => setfirstPart(item.id)}
                      onMouseLeave={() => setfirstPart(null)}
                      key={item.id}
                      className="relative col-span-2 md:col-span-2 bg-white rounded-lg p-5 drop-shadow-xl hover:cursor-pointer mx-2 lg:mx-0"
                    >
                      <div className="flex gap-4 items-center">
                        <Image
                          src={firstPart == item.id ? item.onIcon : item.icon}
                          alt="None"
                          className="w-[70px]"
                        />
                        <div className="flex flex-col gap-2">
                          <p className="IRANSansX-Bold">{item.title}</p>
                          <p className="text-slate-500 text-xs">{item.extra}</p>
                        </div>
                      </div>

                      <div className="bg-[#e5f4ff] mt-4 p-1 text-blue-500 text-xs lg:text-sm text-center rounded-md">
                        {item.bottomContent}
                      </div>

                      <div className="absolute top-0 left-0">
                        <p className="text-[11px] px-2 p-1 rounded-full text-white bg-[#008fff]">
                          {item.navBanner}
                        </p>
                      </div>
                    </div>
                  ))}
                  {/* -------- 2 -------- */}

                  {topContentOne.sectionTwo.map((item) => (
                    <div
                      onMouseEnter={() => setSecondPart(item.id)}
                      onMouseLeave={() => setSecondPart(null)}
                      key={item.id}
                      className="relative bg-white rounded-lg p-5 drop-shadow-xl hover:cursor-pointer mx-1 lg:mx-0"
                    >
                      <div className="flex flex-col gap-1 items-center justify-center ">
                        <Image
                          src={secondPart == item.id ? item.onIcon : item.icon}
                          alt="None"
                        />
                        <p className="IRANSansX-Bold">{item.title}</p>
                        <p className="text-slate-500 text-xs">{item.extra}</p>
                      </div>

                      <div
                        className={`absolute top-0 left-0 ${
                          item.navBanner == null && "hidden"
                        }`}
                      >
                        <p className="text-[11px] px-2 p-1 rounded-full text-white bg-[#008fff]">
                          {item.navBanner}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-5">
                  <Input
                    className="!IRANSansX-Regular lg:hidden flex rounded-2xl w-full text-slate-600 border-slate-300 h-12 items-center mt-5"
                    prefix={
                      <>
                        <SearchOutlined className="text-xl pl-2" />
                      </>
                    }
                    placeholder="بیمه مورد نظر را جست و جو کنید ..."
                    size="middle"
                  />
                </div>
              </>
            ) : contentPart == 2 ? (
              <>
                {/* ---------- B --------- */}
                <div className="flex flex-col gap-10 relative">
                  <div className="flex flex-col gap-3 ">
                    <p className="text-lg mx-auto lg:mx-0 lg:text-2xl text-slate-800">
                      ازکی‌وام؛ اعتبار خرید اقساطی کالا و خدمات
                    </p>
                    <p className="text-xs text-center mx-auto lg:mx-0 lg:text-[16px] text-slate-500 IRANSansX-Regular ">
                      در ازکی‌وام می‌تونید تا سقف ۷۵ میلیون تومان اعتبار بگیرید
                      و هزینه‌ی محصول موردنظر رو در بازه‌های زمانی متعدد پرداخت
                      کنید.
                    </p>
                  </div>

                  <div className="flex justify-between mt-2 lg:mt-5 pb-8">
                    <div className="flex-col text-slate-600 gap-3 w-1/3 hidden md:flex">
                      <div className="flex gap-3 items-center">
                        <Image src={titleSecondTop2} alt="None" />
                        <p>وام طولانی مدت خرید کالا و خدمات</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <Image src={titleSecondTop1} alt="None" />
                        <p> بدون محدودیت در انتخاب</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <Image src={titleSecondTop3} alt="None" />
                        <p> خرید از فروشگاه‌های معتبر</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-5 justify-end items-center w-full md:w-2/3 px-5 lg:px-10">
                      {/* ----------- */}

                      {topContentTwo.map((item) => (
                        <div
                          onMouseEnter={() => setfirstPart(item.id)}
                          onMouseLeave={() => setfirstPart(null)}
                          key={item.id}
                          className="relative bg-white rounded-lg p-5 drop-shadow-xl hover:cursor-pointer col-span-1"
                        >
                          <div className="flex flex-col gap-1 items-center justify-center">
                            <Image
                              alt="None"
                              src={firstPart == item.id ? item.imgON : item.img}
                            />
                            <p className="IRANSansX-Bold">{item.title}</p>
                            <p className="text-slate-500 text-xs">
                              {item.extra}
                            </p>
                          </div>
                        </div>
                      ))}

                      {/* ------------ */}
                    </div>
                  </div>
                  <Image
                    src={contentBottom}
                    alt="None"
                    className="bottom-0 -right-1 absolute w-1/4 hidden md:flex"
                  />
                </div>
              </>
            ) : contentPart == 3 ? (
              <>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col lg:flex-row gap-3 items-center">
                      <p className="text-xl lg:text-2xl text-slate-800">
                        ازکی‌سرمایه؛ مطمئن و پرسود‌تر از بانک{" "}
                      </p>
                      <div className="bg-[#e5f4ff] p-1 text-blue-500 text-sm text-center px-4 rounded-full">
                        تا 30% سود روزشمار
                      </div>
                    </div>

                    <p className=" text-slate-500 IRANSansX-Regular lg:text-[16px] mx-auto text-xs text-center font-thin">
                      با سرمایه‌گذاری در صندوق‌های درآمد ثابت مجوزدار، سود
                      بیشتری از پس‌انداز در بانک دریافت کنید!
                    </p>
                  </div>

                  <div className="flex flex-col lg:flex-row w-full gap-10 items-center mt-10 lg:mt-0">
                    <div className="w-full lg:w-2/3 flex flex-col gap-16 px-4 lg:px-0">
                      <div className="flex flex-col gap-1 font-thin">
                        <div className="flex justify-between">
                          <p className="text-slate-600">مبلغ سرمایه گذاری :</p>
                          <p className="IRANSansX-DemiBold font-bold">
                            {sliderPrice != 1000 ? (
                              <>{sliderPrice} میلیون تومان</>
                            ) : (
                              "1 میلیارد تومان"
                            )}
                          </p>
                        </div>
                        <Slider
                          reverse
                          tooltip={{
                            formatter: null,
                          }}
                          defaultValue={250}
                          max={1000}
                          min={1}
                          onChange={(e) => setSliderPrice(e)}
                        />
                        <div className="flex justify-between">
                          <p className="text-slate-600 text-xs">
                            یک میلیون تومان
                          </p>
                          <p className="text-slate-600 text-xs">
                            یک میلیارد تومان
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:flex justify-between">
                        <p className="text-slate-600 text-sm">
                          مدت زمان نگه‌داشت سرمایه (امکان برداشت آنی):
                        </p>
                        <div className="flex gap-2 mt-4 lg:mt-0">
                          {[
                            { id: 1, text: "شش ماه" },
                            { id: 2, text: "یک سال" },
                            { id: 10, text: "دو سال" },
                            { id: 4, text: "سه سال" },
                          ].map((item) => (
                            <button
                              key={item.id}
                              onClick={() => setActiveBtn(item.id)}
                              className={`bg-white border border-blue-400 text-[10px] lg:text-xs p-2 px-4 rounded-full text-slate-700 gap-2  flex items-center hover:text-blue-400 ${
                                activeBtn == item.id &&
                                "bg-[#e1f2ff] !text-blue-600"
                              }`}
                            >
                              {item.text}
                              {item.id == activeBtn && (
                                <CheckOutlined className="text-sm text-blue-500" />
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="bg-white lg:border w-full lg:w-1/3 h-[350px] flex flex-col items-center justify-center gap-2 text-slate-700 px-5">
                      <p className="text-slate-700">سرمایه‌گذاری در بانک</p>
                      <p className="text-slate-700">
                        تومان{" "}
                        {((sliderPrice / activeBtn) * 1000000).toLocaleString()}
                      </p>

                      <Divider
                        style={{
                          borderColor: "#c5c5c5",
                        }}
                      >
                        <div className="bg-slate-200/80 p-1 rounded-full shadow-xl size-[40px] flex">
                          <Image
                            src={contentIcon}
                            alt="None"
                            className="w-fit"
                          />
                        </div>
                      </Divider>

                      <p className="text-[#008fff]">
                        سرمایه‌گذاری در ازکی‌سرمایه
                      </p>

                      <p className="text-2xl mt-3">
                        تومان{" "}
                        {(
                          (sliderPrice / activeBtn) * 1000000 +
                          5000000
                        ).toLocaleString()}
                      </p>

                      <button
                        className="w-full !bg-[#008fff] !text-white hover:!bg-blue-400 !border-none mt-3 h-10 rounded-lg shadow-lg"
                        onClick={() => console.log("PAY")}
                      >
                        شروع سرمایه گذاری
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
        
        <div className="h-[20%] w-full -bottom-[20%] absolute bg-gradient-to-t to-[#e7f5fe] from-white hidden lg:flex" />
      </div>
    </>
  );
};

export default HeroContent;
