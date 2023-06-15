import React from "react";
import GameLogic from "../assets/logic-game.png";
import Robot from "../assets/robot.png";
import {
  FiArrowLeft,
  FiArrowUp,
  FiArrowDown,
  FiArrowRight,
} from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import Undo from "../assets/undo.png";
import dragdrop from "../logics/DragDrop";
import myLoop from "../logics/Play";
import { useDispatch } from "react-redux";
import ResetGame from "../logics/ResetGame";

const GamePanel = () => {
  const dispatch = useDispatch();
  const boxes = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];
  const logicalBoxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <div className="lg:w-[980px] max-w-[980px]">
      {/* Game Navbar */}
      <div className="w-full bg-[#0b0952] h-12 flex justify-start items-center gap-3 pl-3">
        <img
          src={GameLogic}
          alt="GameLogic"
          className="w-[30px]  font-bold  "
        />
        <p className="text-white text-[26px]">Build</p>
      </div>
      <div className="flex justify-evenly items-center bg-[#191581] w-full h-fit py-7">
        <div className="container w-[350px] h-[350px] flex flex-wrap relative">
          <img
            src={Robot}
            alt="Robot"
            className="robot absolute h-[60px] mt-2 ml-2"
          />
          {boxes.map((box) => {
            if (box === 25) {
              return (
                <div
                  key={box}
                  className="Box h-[70px] w-[70px] bg-[#e66a2b] border-solid border-[0.010rem]  border-black"
                ></div>
              );
            }
            return (
              <div
                key={box}
                className="Box h-[70px] w-[70px] bg-[#ebc91e] border-solid border-[0.010rem]  border-black"
              ></div>
            );
          })}
        </div>
        <div className="h-[350px] w-[350px] bg-[#100e44] hidden sm:block">
          <div className="font-semibold flex items-center text-white text-[20px] pl-5 underline w-full h-12 bg-[#4f4fdd]">
            Instructions Implemented
          </div>
          <div className=" w-full pl-5 mt-3 h-[260px] overflow-y-scroll ">
            <ol className="text-white moves"></ol>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-4 py-3 pl-5 lg:pr-0 pr-3 bg-sky-500">
        <p className="text-white font-semibold text-[19px]">Logic Panel</p>
        <div className="flex gap-3 flex-wrap">
          {logicalBoxes.map((logicalbox) => {
            return (
              <div
                key={logicalbox}
                className="fillarrow h-[50px] w-[50px] bg-[#e2dddd] rounded-sm"
              ></div>
            );
          })}
          <div
            onClick={() => ResetGame()}
            className="bg-[#ebc91e]  px-3 py-[10px] text-[19px] font-semibold rounded-sm flex items-center gap-2 cursor-pointer sm:hidden block"
          >
            <img src={Undo} alt="Undo" className="w-[30px]" />
          </div>
        </div>
      </div>
      <div className="bg-[#100e44] w-full h-fit py-[1.4rem] pl-5 flex gap-3 items-center justify-start">
        <div className="flex gap-1">
          <div
            draggable="true"
            title="Left"
            onDrag={(e) => {
              dragdrop(e);
            }}
            className=" bg-[#e2dddd] h-[50px] w-[50px] rounded-sm flex justify-center items-center text-[29px] cursor-move"
          >
            <FiArrowLeft />
          </div>
          <div
            draggable="true"
            title="Up"
            onDrag={(e) => {
              dragdrop(e);
            }}
            className=" bg-[#e2dddd] h-[50px] w-[50px] rounded-sm flex justify-center items-center text-[29px] cursor-move"
          >
            <FiArrowUp />
          </div>
          <div
            draggable="true"
            title="Down"
            onDrag={(e) => {
              dragdrop(e);
            }}
            className="bg-[#e2dddd] h-[50px] w-[50px] rounded-sm flex justify-center items-center text-[29px] cursor-move"
          >
            <FiArrowDown />
          </div>
          <div
            draggable="true"
            title="Right"
            onDrag={(e) => {
              dragdrop(e);
            }}
            className="bg-[#e2dddd] h-[50px] w-[50px] rounded-sm flex justify-center items-center text-[29px] cursor-move"
          >
            <FiArrowRight />
          </div>
        </div>
        <div
          onClick={() => myLoop(dispatch)}
          className="bg-[#ebc91e] text-[#5677cc] px-6 py-[13px] text-[16px] font-semibold rounded-sm flex items-center gap-2 cursor-pointer"
        >
          <FaPlay />
          <p>Play</p>
        </div>
        <div
          onClick={() => ResetGame()}
          className="bg-[#ebc91e]  px-4 py-[10px] text-[19px] font-semibold rounded-sm flex items-center gap-2 cursor-pointer sm:block hidden"
        >
          <img src={Undo} alt="Undo" className="w-[30px]" />
        </div>
      </div>
    </div>
  );
};

export default GamePanel;
