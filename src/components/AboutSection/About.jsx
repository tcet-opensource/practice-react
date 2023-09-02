import React from "react";
import Grid from "./Grid";
import griditems from "./grid-items";

const About = () => {
  const [grids, setGrids] = React.useState(griditems);
  const gridElements = grids.map((grid) => (
    <Grid
      title={grid.title}
      description={grid.description}
      key={grid.id}
      on={grid.on}
    />
  ));

  const items = [
    {
      title: "About Gravity Team",
      paragraph:
        "At Gravity Team, we are on the mission to balance the supply and demand across crypto markets worldwide. We are a crypto native market maker founded by traders, developers, and innovators who are strong believers and supporters of the future of decentralization and digital assets.",
    },
  ];
  return (
    <section className="bg-[#141619] text-white text-center">
      {items.map((item, index) => (
        <div key={index}>
          <h1 className="font-inter text-3xl font-medium">{item.title}</h1>
          <p className="mt-6 m-auto">{item.paragraph}</p>
        </div>
      ))}
      <div className="mt-12 p-2 md:mx-12 grid grid-cols-2 md:grid-cols-4">
        {gridElements}
      </div>
    </section>
  );
};

export default About;
