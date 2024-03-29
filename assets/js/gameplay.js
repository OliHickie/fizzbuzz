var levelPicker = 20; // Number range = 1-20 // Remove once levels sorted
let counter = 0

// Buttons

function createGameButtons() {
    var gameButtons = ["fizz-3", "buzz-5", "fizzbuzz-15", "none-0"]

    // Create game buttons when start-btn clicked
    for (let i = 0; i < gameButtons.length; i++) {
        document.querySelector('#gameplay-btns').innerHTML +=
            '<div class="col-6 py-1 btn-container"><button onclick="gamePlay(this.id)" class="gameplay text-capitalize" id=' + gameButtons[i] + '>' + gameButtons[i].split("-")[0] + '</button>'
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
    var startButton = document.querySelector('.start-btn-container');
    var gameplayButtons = document.getElementById("gameplay-btns");

    startButton.addEventListener("click", function () {
        // start-btn is hidden 
        document.getElementById("game-number").classList.remove("d-none")
        startButton.classList.add("d-none");
        numberRandomizer(1500)
        countdownTimer()
        gameplayButtons.scrollIntoView(false);
    })
}

function numberRandomizer(time) {
    var numberWindow = document.querySelector("#game-number");
    
    disableButtons()

    // On clicking start-btn, random numbers are displayed every 50 millisecond 
    var displayRandomNumbers = setInterval(() => {
        numberWindow.innerHTML = Math.floor((Math.random() * levelPicker) + 1);
    }, 50)

    // After 'time' random numbers stop changing
    setTimeout(function () {
        enableButtons()
        clearInterval(displayRandomNumbers);
    }, time);

        
}

function gamePlay(selected_id) {
    var number = document.querySelector("#game-number").innerHTML;
    var idNumber = selected_id.split('-')[1]
    var idName = selected_id.split('-')[0]

    console.log(number + idNumber)

    if (idName == 'none') {
        if (number % 3 == 0 || number % 5 == 0) {
            console.log('Error')
            incorrectAnswer(selected_id)
        } else {
            correctAnswer(selected_id)
        }
    } else if (idName == 'fizzbuzz') {
        if (number % 3 == 0 && number % 5 == 0){
            correctAnswer(selected_id)
        } else {
            console.log("error!")
            incorrectAnswer(selected_id)
        }
    } else if (number % idNumber == 0 && number != 15) {
        correctAnswer(selected_id)
    } else {
        console.log('Error')
        incorrectAnswer(selected_id)
    }
}

function correctAnswer(selected_id) {
    // If answer is correct, light up green and add 1 to counter
    var selectedButton = document.getElementById(selected_id)

    console.log("Hurruh")
    selectedButton.classList.add('btn-correct')
    counter++;
    setTimeout(function (){
        selectedButton.classList.remove('btn-correct')
    }, 500)
    console.log(counter)
    numberRandomizer(500);
}

function incorrectAnswer(selected_id) {
    var selectedButton = document.getElementById(selected_id)

    console.log("Error!")
    selectedButton.classList.add('btn-incorrect');
    disableButtons()
    setTimeout(function (){
        selectedButton.classList.remove('btn-incorrect');
        enableButtons()
    }, 3000)
}

document.addEventListener("DOMContentLoaded", function () {
    startButton()
})
