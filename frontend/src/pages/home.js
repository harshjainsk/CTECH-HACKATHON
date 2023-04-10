import React from "react";
import img from "../assets/home-2.png";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-900 text-white">
      <nav className="flex flex-row justify-between sticky-top text-white shadow-md py-6 px-20">
        <div className="py-2 text-3xl font-bold">
          <a href="/" className="">
            uDecide
          </a>
        </div>
        {/* <div className="navbar-nav py-2">
            <button className="btn btn-secondary">Login</button>
          </div> */}
      </nav>

      <section className="mt-16 grid grid-cols-1  lg:grid-cols-2 w-full">
        <div className="flex flex-col justify-center px-20">
          <div className="w-full ">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold  mb-4">
              Deep Object Damage Detection
            </h1>
          </div>
          <div className="w-full">
            <p className="text-xl  mb-6">
              Our technology aims to streamline the insurance claims process and
              improve accuracy, providing customers with a faster and more
              efficient claims experience.{" "}
            </p>
            <button
              href="/home"
              className=" mt-3 rounded-lg text-2xl border-green-400   font-medium bg-green-400 px-6 py-3 hover:bg-green-300 text-black"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="hidden lg:block rounded-lg">
          <img className=" w-full  object-contain" src={img} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;
