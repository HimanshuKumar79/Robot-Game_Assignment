import arrowHandler from "./ChangeDirections";
import { resetValues } from "../reduxStore/slices/directions";

let myLoopcount = 0;
const myLoop = (dispatch) => {
  let filledarrowbox = document.querySelectorAll(".fillarrow");
  const mario = document.querySelector(".robot");
  let top = mario.style.top;
  let left = mario.style.left;
  setTimeout(() => {
    if (myLoopcount < 14 && filledarrowbox[myLoopcount].firstChild !== null) {
      arrowHandler(filledarrowbox[myLoopcount].firstChild.title, dispatch);
      myLoopcount++;
      myLoop(dispatch);
    } else {
      const moves = document.querySelector(".moves");
      const node = document.createElement("li");
      if (top === "280px" && left === "280px") {
        node.innerText = `Robot reach destination`;
        moves.appendChild(node);
        myLoopcount = 0;
        dispatch(resetValues());
      } else {
        node.innerText = `Try again`;
        moves.appendChild(node);
        myLoopcount = 0;
        dispatch(resetValues());
      }
    }
  }, 1000);
};

export default myLoop;
