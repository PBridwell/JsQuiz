var time = document.getElementById("time-count");

var secondsLeft = 15;

function setTime () {
    var timerInter = setInterval(function(){
        secondsLeft--;
        time.textContent = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInter);
        }
    }, 500);
}

setTime();