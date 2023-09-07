import { data } from "./data";

function Index() {
  return (
    <div className="relative flex flex-col items-center justify-center px-12 pb-32 text-white">
      <div className="flex flex-col justify-center text-5xl font-medium text-center leading-50 md:text-6xl">
        Contact Us
      </div>
      {data.map((data) => (
        <div
          key={data}
          className="flex text-center justify-center text-[#E5E5E5] text-lg font-normal leading-8 w-full sm:px-48 pt-14 pb-16 z-10"
        >
          {data.content}
        </div>
      ))}

      <div className="hidden md:block">
        <div className="absolute z-30 h-[120px] w-[300px] left-[15%] top-[60%] bg-sky-500 rounded-full blur-3xl" />
        <div className="absolute z-30 h-[80px] w-[200px] left-[65%] top-[30%] bg-orange-300 rounded-full blur-3xl" />
        <div className="absolute z-30 h-[120px] w-[300px] right-[15%] top-[50%] bg-indigo-500 rounded-full blur-3xl" />
        <div className="absolute z-30 h-[60px] w-[150px] left-[75%] top-[65%] bg-orange-300 rounded-full blur-3xl" />
      </div>
      <button className="p-4 text-lg font-normal custom-gradient h-14 sm:h-16">
        GET IN TOUCH
      </button>
    </div>
  );
}

export default Index;
