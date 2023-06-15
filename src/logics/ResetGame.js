const ResetGame = () => {
  const filledarrowbox = document.querySelectorAll(".fillarrow");
  const mario = document.querySelector(".robot");
  const moves = document.querySelector(".moves");
  for (let i = 0; i < filledarrowbox.length; i++) {
    console.log("Hi");
    if (filledarrowbox[i].firstChild !== null) {
      filledarrowbox[i].firstChild.remove();
      moves.innerHTML = null;
    }
  }
  mario.style.top = 0;
  mario.style.left = 0;
};

export default ResetGame;
