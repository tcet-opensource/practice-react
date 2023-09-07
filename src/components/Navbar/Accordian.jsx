// eslint-disable-next-line react/prop-types
const Accordian = ({ data, toggleDropdown, isOpen }) => {
  return (
    <div className="flex flex-row">
      {data.map((d, i) => (
        <div key={d.id} className="hidden lg:flex">
          <ul className="px-6">
            <li className="flex">
              <a href="" className="text-white uppercase">
                {d.title}
              </a>
              {d.subTitle && (
                <div>
                  {isOpen[i] ? (
                    <img
                      src="/Navbar/span_after.svg"
                      alt="after"
                      className="pt-2 pl-2 cursor-pointer"
                      onClick={() => toggleDropdown(i)}
                    />
                  ) : (
                    <img
                      src="/Navbar/arrow.svg"
                      alt="below"
                      className="pb-2 pl-2 cursor-pointer"
                      onClick={() => toggleDropdown(i)}
                    />
                  )}
                  {d.subTitle.map((el, index) => (
                    <div
                      key={index}
                      className={`flex flex-col mt-16 bg-[#141619] w-32 text-center  text-white ${
                        isOpen[i] ? "" : "hidden"
                      }`}
                      style={{ position: "absolute", top: `${index * 35}px` }}
                    >
                      <a href="" className="p-2 uppercase">
                        {el}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
