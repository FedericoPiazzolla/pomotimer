const focusBtn = document.getElementById("focus");
const breakBtn = document.getElementById("break");

const pauseBtn = document.getElementById("pause");
const playBtn = document.getElementById("play");

const audio = new Audio(`allarm.mp3`);

let focusTimer = 24; 
let breakTimer = 5;
let seconds = 60;

const elemMinutes = document.getElementById("minutes");
const elemSeconds = document.getElementById("seconds");
/*******************************************************************/

// logica del programma
focusBtn.addEventListener("click", function(){
  elemSeconds.innerHTML = "00";
  minutes.innerHTML = "25";

  focusBtn.classList.add("opacity");
  breakBtn.classList.remove("opacity");
  
  playBtn.addEventListener("click", function(){
    const myInterval = setInterval(function(){
      seconds--;

      if(seconds === 0) {
        focusTimer = focusTimer - 1;

        if(focusTimer === - 1) {
          clearInterval(remaninTimer);
        };

        seconds= 60;
      };

      elemSeconds.innerHTML = seconds;
      elemMinutes.innerHTML = focusTimer;

    }, 1000);
  });
});

breakBtn.addEventListener("click", function(){
  elemSeconds.innerHTML = "00";
  minutes.innerHTML = "05";

  breakBtn.classList.add("opacity");
  focusBtn.classList.remove("opacity");
});