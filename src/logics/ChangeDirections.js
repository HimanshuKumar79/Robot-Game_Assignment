import { changeTop, changeLeft } from "../reduxStore/slices/directions";
import { store } from "../reduxStore/store";

const arrowHandler = (Presskey, dispatch) => {
  const mario = document.querySelector(".robot");
  const moves = document.querySelector(".moves");
  const node = document.createElement("li");
  node.innerText = `Robot Move ${Presskey}`;
  let value = store.getState();
  if (Presskey === "Left" && value.changeDirection.leftdirection - 70 >= 0) {
    dispatch(changeLeft("decrement"));
    let val = store.getState();
    mario.style.left = `${val.changeDirection.leftdirection}px`;
    moves.appendChild(node);
  }
  if (Presskey === "Right" && value.changeDirection.leftdirection + 70 <= 280) {
    dispatch(changeLeft("increment"));
    let val = store.getState();
    mario.style.left = `${val.changeDirection.leftdirection}px`;
    moves.appendChild(node);
  }
  if (Presskey === "Up" && value.changeDirection.topdirection - 70 >= 0) {
    dispatch(changeTop("decrement"));
    let val = store.getState();
    mario.style.top = `${val.changeDirection.topdirection}px`;
    moves.appendChild(node);
  }
  if (Presskey === "Down" && value.changeDirection.topdirection + 70 <= 280) {
    dispatch(changeTop("increment"));
    let val = store.getState();
    mario.style.top = `${val.changeDirection.topdirection}px`;
    moves.appendChild(node);
  }
};

export default arrowHandler;
