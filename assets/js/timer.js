function countdownTimer() {
    var time = 10;

    document.getElementById('countdown-timer').innerHTML = `<p><i class="fas fa-stopwatch"></i></p> <p>` + time + `</p>`;

    // Create countdown timer 
    var timer = setInterval(function(){
        if (time <= 0) {
        clearInterval(timer);
        }
        document.getElementById('countdown-timer').innerHTML = `<p><i class="fas fa-stopwatch"></i></p> <p>` + time + `</p>`;
        if (time == 0) {
            disableButtons()
            setTimeout(function () {
                var gameButtonX = document.getElementById("gameplay-btns")
                gameButtonX.classList.add("d-none")
            }, 500)

        }
        time -= 1;
    }, 1000);
}