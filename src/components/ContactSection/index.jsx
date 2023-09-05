import { data } from "./data";


function Index() {
  return (
    <div className="flex flex-col items-center justify-center text-white px-12 pb-32 relative">
      <div className="flex flex-col text-center justify-center font-medium leading-50 md:text-6xl text-5xl">
        Contact Us
      </div>
        {data.map((data) => (
          <div className="flex text-center justify-center text-[#E5E5E5] text-lg font-normal leading-8 w-full sm:px-48 pt-14 pb-16 z-10">
            {data.content}
          </div>
        ))}
      

      <div className="absolute z-30 h-[120px] w-[300px] left-[15%] top-[60%] bg-sky-500 rounded-full blur-3xl" />
      <div className="absolute z-30 h-[80px] w-[200px] left-[65%] top-[30%] bg-orange-300 rounded-full blur-3xl" />
      <div className="absolute z-30 h-[120px] w-[300px] right-[15%] top-[50%] bg-indigo-500 rounded-full blur-3xl" />
      <div className="absolute z-30 h-[60px] w-[150px] left-[75%] top-[65%] bg-orange-300 rounded-full blur-3xl" />
      <button className="custom-gradient p-4 h-14 sm:h-16 text-lg font-normal">
        GET IN TOUCH
      </button>
    </div>
  );
}


export default Index;

