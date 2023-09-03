import statsArray from "./stats";

const About = () => {
  const items = [
    {
      title: "About Gravity Team",
      paragraph:
        "At Gravity Team, we are on the mission to balance the supply and demand across crypto markets worldwide. We are a crypto native market maker founded by traders, developers, and innovators who are strong believers and supporters of the future of decentralization and digital assets.",
    },
  ];

  return (
    <section className="bg-[#141619] text-white text-center min-h-screen p-8 sm:p-16">
      {items.map((item, index) => (
        <div key={index}>
          <h1 className="font-inter text-3xl md:text-3xl lg:text-5xl font-medium">
            {item.title}
          </h1>
          <p className="mt-6 md:w-2/3 lg:w-2/4 m-auto justify-evenly">
            {item.paragraph}
          </p>
        </div>
      ))}
      <div className="mt-8 mx-4 md:mx-5 lg:mx-32 grid grid-cols-2 md:grid-cols-4 gap-2">
        {statsArray.map((item) => (
          <div
            key={item.id}
            className="p-4 border border-slate-700 hover:primary-gradient rounded"
          >
            <h2 className="text-md md:text-lg font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm ">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
