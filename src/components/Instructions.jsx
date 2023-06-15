import React from "react";
import { HiOutlineBookOpen } from "react-icons/hi2";

const Instructions = () => {
  return (
    <div className="lg:w-[560px] w-full lg:pb-0 pb-28  bg-[#ece8e8]">
      <div className="w-full h-12 flex justify-start items-center gap-2 pl-6 bg-[#c5c3c3]">
        <HiOutlineBookOpen className="text-[31px] mt-1" />
        <p className="text-[22px]">Learn</p>
      </div>
      <ol className="w-full px-6 flex flex-col gap-3 mt-12">
        <li className="flex gap-1">
          <p>1. </p>
          Set the starting position: Drag and place the sprite on the stage to
          set its initial position. Click and drag the sprite to position it
          where you want it to start.
        </li>
        <li className="flex gap-1">
          <p>2. </p>
          Add movement blocks: In the block palette on the left side of the
          screen, location the "Motion" category. You will find blocks like
          "Move 10 steps," "Turn 15 degrees," and "Go to x:[] y:[],"
        </li>
        <li className="flex gap-1">
          <p>3. </p>
          Use the "Go to x:[] y:[]" block: Drag the "Go to x:[] y:[]" block into
          the spcripting area. Set the x and u value of the block to the
          coordinates of the target position you want the sprite to move to. For
          example, if you want the sprite to move to position (200,100), set the
          x value to 200 and the y value to 100.
        </li>
      </ol>
    </div>
  );
};

export default Instructions;
