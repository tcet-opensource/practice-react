function SectionWithGradient() {
  return (
    <div className="relative flex flex-col min-h-screen mt-10 md:flex-row text-white/80 bg-custom-bg">
      <div className="flex flex-col items-center w-full md:w-1/2 mt-36">
        <div className="relative w-56 rounded-full h-28">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/25 from-70% to-yellow-600/50 rounded-full blur-xl"></div>
          <div className="z-10 flex flex-col h-full font-semibold text-center sm:text-left sm:font-medium ">
            <h2 className="text-3xl">Join</h2>
            <h2 className="mt-2 ml-2 text-3xl">Gravity Team</h2>
          </div>
        </div>
      </div>
      <div className="w-full p-12 mt-2 mr-20 text-center md:w-1/2 sm:mt-20 sm:text-left">
        <p className="text-xl">
          Join our community of innovators, problem solvers, and owners who
          apply scientific discovery techniques to make crypto markets a better
          place for everyone.
        </p>
        <p className="pt-8 text-xl">
          As we emphasize it in our name — Gravity Team, we are a team. A team
          of bright, talented people, each masters of their specialty, curious
          about the world and eager to solve the new exciting cryptocurrency
          market problems, build cool stuff, and have fun whilst doing so!
        </p>
        <a href="#" className="flex mt-4 sm:text-xl text-start">
          Learn more about working with us{" "}
          <object data="arrow.svg" type="image/svg+xml" className="ml-4" />
        </a>
        <div className="w-60 sm:w-72 h-0.5 bg-gradient-to-r from-blue-500 via-blue-500 to-yellow-600/50 mt-1"></div>
      </div>
    </div>
  );
}

export default SectionWithGradient;
