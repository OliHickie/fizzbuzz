var levelPicker = 20; // Remove once levels sorted

// Buttons

function createGameButtons() {
    var gameButtons = ["fizz-3", "buzz-5", "fizzbuzz-15", "none-0"]

    // Create game buttons when start-btn clicked
    for (let i = 0; i < gameButtons.length; i++) {
        document.querySelector('#gameplay-btns').innerHTML +=
            '<div class="col-6 col-sm-3 btn-container"><button onclick="gamePlay(this.id)" class="gameplay text-capitalize" id=' + gameButtons[i] + '>' + gameButtons[i].split("-")[0] + '</button>'
    }
}

function disableButtons() {
    var gameplayButtons = document.getElementsByClassName('gameplay')
    
    // disable gameplay buttons when number are changing
    for(let i=0; i < gameplayButtons.length; i++){
        gameplayButtons[i].disabled = true
    }
}

function enableButtons() {
    var gameplayButtons = document.getElementsByClassName('gameplay')

    // enable buttons when number displayed
    for(let i=0; i < gameplayButtons.length; i++){
        gameplayButtons[i].disabled = false
    }
}

function startButton() {
    // When the start-btn is clicked, random numbers will display for 3 secs 
    var startButton = document.querySelector('#start-btn');

    document.querySelector("#game-number").append(0);

    startButton.addEventListener("click", function () {
        // start-btn is hidden 
        startButton.classList.add("d-none");
        numberRandomizer(1500)
        countdownTimer()
    })
}

function numberRandomizer(time) {
    var numberWindow = document.querySelector("#game-number");
    
    disableButtons()

    // On clicking start-btn, random numbers are displayed every 50 millisecond 
    var displayRandomNumbers = setInterval(() => {
        numberWindow.innerHTML = Math.floor((Math.random() * levelPicker) + 1);
    }, 50)

    // After 'time' ms random numbers stop changing
    setTimeout(function () {
        enableButtons()
        clearInterval(displayRandomNumbers);
    }, time);

        
}

function gamePlay(selected_id) {
    var number = document.querySelector("#game-number").innerHTML;
    numberRandomizer(500)

    var idNumber = selected_id.split('-')[1]

    console.log(idNumber)

    if (selected_id == "fizz") {
        console.log('hurruh')
    } 

}

function fizzBuzz() {
    var gameButton = document.getElementById
}


document.addEventListener("DOMContentLoaded", function () {
    startButton()
})
