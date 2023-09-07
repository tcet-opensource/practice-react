import CompanySwiper from "../Company-Slider/CompanySwiper";

export default function Slider() {
  return (
    <div className="flex flex-col justify-center px-4 mt-24 text-white h-100 sm:mt-0bg-[#141619]">
      <div className="text-center">
        <div className="mx-8 mt-2 text-4xl font-medium md:text-4xl lg:text-5xl xl:text-6xl lg:mx-32 xl:mx-40">
          We are in good company
        </div>
        <div className="mx-10 my-5 text-sm font-normal md:mx-44 lg:mx-68 xl:mx-72 md:my-7 md:text-base lg:text-lg xl:text-xl">
          Our partnerships have delivered great value to our projects and we
          {"'"}re happy to share some of their feedback below
        </div>

        <div className="mx-10 mb-6 text-sm md:mx-32 lg:mx-48 xl:mx-72 2xl:mx-60 md:mb-9 md:text-lg lg:text-xl 2xl:text-2xl ">
          <CompanySwiper />
        </div>

        <div className="mb-5 text-sm font-bold lg:text-base 2xl:text-lg">
          Atthakrit Chimplapibul
        </div>
        <div className="flex items-center justify-center">
          <p className="mr-2 text-xs font-light lg:text-sm md:mr-5">
            Co-founder and CEO of Bitkub
          </p>
          <img
            src="CompanySliderSection/bitkub-logo-light-trimmed.png"
            alt="bitkub-logo"
            className="w-20 h-3 pl-2 border-l-2 md:w-24 md:h-4 xl:w-32 xl:h-6 border-white-100 md:pl-4"
          />
        </div>
      </div>
    </div>
  );
}
