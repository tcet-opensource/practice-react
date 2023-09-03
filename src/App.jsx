

import React from 'react';
import './globals.css';



const contentArray = [
  {
    id:1,
    title: 'Balancing Crypto Markets',
    description:
      'Our fully automated proprietary quantitative trading software provides 24/7 liquidity to 170+ crypto assets across 25+ centralized spot and derivative crypto exchanges.',
  },
  
];

function App() {
  return (
    <div>
      {contentArray.map((item, index) => (
        <body  key={index}>
          <div className="bg-black h-screen flex flex-col items-center text-white">
            <h1 className="w-3/5  font-76  p-10 text-center text-5xl font-semibold md:text-7xl text-white">
            <span className="title-line">{item.title.split(' ')[0]}</span>
              <br />
              <span className="title-line">{item.title.split(' ').slice(1).join(' ')}</span>
            </h1>

            <p className="w-1/3  text-18  text-center font-normal text-gray-300">
            <span className="title-line">{item.description.split(' ').slice(0, 6).join(' ')}</span>
              <br />
              <span className="title-line">{item.description.split(' ').slice(7).join(' ')}</span>
            </p>
            <button className="gradient m-10 h-14 w-48 text-lg font-medium">
              GET IN TOUCH
            </button>
          </div>
        </body>
      ))}
   </div>
  );
}

export default App;