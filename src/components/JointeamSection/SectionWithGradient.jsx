import React from 'react';

function SectionWithGradient() {
  const JoinTeamGradient = [
    {
      id: 1,
      gradientClass: "bg-gradient-to-r from-blue-500/30 from-65% to-yellow-600/50",
      title: "Join",
      subTitle: "Gravity Team"
    },
    
  ];

  return (
    <div className="flex bg-gray-900 text-white/80 h-screen relative">
      <div className="w-1/2 flex flex-col items-center mt-20">
        {JoinTeamGradient.map((item) => (
          <div key={item.id} className="w-56 h-28 rounded-full relative">
            <div className={`absolute inset-0 ${item.gradientClass} rounded-full blur-xl`}></div>
            <div className="z-10 text-left flex flex-col h-full font-medium">
              <h2 className="text-3xl">{item.title}</h2>
              <h2 className="text-3xl ml-2 mt-2">{item.subTitle}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="w-1/2 mr-20 mt-20">
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
        <a href="#" className="text-xl mt-4 flex text-start">
          Learn more about working with us{' '}
          <object data="arrow.svg" type="image/svg+xml" className="ml-4" />
        </a>
        <div className="w-80 h-0.5 bg-gradient-to-r from-blue-500 from-60% to-yellow-600/50 mt-1"></div>
      </div>
    </div>
  );
}

export default SectionWithGradient;
