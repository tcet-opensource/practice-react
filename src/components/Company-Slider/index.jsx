import CompanySwiper from "../Company-Slider/CompanySwiper"

export default function Slider(){
    return(
<<<<<<< HEAD
        <div className="flex flex-col justify-center text-white h-100 bg-[#333333] w-full h-full">
=======
        <div className="flex flex-col justify-center text-white h-100 p-4 ">
>>>>>>> 5456e55250098a51228adfa844eb707694ba50ab
            <div className="text-center">
                <div className="font-medium text-2xl md:text-4xl lg:text-5xl xl:text-6xl mx-8 lg:mx-32 xl:mx-40 mt-2">We are in good company</div>
                <div className="font-normal mx-10 md:mx-44 lg:mx-68 xl:mx-72 my-5 md:my-7 text-sm md:text-base lg:text-lg xl:text-xl">Our partnerships have delivered great value to our projects and we're happy to share some of their feedback below</div>
                
                <div className='mx-10 md:mx-32 lg:mx-48 xl:mx-72 2xl:mx-60 mb-6 md:mb-9 text-sm md:text-lg lg:text-xl 2xl:text-2xl '>
                    <CompanySwiper />
                </div>

                <div className='font-bold text-sm lg:text-base 2xl:text-lg mb-5'>Atthakrit Chimplapibul</div>
                <div className='flex items-center justify-center'>
                    <p className='font-light text-xs lg:text-sm mr-2 md:mr-5'>Co-founder and CEO of Bitkub</p>  
                    <img src="/bitkub-logo-light-trimmed.png.png" alt="bitkub-logo" className='w-20 h-3 md:w-24 md:h-4 xl:w-32 xl:h-6 border-l-2 border-white-100 pl-2 md:pl-4'/>                 
                </div>
            </div>
        </div>
        
    )
}
