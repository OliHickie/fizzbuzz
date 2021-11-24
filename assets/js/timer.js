function countdownTimer() {
    var time = 1000;

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
    var gameEndButtons = document.getElementById("end-game")

    disableButtons()
    setTimeout(function () {
        var gameButton = document.getElementById("gameplay-btns")
        gameButton.classList.add("d-none")
        gameEndButtons.classList.remove('d-none')
    }, 500)
}