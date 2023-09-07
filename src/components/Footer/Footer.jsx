import logo from "/Footer/img.svg";

export default function Footer() {
  const footerLink = [
    {
      id: 0,
      header: "Gravity Team",
      linkAbout: "About Us",
      linkWork: "Work with us",
      img: logo,
    },
  ];
  return (
    <footer className="box-border pt-10  px-10 pb-6  sm:px-40 sm:pb-16 bg-[#141619] text-white">
      {footerLink.map((step) => (
        <div key={step} className="px-8">
          <div className="flex justify-between flex-wrap">
            <ol className="flex-col">
              <ul>
                <a className="pb-3 text-base" href="/">
                  {step.header}
                </a>
              </ul>
              <ul>
                <a className="pb-2.5 text-sm" href="/">
                  {step.linkAbout}
                </a>
              </ul>
              <ul>
                <a className="text-sm" href="/">
                  {step.linkWork}
                </a>
              </ul>
            </ol>
            <div className="items-center h-36 w-28 pt-5 sm:items-start sm:pt-0 pb-16">
              <img src={step.img} />
            </div>
          </div>
          <div className="flex text-sm justify-between">
            <span>Terms of Use & Privacy Policy</span>
            <span>©2022 Gravity Team. All Rights Reserved</span>
          </div>
        </div>
      ))}
    </footer>
  );
}
