function countdownTimer() {
    var time = 60;

    document.getElementById('countdown-timer').innerHTML = `<p><i class="fas fa-stopwatch"></i></p> <p>` + time + `</p>`;

    // Create countdown timer 
    var timer = setInterval(function(){
        if (time <= 0) {
        clearInterval(timer);
        }
        document.getElementById('countdown-timer').innerHTML = `<p><i class="fas fa-stopwatch"></i></p> <p id="countdown">` + time + `</p>`;
        if (time == 0) {
            timerEnds()
        }
        time -= 1;
    }, 1000);
}

function timerEnds() {

    disableButtons()
    setTimeout(function () {
        document.getElementById("gameplay-btns").classList.add("d-none")
        document.getElementById("game-number").classList.add("d-none")
        document.getElementById("end-game").classList.remove('d-none')
        document.getElementById("countdown-timer").classList.add("d-none")
        document.getElementById('gameEndScore').innerHTML = counter
    }, 500)
}