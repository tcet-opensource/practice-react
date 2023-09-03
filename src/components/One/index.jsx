// eslint-disable-next-line no-unused-vars
import React from "react";
import "../../globals.css";

function Index() {
  return (
    <div className="flex flex-col items-center justify-center  text-white  bg-[#141619] min-h-[80px]  px-48 pt-[100px] pb-[128px] relative">
      <div className="flex flex-col text-center justify-center font-medium leading-[78px] text-[56px] ">
        Contact Us
      </div>
      <div className="flex text-center justify-center text-[#E5E5E5] text-[18px] font-normal leading-[30px] w-full px-[10%] pt-[60px] pb-[62.39px] z-50">
        We are always open to discuss new value-adding partnerships. Do reach
        out if you are an exchange or a project looking for liquidity; an
        algorithmic trader or a software developer looking to improve the
        markets with us or just have a great idea you can't wait to share with
        us!
      </div>

      <div className="absolute z-30 h-[120px] w-[300px] left-[15%] top-[60%] bg-sky-500 rounded-full blur-3xl" />
      <div className="absolute z-30 h-[80px] w-[200px] left-[65%] top-[30%] bg-orange-300 rounded-full blur-3xl" />
      <div className="absolute z-30 h-[120px] w-[300px] right-[15%] top-[50%] bg-indigo-500 rounded-full blur-3xl" />
      <div className="absolute z-30 h-[60px] w-[150px] left-[75%] top-[65%] bg-orange-300 rounded-full blur-3xl" />
      <button className="custom-gradient w-[191.5px] h-[58px] text-lg ">
        GET IN TOUCH
      </button>
    </div>
  );
}

export default Index;
