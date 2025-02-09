import Image from "next/image";
import logo from "../../../public/assets/img/logo.svg";

import trust1 from "../../../public/assets/img/trust/1.png";
import trust2 from "../../../public/assets/img/trust/2.webp";
import trust3 from "../../../public/assets/img/trust/3.webp";
import { LinkedinOutlined } from "@ant-design/icons";
// import trust4 from "../../../public/assets/img/trust/4.webp";

const Footer = () => {
  const itemsFirst = [
    { id: 2, title: "پنل فروشندگان" },
    { id: 3, title: "شرایط و قوانین" },
    { id: 4, title: "سوالات متداول" },
    { id: 5, title: "همکاری با نماینده‌های بیمه" },
    { id: 6, title: "تماس با ما" },
    { id: 7, title: "درباره ما" },
    { id: 8, title: "اتاق خبر ازکی" },
    { id: 9, title: "فرصت‌های شغلی" },
  ];

  const itemsTwo = [
    { id: 1, title: "بیمه شخص ثالث" },
    { id: 2, title: "بیمه بدنه" },
    { id: 3, title: "بیمه موتورسیکلت" },
    { id: 4, title: "بیمه درمان تکمیلی" },
    { id: 5, title: "بیمه آتش سوزی" },
    { id: 6, title: "بیمه مسافرتی" },
    { id: 7, title: "بیمه عمر" },
    { id: 8, title: "بیمه مسئولیت پزشکان" },
  ];

  const itemsThree = [
    { id: 1, title: "ازکی‌ کلاب" },
    { id: 2, title: "بیمه اقساطی خودرو" },
    { id: 3, title: "خسارت آنلاین" },
    { id: 4, title: "بخشودگی جرایم بیمه" },
    { id: 5, title: "استعلام پلاک" },
  ];

  const trustArr = [
    { id: 1, icon: trust1 },
    { id: 2, icon: trust2 },
    { id: 3, icon: trust3 },
    { id: 4, icon: trust1 },
  ];

  return (
    <>
      <div
        className="w-full pt-1"
        style={{
          background:
            "linear-gradient(180deg, #fff, hsla(0, 0%, 100%, 0) 15.59%), linear-gradient(90.32deg, #fdf5e0 -2.35%, #fff 45.56%, #e2f7f9 99.81%)",
        }}
      >
        <div className="w-[85%] mx-auto gap-10 mt-[10%] grid-cols-5 hidden xl:grid">
          <div className="flex flex-col gap-3 text-sm text-slate-700">
            <Image src={logo} alt="none" className="w-1/4 mb-2" />
            <p className="leading-6">
              ازکی شرکت بیمه نیست؛ با ازکی آنلاین شرکت‌های بیمه رو باهم مقایسه
              کنید و با خیال راحت بیمه بخرید. به کمک ازکی می‌تونید قبل از خرید
              درباره انواع مختلف بیمه، پوشش‌ها و قیمت‌هاشون اطلاعات دقیق و کامل
              کسب کنید.
            </p>
            <p className="mt-4">
              خیابان ولیعصر، بالاتر از پارک ساعی، بن‌بست یاس، پلاک ۱
            </p>
            <p>ایمیل: info@azki.com</p>
          </div>
          <div className=" col-span-3 flex justify-between px-16">
            <div className=" flex flex-col gap-2">
              <p className="text-blue-600 IRANSansX-Bold">دسترسی سریع</p>
              {itemsFirst.map((item) => (
                <p key={item.id} className="text-sm text-slate-800 my-1">
                  {item.title}
                </p>
              ))}
            </div>
            <div>
              <div className=" flex flex-col gap-2">
                <p className="text-blue-600 IRANSansX-Bold">بیمه ها</p>
                {itemsTwo.map((item) => (
                  <p key={item.id} className="text-sm text-slate-800 my-1">
                    {item.title}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <div className=" flex flex-col gap-2">
                <p className="text-blue-600 IRANSansX-Bold">خدمات مشتریان</p>
                {itemsThree.map((item) => (
                  <p key={item.id} className="text-sm text-slate-800 my-1">
                    {item.title}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 ">
            {trustArr.map((item) => (
              <Image
                src={item.icon}
                alt="None"
                className="w-[100px]"
                key={item.id}
              />
            ))}
          </div>
        </div>
        <div className="w-full text-white text-sm p-3 flex justify-between z-30 px-[10%] bg-[#4264f7] mt-[4%]">
          <p>کلیه حقوق این وب سایت محفوظ و متعلق به شرکت ازکی می‌باشد.</p>
          <LinkedinOutlined className="text-xl" />
        </div>
      </div>
    </>
  );
};

export default Footer;
