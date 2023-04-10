import React, { useState } from "react";
import { FaCar, FaHome } from "react-icons/fa";
import car from "../assets/car.jpg";
import home from "../assets/home-4-bg.jpg";

const LandingPage = () => {
  const [datacar, setDataCar] = useState(true);
  const [datahome, setDataHome] = useState(false);
  const handleDataCar = () => {
    setDataCar(true);
    setDataHome(false);
  };
  const handleDataHome = () => {
    setDataCar(false);
    setDataHome(true);
  };
  console.log(datacar + "" + datahome);
  // console.log(datahome)

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-900 text-white">
      <nav className="flex flex-row justify-between sticky-top text-white shadow-md py-6 px-20">
        <div className="py-2 text-3xl font-bold">
          <a href="/" className="">
            uDecide
          </a>
        </div>
      </nav>
      <div className="mt-10 w-full grid grid-cols-1 lg:grid-cols-2">
        <div className=" grid grid-cols-3">
          <div className="  flex flex-col justify-between py-12 items-center">
            <div
              onClick={handleDataCar}
              className=" p-6 cursor-pointer rounded-full border-green-400 bg-[#1fdf64] hover:bg-green-400 hover:text-white border-[2px] text-black "
            >
              <FaCar size={40} />
            </div>
            <div
              onClick={handleDataHome}
              className=" p-6 cursor-pointer rounded-full border-green-400 bg-[#1fdf64] hover:bg-green-400 hover:text-white border-[2px] text-black "
            >
              <FaHome size={40} />
            </div>
          </div>
          {datacar && (
            <div className=" col-span-2 flex flex-col justify-around p-6 ">
              <div className=" text-5xl font-bold">
                Vehicle Damage Inspection
              </div>
              <div className=" text-lg font-medium my-3">
                Our car damage detection system accurately identifies and
                classifies vehicle damage, streamlining the claims process for
                car insurance.{" "}
              </div>
              <div>
                <button className=" py-2  px-8 duration-300  bg-white hover:bg-[#1fdf64] font-medium text-black text-center rounded-full text-2xl">
                  Start
                </button>
              </div>
            </div>
          )}
          {datahome && (
            <div className=" col-span-2 flex flex-col justify-around py-6 px-3 ">
              <div className=" text-5xl font-bold">
                Property Damage Inspection
              </div>
              <div className=" text-lg font-medium my-3">
                Our property damage inspection services provide comprehensive
                assessment and evaluation of building and site damage for
                insurance claims.
              </div>
              <div>
                <button className=" py-2  px-8 duration-300  bg-white hover:bg-[#1fdf64] font-medium text-black text-center rounded-full text-2xl">
                  Start
                </button>
              </div>
            </div>
          )}
        </div>
        {datacar && (
          <div className="relative hidden lg:block rounded-lg ">
            <div className=" absolute p-32 bg-green-200 left-[2%] bottom-[30%] rounded-full"></div>
            <div className=" absolute p-20 bg-green-300 right-[2%] top-[60%] rounded-full"></div>
            <div className=" px-20 py-8">
              <img
                className=" relative w-full rounded-xl   object-contain"
                src={car}
                alt=""
              />
            </div>
          </div>
        )}
        {datahome && (
          <div className="relative hidden lg:block rounded-lg ">
            <div className=" absolute p-32 bg-green-300 left-[2%] bottom-[35%] rounded-full"></div>
            <div className=" absolute p-20 bg-green-200 right-[2%] top-[60%] rounded-full"></div>
            <div className=" px-20 py-8">
              <img
                className=" relative w-full rounded-xl   object-contain"
                src={home}
                alt=""
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
