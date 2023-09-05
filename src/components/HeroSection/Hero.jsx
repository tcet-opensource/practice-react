import React from "react";

const contentArray = [
    {
        id: 1,
        title: "Balancing Crypto Markets",
        description:
            "Our fully automated proprietary quantitative trading software provides 24/7 liquidity to 170+ crypto assets across 25+ centralized spot and derivative crypto exchanges.",
    },
];

function Hero() {
    return (
        <div>
            {contentArray.map((item, index) => (
                <body key={index}>
                <div className="bg-[#141619] h-screen flex flex-col items-center text-white gap-1">
                    <h1 className="w-10/12 p-10 text-center text-5xl font-semibold md:text-7xl text-white" style={{ lineHeight: '1.3' }}>
                        {item.title.split(" ").slice(0, 1).join(" ")}
                        <br />
                        {item.title.split(" ").slice(1).join(" ")}
                    </h1>

                    <p className="w-3/5 md:w-1/3 text-18 text-center font-normal text-gray-300 mt-4">
                        {item.description}
                    </p>
                    <button className="primary-gradient m-10 h-14 w-48 text-lg font-medium">
                        GET IN TOUCH
                    </button>
                </div>
                </body>
            ))}
        </div>
    );
}

export default Hero;
