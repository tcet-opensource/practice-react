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
          <div className="flex flex-col items-center h-screen gap-1 text-white bg-custom-bg">
            <h1
              className="w-10/12 p-10 text-5xl font-semibold text-center text-white md:text-7xl"
              style={{ lineHeight: "1.3" }}
            >
              {item.title.split(" ").slice(0, 1).join(" ")}
              <br />
              {item.title.split(" ").slice(1).join(" ")}
            </h1>

            <p className="w-3/5 mt-4 font-normal text-center text-gray-300 md:w-1/3 text-18">
              {item.description}
            </p>
            <button className="w-48 m-10 text-lg font-medium primary-gradient h-14">
              GET IN TOUCH
            </button>
          </div>
        </body>
      ))}
    </div>
  );
}

export default Hero;
