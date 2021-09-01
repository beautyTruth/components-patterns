const downArrow1 = document.getElementById("down-arrow1");
const downArrow2 = document.getElementById("down-arrow2");
const downArrow3 = document.getElementById("down-arrow3");

function downArrowAction1() {
  downArrow1.classList.toggle("open");
}
function downArrowAction2() {
  downArrow2.classList.toggle("open");
}
function downArrowAction3() {
  downArrow3.classList.toggle("open");
}

downArrow1.addEventListener("click", downArrowAction1);
downArrow2.addEventListener("click", downArrowAction2);
downArrow3.addEventListener("click", downArrowAction3);
