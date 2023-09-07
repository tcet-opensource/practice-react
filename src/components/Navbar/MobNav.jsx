import { useState } from "react";
const MobNav = ({ data, isOpen, toggleDropdown }) => {
  const [ham, setHam] = useState(true);

  return (
    <div className="flex flex-col lg:hidden">
      {ham ? (
        <img src="/menu.svg" onClick={() => setHam(false)} />
      ) : (
        <img src="/cross.svg" onClick={() => setHam(true)} />
      )}

      {!ham && (
        <div className="absolute top-0 right-0 mt-16 mr-10 bg-[#141619] rounded-lg">
          {data.map((d, i) => (
            <div key={d.id} className="flex flex-col">
              <ul className="px-4 py-2">
                <li className="flex">
                  <a href="" className="text-white uppercase">
                    {d.title}
                  </a>
                  {d.subTitle && (
                    <div>
                      {isOpen[i] ? (
                        <img
                          src="/span_after.svg"
                          alt=""
                          className="pl-2 pt-2 cursor-pointer"
                          onClick={() => toggleDropdown(i)}
                        />
                      ) : (
                        <img
                          src="/arrow.svg"
                          alt=""
                          className="pl-2 pb-2 cursor-pointer"
                          onClick={() => toggleDropdown(i)}
                        />
                      )}
                    </div>
                  )}
                </li>
              </ul>
              {d.subTitle &&
                d.subTitle.map((el, index) => (
                  <div className="">
                    <div
                      key={index}
                      className={`px-4 py-2 text-white bg-[#141619] ${
                        isOpen[i] ? "" : "hidden"
                      }`}
                    >
                      <a href="" className=" uppercase">
                        {el}
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobNav;
