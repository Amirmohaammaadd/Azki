"use client";

import "../globals.css";
import Image from "next/image";
import logo from "../../../public/assets/img/logo.svg";
import { useEffect, useState } from "react";
import { CustomerServiceOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Drawer, Input, Modal } from "antd";
import almas from "../../../public/assets/img/almas.svg";

export const ArrowIconCustom = () => {
  return (
    <div className="w-6 text-slate-700 hover:text-blue-500 hover:cursor-pointer">
      <svg
        className="MuiSvgIcon-root MuiSvgIcon-colorN600 MuiSvgIcon-fontSizeMedium lotus-80o69r"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.29289 10.2929C7.68342 9.90237 8.31658 9.90237 8.70711 10.2929L12 13.5858L15.2929 10.2929C15.6834 9.90237 16.3166 9.90237 16.7071 10.2929C17.0976 10.6834 17.0976 11.3166 16.7071 11.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L7.29289 11.7071C6.90237 11.3166 6.90237 10.6834 7.29289 10.2929Z"
            fill="currentColor"
          ></path>
        </svg>
      </svg>
    </div>
  );
};

const Navbar = () => {
  const [showModal, setShowModal] = useState(null);
  const [registerModal, setRegisterModal] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    if (openDrawer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openDrawer]);

  // ----------- Scroll nav function ---------

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // -----------------------------------------

  const navItem = [
    { id: 1, title: "بیمه ها", arrow: true },
    { id: 2, title: "خسارت آنلاین", arrow: true },
    { id: 3, title: "دریافت اعتبار" },
    { id: 4, title: "شرکت های بیمه" },
    { id: 5, title: "فروشنده شوید" },
    { id: 6, title: "بلاگ" },
  ];

  const navFirstsModalData = {
    navModalArr1: [
      { id: 1, name: "بیمه شخص ثالث خودرو" },
      { id: 2, name: "بیمه بدنه خودرو" },
      { id: 3, name: "بیمه شخص ثالث موتور" },
      { id: 4, name: "بیمه بدنه موتور" },
    ],
    navModalArr2: [
      { id: 1, name: "بیمه آتش سوزی" },
      { id: 2, name: "بیمه زلزله" },
      { id: 3, name: "بیمه موبایل" },
      { id: 4, name: "آتش سوزی اداری و تجاری" },
      { id: 5, name: "آتش سوزی صنعتی" },
      { id: 6, name: "بسته جامع مسکونی" },
    ],
    navModalArr3: [
      { id: 1, name: "بیمه مسافرتی" },
      { id: 2, name: "بیمه عمر" },
      { id: 3, name: "درمان تکمیلی" },
      { id: 4, name: "حوادث انفرادی" },
      { id: 5, name: "بیمه مسافرت داخلی" },
      { id: 6, name: "بیمه مسافرین ورودی به ایران" },
      { id: 7, name: "حوادث گروهی" },
      { id: 8, name: "بیمه کربلا" },
    ],
    navModalArr4: [
      { id: 1, name: "بیمه مسئولیت پزشکان" },
      { id: 2, name: "بیمه آسانسور" },
      { id: 3, name: "مسئولیت کارفرما در قبال کارکنان ساختمانی" },
      { id: 4, name: "مسئولیت کارفرما در قبال کارکنان غیر ساختمانی" },
      { id: 5, name: "مسئولیت مدیران ساختمان" },
      { id: 6, name: "مسئولیت حرفه ای مهندسین ناظر" },
    ],
  };

  return (
    <>
      <div
        className={`flex shadow-md z-20 fixed py-2 lg:py-4 transition-all duration-300 justify-between items-center bg-white border px-5 xl:px-[3%]  ${
          isScrolled || showModal == 1 || showModal == 2
            ? "mt-0 w-full"
            : "lg:mt-4 lg:rounded-2xl lg:w-[90%] xl:w-[85%] lg:mr-[5%] xl:mr-[7%] w-full"
        } `}
      >
        <div className="flex items-center gap-8">
          <Image src={logo} alt="none" className="w-fit mb-2" />

          {navItem.map((item) => (
            <div
              key={item.id}
              className="hover:cursor-pointer hidden lg:flex items-center gap-1 text-sm hover:text-blue-500 transition-all duration-150"
              onClick={() => item.arrow && setShowModal(item.id)}
            >
              {item.title}

              {item.arrow && <ArrowIconCustom />}
            </div>
          ))}
          {/* ----------- show modal 1 ----------- */}

          <Modal
            onCancel={() => setShowModal(null)}
            open={showModal == 1}
            footer={null}
            mask={false}
            getContainer={false}
            closeIcon={false}
            width={1300}
            style={{ top: 75 }}
            className="customModal"
          >
            <div className="grid grid-cols-4 text-slate-700 gap-10 px-10 py-5 bg-[#eef7fc] rounded-lg">
              <div className="flex flex-col gap-7">
                {navFirstsModalData.navModalArr1.map((item) => (
                  <p
                    className="hover:text-blue-800 transition-all duration-150 cursor-pointer"
                    key={item.id}
                  >
                    {item.name}
                  </p>
                ))}
              </div>
              <div className="flex flex-col gap-7">
                {navFirstsModalData.navModalArr2.map((item) => (
                  <p
                    className="hover:text-blue-500 transition-all duration-150 cursor-pointer"
                    key={item.id}
                  >
                    {item.name}
                  </p>
                ))}
              </div>
              <div className="flex flex-col gap-7">
                {navFirstsModalData.navModalArr3.map((item) => (
                  <p
                    className="hover:text-blue-500 transition-all duration-150 cursor-pointer"
                    key={item.id}
                  >
                    {item.name}
                  </p>
                ))}
              </div>
              <div className="flex flex-col gap-7">
                {navFirstsModalData.navModalArr4.map((item) => (
                  <p
                    className="hover:text-blue-500 transition-all duration-150 cursor-pointer"
                    key={item.id}
                  >
                    {item.name}
                  </p>
                ))}
              </div>
            </div>
          </Modal>
          {/* ------------------------------------ */}

          {/* ----------- show modal 2 ----------- */}

          <Modal
            onCancel={() => setShowModal(null)}
            open={showModal == 2}
            footer={null}
            mask={false}
            getContainer={false}
            closeIcon={false}
            width={600}
            style={{ top: 75, left: 280 }}
            className="customModal"
          >
            <div className="grid grid-cols-2 text-slate-700 gap-10 px-10 py-5 bg-blue-50/50 rounded-lg">
              <div className="flex flex-col gap-7">
                {navFirstsModalData.navModalArr1.map((item) => (
                  <p
                    className="hover:text-blue-500 transition-all duration-150 cursor-pointer"
                    key={item.id}
                  >
                    {item.name}
                  </p>
                ))}
              </div>

              <div className="flex flex-col gap-7">
                {navFirstsModalData.navModalArr3.map((item) => (
                  <p
                    className="hover:text-blue-500 transition-all duration-150 cursor-pointer"
                    key={item.id}
                  >
                    {item.name}
                  </p>
                ))}
              </div>
            </div>
          </Modal>
          {/* ------------------------------------ */}
        </div>
        <div className="flex items-center gap-3 lg:gap-7 text-[#008fff]">
          {/* --------------------------------- */}

          <button
            className=" items-center gap-2 hidden lg:flex"
            onClick={() => setOpenDrawer(!openDrawer)}
          >
            <PhoneOutlined />
            <span className="text-sm">پشتیبانی</span>
          </button>

          <button
            className="hidden lg:flex items-center text-sm p-2 px-4 rounded-full gap-2 border border-[#008fff] "
            onClick={() => setRegisterModal(!registerModal)}
          >
            ورود / ثبت نام
          </button>

          {/* --------------------------------- */}

          <button
            className="lg:hidden flex items-center text-xs p-2 px-3 rounded-full gap-2 bg-[#f5f5f5]"
            onClick={() => setRegisterModal(!registerModal)}
          >
            <span className="text-slate-500 font-thin">ازکی کلاب</span>
            <Image src={almas} alt="None" className="w-fit" />
          </button>

          <button
            className="lg:hidden"
            onClick={() => setOpenDrawer(!openDrawer)}
          >
            <CustomerServiceOutlined className="text-2xl " />
          </button>

          {/* --------------------------------- */}
        </div>
      </div>

      <Drawer
        placement={"right"}
        width={400}
        onClose={() => setOpenDrawer(!openDrawer)}
        open={openDrawer}
        extra={<span className="text-xl text-blue-600">پشتیبانی ازکی</span>}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>

      <Modal
        footer={null}
        onCancel={() => setRegisterModal(!registerModal)}
        open={registerModal}
        destroyOnClose={true}
        title={<span className="IRANSansX-Bold">ورود / ثبت نام</span>}
        centered
        getContainer={false}
      >
        <p className="text-slate-700 mt-10">
          برای <span className="IRANSansX-Bold">ورود</span> یا{" "}
          <span className="IRANSansX-Bold">ثبت‌نام</span> شماره تلفن همراه خود
          را وارد کنید.
        </p>

        <h2 className="text-slate-700 pt-10 px-1 IRANSansX-Bold">
          شماره موبایل :{" "}
        </h2>

        <Input
          size="large"
          className="w-full !border-blue-400 border-2 mt-2"
          placeholder="*********09"
        />

        <Button className="!bg-[#008fff] !font-light !text-white w-full mt-5 h-10">
          ادامه
        </Button>
      </Modal>
    </>
  );
};

export default Navbar;
