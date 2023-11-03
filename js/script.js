const focusBtn = document.getElementById("focus");
const breakBtn = document.getElementById("break");

const pauseBtn = document.getElementById("pause");
const playBtn = document.getElementById("play");
const restartBtn = document.getElementById("restart");

const audio = new Audio(`allarm.mp3`);

let focusTimer = 10; // 25 minuti in secondi
let breakTimer = 5; // 5 minuti in secondi
let interval = "";

const elemTimer = document.getElementById("timer");
/*******************************************************************/

// logica del programma 
playBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", stopTimer);
restartBtn.addEventListener("click", restartTimer);

/*******************************************************************/
// Start Timer Function
function startTimer() {
  breakBtn.classList.add("opacity");
  console.log("start");
  interval = setInterval(() => {
    focusTimer--;
    updateTimer();

    if(focusTimer === 0) {
      audio.play();
      clearInterval(interval);
      focusTimer = 300;
      breakUpdateTimer();
      breakBtn.classList.remove("opacity");
      focusBtn.classList.add("opacity");
    }

  }, 1000);
};

// stop Timer Function
function stopTimer() {
  console.log("stop");
  clearInterval(interval);
};

// restart timer function
function restartTimer() {
  breakBtn.classList.remove("opacity")
  clearInterval(interval);
  focusTimer = 10;
  updateTimer();
};

// Update timer function
function updateTimer() {
  let minutes = Math.floor(focusTimer / 60);
  let seconds = focusTimer % 60;
  let formattedTimer = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;

  elemTimer.innerHTML = formattedTimer; 
};

// funzione per il break
function breakUpdateTimer() {
  let minutes = Math.floor(breakTimer / 60);
  let seconds = breakTimer % 60; 
  let formattedTimer = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;

  elemTimer.innerHTML = formattedTimer; 
};