import Accordian from "./Accordian";
import MobNav from "./MobNav";
import { useState } from "react";

const Navbar = () => {
  const data = [
    { id: 1, title: "About", subTitle: null },
    { id: 2, title: "Our Services", subTitle: ["Something", "Something1"] },
    { id: 3, title: "Work With Us", subTitle: null },
    { id: 4, title: "Blog", subTitle: null },
  ];
  const [isOpen, setIsOpen] = useState(Array(data.length).fill(false));

  const toggleDropdown = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <nav className="flex items-center justify-between p-6 bg-[#141619]">
      <div>
        <img src="/Navbar/logo.svg" alt="" />
      </div>

      <Accordian data={data} toggleDropdown={toggleDropdown} isOpen={isOpen} />

      <div className="hidden lg:flex lg:order-2">
        <img src="/Navbar/gradient.svg" alt="" />
        <a className="px-4 text-base text-white">GET IN TOUCH</a>
      </div>

      <MobNav data={data} toggleDropdown={toggleDropdown} isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;
