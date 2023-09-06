import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";

 
export default function CompanySwiper(){
  const slideObj = [
    {
      id:1,
      info:"Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team."
    },
    {
      id:2,
      info:"Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team."
    },
    {
      id:3,
      info:"Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team."
    }, 
    {
      id:4,
      info:"Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team."
    },
    {
      id:5,
      info:"Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team."
    },
  ];

  return (
    <>
      <div className="flex justify-center bg-[#141619] mb-6 2xl:mb-9 space-x-4 xl:space-x-8">
        <div className="swiper-prev w-10 h-10 xl:w-14 xl:h-14 cursor-pointer">
          <img src="CompanySliderSection/pagination-default.svg.svg" alt="prev-image-btn" />
        </div>
        <div className="swiper-next bg-[#141619] w-10 h-10 xl:w-14 xl:h-14 cursor-pointer">
          <img src="CompanySliderSection/pagination-default.svg.svg" alt="next-image-btn" className="rotate-180 " />
        </div>
      </div>
      <Swiper
      navigation={{
        prevEl: ".swiper-prev",
        nextEl: ".swiper-next",
      }}
      modules={[Navigation]}
      className="mySwiper w-11/12"
      spaceBetween={10}
      slidesPerView = {1}
    >
      
      <div>
      {slideObj.map((d, i) => (
        <SwiperSlide key={i} className="font-normal text-center justify-between leading-7 md:leading-8 lg:leading-9 2xl:leading-10 ">
          <p >{d.info}</p>
        </SwiperSlide>
      ))}
      </div>
      
    </Swiper>
    
    </>
  );
}
