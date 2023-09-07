import { data } from "./data";

export default function ExchangeSection() {
  return (
    <div className="relative flex flex-col items-center justify-center p-8 pt-20 text-white bg-custom-bg xl:flex-row gap-28">
      <img className="z-10" src="/ExchangeSection/mainImg.svg" alt="mainImg" />
      <div className="flex flex-col gap-8 mb-12 sm:w-[25.5rem] w-full sm:justify-items-center">
        {data.map((value, index) => {
          return (
            <div key={index} className="flex flex-col gap-4">
              <h1 className="pb-4 text-4xl font-normal tracking-wide">
                {value.title}
              </h1>
              <h2 className="text-xl font-bold tracking-[0.015em]">
                {value.subtitle}
              </h2>
              <p className="text-[#E5E5E5] text-xl font-normal">
                {value.content}
              </p>
            </div>
          );
        })}
        <div className="relative flex gap-2 ml-24 sm:ml-0">
          <p className="mb-1 text-xl font-normal">Learn more</p>
          <div className="common-gradient w-[6.25rem] h-0.5 absolute bottom-0"></div>
          <a className="mt-2" href="#">
            <img src="/ExchangeSection/arrow.svg" alt="arrow" />
          </a>
        </div>
      </div>
    </div>
  );
}
