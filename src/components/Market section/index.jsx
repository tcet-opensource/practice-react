import React from "react";
import gradient from "/Market section/gradient.svg";
import arrow from "/Market section/arrow.svg";
import { topArr, bottomArr } from "./data";
function Market() {
  return (
    <div className="bg-[#141619] text-white relative px-4 md:p-0 z-10">
      <img
        src={gradient}
        className="absolute md:-top-full  z-0  md:h-[2018.932px] -left-4 md:left-0 opacity-80"
      />

      {topArr.map((step, index) => (
        <div
          className="relative z-10 flex flex-col items-center mb-20 md:mb-32"
          key={index}
        >
          <p className="mb-5 text-4xl font-medium md:text-5xl">{step.head}</p>
          <p className="text-[#E5E5E5] text-xl md:max-w-xl max-w-sm">
            {step.subHead}
          </p>
        </div>
      ))}
      {bottomArr.map((step, index) => (
        <div
          className="relative z-10 flex flex-col items-center justify-around md:flex-row"
          key={index}
        >
          <div className="text-left md:text-left">
            <p className="max-w-sm mb-6 text-3xl leading-snug md:text-4xl">
              {step.head}
            </p>
            <p className="max-w-sm mb-5 text-xl font-bold">{step.subHead}</p>
            <p className="max-w-sm mb-6 text-xl">{step.description}</p>
            <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="flex justify-center gap-2 mb-6 md:justify-start"
            >
              <p className="border-b">Learn more</p>
              <img src={arrow} />
            </a>
          </div>
          <img src={step.img} className="h-80" />
        </div>
      ))}
    </div>
  );
}

export default Market;
