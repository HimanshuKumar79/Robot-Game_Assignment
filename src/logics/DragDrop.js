const dragdrop = (e) => {
  const selectedArrow = e.target;
  const boxes = document.querySelectorAll(".fillarrow");
  for (let box of boxes) {
    box.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    box.addEventListener("drop", (e) => {
      box.replaceChildren(selectedArrow.cloneNode(true));
    });
  }
};
export default dragdrop;
