import React from "react";
import Logo from "../assets/logo.svg";
const NavBar = () => {
  const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <div className="w-full bg-[#020122]  ">
      <div className="max-w-[1290px] h-16 flex justify-between items-center pl-6">
        <img src={Logo} alt="Logo" className=" lg:w-[250px] w-[200px] " />
        <div className="hidden mt-2 lg:mr-0 mr-6 sm:flex">
          {levels.map((level) => {
            return (
              <div key={level} className="flex justify-center items-start">
                <div className="flex flex-col justify-center items-center">
                  <div
                    className={`${level < 8 ? "bg-[#159515]" : "bg-[grey]"} ${
                      level === 7 && "bg-yellow-500"
                    } h-[13px] w-[13px] rounded-full`}
                  ></div>
                  <p className="text-white text-[13px] ">{level}</p>
                </div>
                {levels.length !== level && (
                  <div
                    className={`lg:w-9 h-[2px] w-6  ${
                      level < 7 ? "bg-[#159515]" : "bg-[grey]"
                    } mt-[0.35rem] `}
                  ></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
