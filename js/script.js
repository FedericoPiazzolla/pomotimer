const focusBtn = document.getElementById("focus");
const breakBtn = document.getElementById("break");

const pauseBtn = document.getElementById("pause");
const playBtn = document.getElementById("play");

const audio = new Audio(`allarm.mp3`);

let focusTimer = 1500; // 25 minuti in secondi
let breakTimer = 300; // 5 minuti in secondi
let interval = "";

const elemTimer = document.getElementById("timer");
/*******************************************************************/

// logica del programma 
playBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", stopTimer);

/*******************************************************************/
// Start Timer Function
function startTimer() {
  console.log("start");
  interval = setInterval(() => {
    focusTimer--;
    updateTimer();
  }, 1000);
};

// stop Timer Function
function stopTimer() {
  console.log("stop");
};

// Update timer function
function updateTimer() {
  let minutes = Math.floor(focusTimer / 60);
  let seconds = focusTimer % 60;
  let formattedTimer = minutes + ":" + seconds;

  elemTimer.innerHTML = formattedTimer; 
};