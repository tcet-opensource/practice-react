import classNames from "classnames";
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
    <section className="pb-24 text-center text-white first-letter:px-8 bg-custom-bg sm:pb-40">
      {items.map((item, index) => (
        <div key={index}>
          <h1 className="text-5xl font-semibold md:text-3xl lg:text-5xl">
            {item.title}
          </h1>
          <p className="m-auto mt-6 md:w-2/3 lg:w-2/4 justify-evenly text-[#E5E5E5]">
            {item.paragraph}
          </p>
        </div>
      ))}
      <div className="grid grid-cols-2 mx-4 mt-8 md:mx-5 lg:mx-32 md:grid-cols-4">
        {statsArray.map((item, index) => {
          return (
            <div
              key={item.id}
              className={classNames(
                "p-4 bg-gradient-to-b border-slate-700 hover:primary-gradient md:h-28 cursor-pointer border md:border-0",
                index % 4 === 0 ? "" : "md:border-l",
                4 > index ? "md:border-b" : "",
              )}
            >
              <h2 className="font-semibold text-md md:text-lg">{item.title}</h2>
              <p className="mt-2 text-sm ">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
