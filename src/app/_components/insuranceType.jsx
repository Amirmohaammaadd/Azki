import Image from "next/image";
import type1 from "../../../public/assets/img/insurance type/1.webp";
import type2 from "../../../public/assets/img/insurance type/2.webp";
import type3 from "../../../public/assets/img/insurance type/3.webp";
import type4 from "../../../public/assets/img/insurance type/4.webp";

const InsuranceType = () => {
  const nsuranceContent = [
    {
      id: 1,
      icon: type1,
      title: "بیمه شخص ثالث",
      text: "بیمه شخص ثالث بیمه‌ای الزامی برای دارندگان وسایل نقلیه موتوری است. با ازکی، امکان استعلام قیمت بیمه شخص ثالث و خرید آنلاین آن از تمامی شرکت‌های بیمه (بیمه ایران، آسیا، پاسارگاد، البرز، نوین، ملت، دانا، سینا، آرمان، کارآفرین و ...) وجود دارد.",
    },
    {
      id: 2,
      icon: type2,
      title: "بیمه بدنه",
      text: "بیمه بدنه بیمه‌ای اختیاری است که می‌تواند به عنوان مکمل بیمه شخص ثالث استفاده شود. ازکی امکان استعلام قیمت و خرید آنلاین بیمه بدنه خودرو را از کلیه شرکت‌های بیمه فراهم کرده است. ضمناً از طریق ازکی می‌توانید از تخفیف‌های ویژه شرکت‌های بیمه و جشنواره‌های فصلی که تأثیر بسزایی بر نرخ بیمه بدنه دارند، مطلع شوید.",
    },
    {
      id: 3,
      icon: type3,
      title: "بیمه عمر",
      text: "بیمه عمر و سرمایه‌گذاری از شما و خانواده شما در طول مدت زندگی محافظت می‌کند. حتی بعد از مرگ بیمه‌گزار نیز از خانواده او پشتیبانی می‌کند. با ازکی می‌توانید اقدام به مقایسه شرایط بیمه عمر شرکت‌های مختلف بیمه کنید و مناسب‌ترین بیمه را به‌صورت آنلاین خریداری کنید.",
    },
    {
      id: 4,
      icon: type4,
      title: "بیمه مسافرتی خارج از کشور",
      text: "بیمه مسافرتی خارج از کشور از شما در برابر خطرات ممکن در طول سفرهای خارجی محافظت می‌کند. با اپلیکیشن و وب‌سایت ازکی می‌توانید پس از استعلام قیمت بیمه مسافرتی شرکت‌های مختلف و مقایسه آن‌ها، بهترین انتخاب را داشته باشید و بیمه مورد نظر خود را آنلاین خریداری کنید.",
    },
    {
      id: 5,
      icon: type1,
      title: "بیمه مسئولیت پزشکان",
      text: "بیمه مسئولیت پزشکان و پیراپزشکان مسئولیت بروز خسارت‌های غیرعمدی وارد شده از پزشکان و پیراپزشکان به بیماران را قبول می‌کند. پزشکان و پیراپزشکان با داشتن این بیمه دیگر لازم نیست نگران بروز حادثه‌ای برای بیماران خود باشند. با ازکی می‌توان بیمه‌های مسئولیت پزشکان شرکت‌های مختلف بیمه را با یکدیگر مقایسه کرد و مناسب‌ترین بیمه را برای خود انتخاب و خریداری کرد.",
    },
    {
      id: 6,
      icon: type2,
      title: "بیمه آتش سوزی",
      text: "بیمه آتش سوزی ساختمان بیمه‌ای اختیاری است که متأسفانه لزوم خرید آن، زمانی احساس می‌شود که خیلی دیر شده است. با ازکی می‌توانید از پیشنهادهای مختلف شرکت‌های بیمه و تخفیف‌های ویژه آن‌ها مطلع شوید. همچنین امکان مقایسه و خرید آنلاین بیمه آتش سوزی از شرکت‌های مختلف بیمه با ازکی فراهم شده است.",
    },
  ];

  return (
    <>
      <div className="lg:pt-[12%] pt-[30%] flex flex-col items-center">
        <p className="text-2xl lg:text-4xl">همه چیز درباره انواع بیمه...</p>
        <p className="text-sm lg:text-2xl mt-4 text-slate-600">
          اینجا می‌تونی اطلاعات مورد نیازت رو درباره تمام بیمه‌ها بخونی.
        </p>
      </div>

      <div className="w-[90%] lg:w-[60%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 mt-10">
        {nsuranceContent.map((item) => (
          <div
            key={item.id}
            className="bg-white h-fit flex flex-col lg:flex-row justify-center gap-10 lg:justify-between p-5 rounded-lg py-10 xl:h-[300px] shadow-xl"
          >
            <Image
              src={item.icon}
              alt="none"
              className="size-[130px] mx-auto"
            />

            <div className="flex flex-col text-right gap-3">
              <p className="text-xl IRANSansX-DemiBold">{item.title}</p>
              <p className="text-sm leading-7 text-slate-700">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default InsuranceType;
