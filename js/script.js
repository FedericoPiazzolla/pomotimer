const focusBtn = document.getElementById("focus");
const breakBtn = document.getElementById("break");

const pauseBtn = document.getElementById("pause");
const playBtn = document.getElementById("play");

const audio = new Audio(`allarm.mp3`);

let focusTimer = 0; 
let breakTimer = 5;
let seconds = 5;
let interval = "";

const elemMinutes = document.getElementById("minutes");
const elemSeconds = document.getElementById("seconds");
/*******************************************************************/

// logica del programma 
playBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", stopTimer);

/*******************************************************************/
// Start Timer Function
function startTimer() {
  console.log("start");
  interval = setInterval(() => {
    console.log("ciao");
  }, 1000);
};

// stop Timer Function
function stopTimer() {
  console.log("stop");
};