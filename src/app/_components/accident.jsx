import Image from "next/image";
import accident from "../../../public/assets/img/accident/1.svg";
import accidentMobile from "../../../public/assets/img/accident/acc-mobile.svg";

const AccidentContent = () => {
  const rightPart = [
    {
      id: 1,
      title: "۱. انتخاب نوع بیمه‌",
      extra:
        "بعد از تعیین نوع بیمه، لازمه مشخص کنی که مقصر حادثه هستی یا زیان‌دیده‌ای.",
    },

    {
      id: 3,
      title: "۳. ورود اطلاعات تکمیلی",
      extra:
        "نوشتن اطلاعات تکمیلی، به کارشناسان کمک می‌کنه تا میزان خسارت رو دقیق‌تر ارزیابی کنن.",
    },

    {
      id: 5,
      title: "۵. دریافت مبلغ خسارت",
      extra:
        "در نهایت بعد از محاسبه کارشناس و تأیید زیان‌دیده، مبلغ خسارت به صورت آنلاین پرداخت میشه.",
    },
  ];

  const leftPart = [
    {
      id: 2,
      title: "۲. ثبت مشخصات بیمه",
      extra:
        "مشخصات شرکت بیمه‌گر، مقصر و زیا‌ن‌دیده رو ثبت کن و آدرس وقوع حادثه رو جهت بازدید بنویس. ",
    },
    {
      id: 4,
      title: "۴. ارزیابی کارشناسان",
      extra:
        "در این مرحله کارشناس بخش خسارت ازکی، برای ارزیابی و بازدید از خودرو، باهات تماس می‌گیره.",
    },
  ];

  return (
    <div className="w-full px-5 lg:px-0 lg:w-[55%] flex flex-col mx-auto mt-[20%] lg:mt-[10%]">
      <div className="flex flex-col items-center">
        <p className="text-xl lg:text-3xl">اگه تصادف کردم، چیکار کنم؟</p>
        <p className="text-sm lg:text-xl mt-4 text-slate-600">
          در ۵ مرحله ساده درخواست خسارتت رو ثبت کن.
        </p>
      </div>

      <div className=" grid-cols-5 mt-16 justify-center items-center hidden lg:grid">
        <div className=" flex flex-col justify-evenly h-full">
          {rightPart.map((item) => (
            <div key={item.id} className="flex flex-col gap-2">
              <p className=" text-blue-500 IRANSansX-DemiBold">{item.title}</p>
              <p className=" text-slate-700 text-xs leading-7">{item.extra}</p>
            </div>
          ))}
        </div>
        <div className=" col-span-3 items-center justify-center flex">
          <Image src={accident} alt="none" className="w-fit" />
        </div>
        <div className="flex flex-col justify-center gap-14 h-full">
          {leftPart.map((item) => (
            <div key={item.id} className="flex flex-col gap-2">
              <p className=" text-blue-500 IRANSansX-DemiBold">{item.title}</p>
              <p className=" text-slate-700 text-xs leading-7">{item.extra}</p>
            </div>
          ))}
        </div>
      </div>
      {/* ----------------- Mobile --------------- */}
      <div className="flex justify-center mt-10 gap-5 sm:w-2/3 mx-auto lg:hidden">
        <div className="w-1/3">
          <Image src={accidentMobile} alt="none" className="w-fit" />
        </div>

        <div className="flex flex-col gap-7">
          {rightPart.map((item) => (
            <div key={item.id} className="flex flex-col">
              <p className="text-blue-500 IRANSansX-DemiBold">{item.title}</p>
              <p className="text-slate-700 text-xs leading-7">{item.extra}</p>
            </div>
          ))}

          {leftPart.map((item) => (
            <div key={item.id} className="flex flex-col gap-2">
              <p className=" text-blue-500 IRANSansX-DemiBold">{item.title}</p>
              <p className=" text-slate-700 text-xs leading-7">{item.extra}</p>
            </div>
          ))}
        </div>
      </div>

      <button className="w-full lg:w-fit px-4 mx-auto mt-10 text-sm !bg-[#008fff] !text-white hover:!bg-blue-400 h-10 rounded-lg shadow-lg">
        شروع سرمایه گذاری
      </button>
    </div>
  );
};

export default AccidentContent;
