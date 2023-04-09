import React,{useState} from "react";
import {FaCar,FaHome} from 'react-icons/fa'
import car from '../assets/car.jpg'
import home from '../assets/home-bg.jpg'

const LandingPage = () => {
  const[datacar,setDataCar]=useState(true)
  const[datahome,setDataHome]=useState(false)
const handleDataCar=()=>{
  setDataCar(true)
  setDataHome(false)
}
const handleDataHome=()=>{
  setDataCar(false)
  setDataHome(true)
}
console.log(datacar+''+datahome)
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
            <div onClick={handleDataCar} className=" p-6 cursor-pointer rounded-full border-green-400 bg-green-500 hover:bg-green-400 hover:text-white border-[2px] text-green-300 ">
              <FaCar size={40}/>
            </div>
            <div onClick={handleDataHome} className=" p-6 cursor-pointer rounded-full border-green-400 bg-green-500 hover:bg-green-400 hover:text-white border-[2px] text-green-300 ">
              <FaHome size={40}/>
            </div>
          </div>
          {datacar &&
          <div className=" col-span-2 flex flex-col justify-around p-6 ">
            <div className=" text-5xl font-bold">
              Car Insurance
            </div>
            <div  className=" text-lg font-medium">
            Our technology aims to streamline the  insurance claims process and improve accuracy, providing customers with a faster and more efficient claims experience.
            </div>
            <div>
              <button className=" px-6 py-4 bg-green-400 hover:bg-green-300 rounded-full">V</button>
            </div>
          </div>
          }
          {datahome &&
          <div className=" col-span-2 flex flex-col justify-around p-6 ">
            <div className=" text-5xl font-bold">
              Home Insurance
            </div>
            <div  className=" text-lg font-medium">
            Our technology aims to streamline the  insurance claims process and improve accuracy, providing customers with a faster and more efficient claims experience.
            </div>
            <div>
              <button className=" px-6 py-4 bg-green-400 hover:bg-green-300 rounded-full">V</button>
            </div>
          </div>
          }
        </div>
        {datacar &&
        <div className="  hidden lg:block rounded-lg px-20 py-8">
          <img className=" w-full rounded-xl border-green-400 border-[2px] object-contain" src={car} alt="" />
        </div>
        }
        {datahome &&
        <div className="  hidden lg:block rounded-lg px-20 py-8">
          <img className=" w-full rounded-xl border-green-400 border-[2px] object-contain" src={home} alt="" />
        </div>
        }
      </div>
    </div>
  );
};

export default LandingPage;
