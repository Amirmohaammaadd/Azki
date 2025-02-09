import icon1 from "../../../public/assets/img/coworker/1.webp";
import icon2 from "../../../public/assets/img/coworker/2.webp";
import icon3 from "../../../public/assets/img/coworker/3.webp";
import icon4 from "../../../public/assets/img/coworker/4.webp";
import icon5 from "../../../public/assets/img/coworker/5.webp";
import icon6 from "../../../public/assets/img/coworker/6.webp";
import icon7 from "../../../public/assets/img/coworker/7.webp";
import icon8 from "../../../public/assets/img/coworker/8.webp";
import icon9 from "../../../public/assets/img/coworker/9.webp";
import icon10 from "../../../public/assets/img/coworker/10.webp";
import icon11 from "../../../public/assets/img/coworker/11.webp";
import Image from "next/image";

import customer1 from "../../../public/assets/img/customer eye/1.svg";
import customer2 from "../../../public/assets/img/customer eye/2.svg";
import { Rate } from "antd";

const AzkiCompany = () => {
  const companies = [
    { id: 1, img: icon1 },
    { id: 2, img: icon2 },
    { id: 3, img: icon3 },
    { id: 4, img: icon4 },
    { id: 5, img: icon5 },
    { id: 6, img: icon6 },
    { id: 7, img: icon7 },
    { id: 8, img: icon8 },
    { id: 9, img: icon9 },
    { id: 10, img: icon10 },
    { id: 11, img: icon11 },
    { id: 12, img: icon3 },
    { id: 13, img: icon7 },
    { id: 14, img: icon3 },
  ];

  const customer = [
    {
      id: 1,
      icon: customer1,
      title: "خریدار",
      name: "حاج خانم",
      rate: 4,
      extra:
        "وقت طلاست! بدون اینکه از خونه بیرون برم، در حال خوردن چای زیر کولر، ثبت سفارش بیمه انجام شد. ممنون از ازکی!",
    },
    {
      id: 2,
      icon: customer2,
      title: "خریدار",
      name: "ممد آقا بقال",
      rate: 2,
      extra:
        "از لحاظ هزینه به‌صرفه‌ست و خیلی راحت می‌تونی همه بیمه‌ها رو با هم مقایسه کنی تا با بهترین قیمت، برای ماشینت بیمه بخری.",
    },
    {
      id: 3,
      icon: customer1,
      title: "خریدار",
      name: "دختر همسایه",
      rate: 5,
      extra:
        "خیلی راحت قیمت‌ها رو مقایسه می‌کنی و بعد بدون دردسر، حتی به صورت اقساطی، ماشینت رو بیمه می‌کنی.",
    },
  ];
  return (
    <>
      <div
        className="my-12 bg-cover bg-no-repeat bg-center h-[400px] gap-10 pt-[3%] flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('assets/img/coworker/1.png')" }}
      >
        <p className="text-xl text-slate-700 mt-20 lg:mt-0">
          شرکت‌های بیمه همکار
        </p>

        <div className="flex flex-wrap gap-5 pb-10 px-5 lg:px-0">
          {companies.map((item) => (
            <Image
              src={item.img}
              key={item.id}
              alt="none"
              className="size-14"
            />
          ))}
        </div>
      </div>

      <div className="pt-[7%] flex flex-col items-center">
        <p className="text-3xl">ازکی از نگاه مشتریان</p>
        <p className="text-xl mt-4 text-slate-600">
          همیشه برای خواندن نظرات شما آماده‌ایم.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-[85%] lg:w-[65%] mx-auto mt-14">
        {customer.map((item) => (
          <div className="bg-white p-5 shadow-xl rounded-xl" key={item.id}>
            <div className="flex justify-evenly gap-5 items-center">
              <Image src={item.icon} alt="none" className="w-fit" />

              <div className="flex flex-col gap-3 justify-center items-center">
                <p className="text-slate-700">{item.name}</p>
                <Rate disabled defaultValue={item.rate} className="text-sm" />
                <div className="bg-[#e5f4ff] p-1 text-blue-500 text-sm text-center px-4 rounded-full w-full">
                  {item.title}
                </div>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-8 mt-5 px-6">
              {item.extra}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AzkiCompany;
