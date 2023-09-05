import React from "react";
import { data } from "./data";

export default function ExchangeSection() {
  return (
    <div className="bg-[#141619] text-white flex flex-col xl:flex-row justify-center items-center gap-28 relative pt-20 p-8">
      {/*<img*/}
      {/*  src='/ExchangeSection/mainGradient.svg'*/}
      {/*  className="absolute xl:-left-32 xl:-top-80 md:w-[61rem]"*/}
      {/*  alt="grad1"*/}
      {/*/>*/}
      {/*<img*/}
      {/*  src='/ExchangeSection/gradient2.svg'*/}
      {/*  className="absolute xl:right-64 xl:-bottom-[32rem] right-10"*/}
      {/*  alt="grad2"*/}
      {/*/>*/}
      <img className="z-10" src="/ExchangeSection/mainImg.svg" alt="mainImg" />
      <div className="flex flex-col gap-8 mb-12 sm:w-[25.5rem] w-full sm:justify-items-center">
        {data.map((value, index) => {
          return (
            <div key={index} className="flex flex-col gap-4">
              <h1 className="text-4xl font-normal pb-4 tracking-wide">{value.title}</h1>
              <h2 className="text-xl font-bold tracking-[0.015em]">{value.subtitle}</h2>
              <p className="text-[#E5E5E5] text-xl font-normal">
                {value.content}
              </p>
            </div>
          );
        })}
        <div className="flex gap-2 relative ml-24 sm:ml-0">
          <p className="text-xl font-normal mb-1">Learn more</p>
          <div className="common-gradient w-[6.25rem] h-0.5 absolute bottom-0"></div>
          <a className="mt-2" href="#">
            <img src="/ExchangeSection/arrow.svg" alt="arrow" />
          </a>
        </div>
      </div>
    </div>
  );
}
