const focusBtn = document.getElementById("focus");
const breakBtn = document.getElementById("break");

const pauseBtn = document.getElementById("pause");
const playBtn = document.getElementById("play");
const restartBtn = document.getElementById("restart");

const audio = new Audio(`allarm.mp3`);

let focusTimer = 10; // 25 minuti in secondi
let breakTimer = 300; // 5 minuti in secondi
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
  console.log("start");
  interval = setInterval(() => {
    focusTimer--;
    updateTimer();

    if(focusTimer === 0) {
      clearInterval(interval);
      focusTimer = 1500;
      updateTimer();
      console.log("tempo scaduto, concediti un pausa");
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
  clearInterval(interval);
  focusTimer = 1500;
  updateTimer();
};

// Update timer function
function updateTimer() {
  let minutes = Math.floor(focusTimer / 60);
  let seconds = focusTimer % 60;
  let formattedTimer = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;

  elemTimer.innerHTML = formattedTimer; 
};