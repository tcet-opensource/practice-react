import React from 'react';

function SectionWithGradient() {
  return (
      <div className="flex flex-col md:flex-row text-white/80 min-h-screen relative bg-[#141619] mt-10">
        <div className="w-full md:w-1/2 flex flex-col items-center mt-36">

          <div className="w-56 h-28 rounded-full relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/25 from-70% to-yellow-600/50 rounded-full blur-xl"></div>
            <div className="z-10 font-semibold sm:text-left flex flex-col h-full sm:font-medium text-center ">
              <h2 className="text-3xl">Join</h2>
              <h2 className="text-3xl ml-2 mt-2">Gravity Team</h2>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 mr-20 sm:mt-20 mt-2 p-12 sm:text-left text-center">
          <p className="text-xl">
            Join our community of innovators, problem solvers, and owners who
            apply scientific discovery techniques to make crypto markets a better
            place for everyone.
          </p>
          <p className="text-xl pt-8">
            As we emphasize it in our name — Gravity Team, we are a team. A team
            of bright, talented people, each masters of their specialty, curious
            about the world and eager to solve the new exciting cryptocurrency
            market problems, build cool stuff, and have fun whilst doing so!
          </p>
          <a href="#" className="sm:text-xl mt-4 flex text-start">
            Learn more about working with us{' '}
            <object data="arrow.svg" type="image/svg+xml" className="ml-4" />
          </a>
          <div className="w-60 sm:w-72 h-0.5 bg-gradient-to-r from-blue-500 via-blue-500 to-yellow-600/50 mt-1"></div>
        </div>
      </div>
  );
}

export default SectionWithGradient;
