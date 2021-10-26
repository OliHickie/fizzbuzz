var levelPicker = 10;

function levelSelector() {
    var levels = ["easy", "medium", "hard", "ferocious"]
    
    levels.map(function (level) {
        var parentElement = document.querySelector('#level-section');
        var divElem = document.createElement('div')
        var pElem = document.createElement('p');
        // add a <p> to #level-section element giving each one class of "level-button" and id of level name
        pElem.className = 'level-button';
        pElem.id = level;

        parentElement.appendChild(divElem).appendChild(pElem);
        pElem.append(level.toUpperCase())
    })

    // Change levelPicker var with level clicks
    var easy = document.querySelector('#easy')
    var medium = document.querySelector('#medium')
    var hard = document.querySelector('#hard')
    var ferocious = document.querySelector('#ferocious')

    easy.addEventListener("click", function() {
       levelPicker = 20;
    })
    medium.addEventListener("click", function() {
        levelPicker = 50
     })
     hard.addEventListener("click", function() {
        levelPicker = 100
     })
     ferocious.addEventListener("click", function() {
        levelPicker = 1000
     })
}

function displayLevelOptions() {
    var downArrow = document.getElementById("downArrow");

    downArrow.addEventListener("click", function () {
        if (downArrow.classList.contains("rotate")) {
            downArrow.classList.remove('rotate');
            $("#collapsable-menu").slideUp();
        } else {
            downArrow.classList.add("rotate")
            $("#collapsable-menu").slideDown();
        }
    })
}

function numberRandomizer(time) {
    var numberWindow = document.querySelector("#game-number");
    var gameplayButtons = document.getElementsByClassName('gameplay')

    // disable gameplay buttons when number are changing
    for(let i=0; i < gameplayButtons.length; i++){
        gameplayButtons[i].disabled = true
    }

    // On clicking start-btn, random numbers are displayed every 50 millisecond 
    var displayRandomNumbers = setInterval(() => {
        numberWindow.innerHTML = Math.floor((Math.random() * levelPicker) + 1);
    }, 50)

    // After 'time' ms random numbers stop changing
    setTimeout(function () {
        // enable buttons when number displayed
        for(let i=0; i < gameplayButtons.length; i++){
            gameplayButtons[i].disabled = false
        }
        clearInterval(displayRandomNumbers);
    }, time);

        
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

function createGameButtons() {
    var gameButtons = ["fizz", "buzz", "fizzbuzz", "none"]

    // Create game buttons when start-btn clicked
    for (let i = 0; i < gameButtons.length; i++) {
        document.querySelector('#gameplay-btns').innerHTML +=
            '<div class="col-6 col-sm-3 btn-container"><button onclick="gamePlay()" class="gameplay" id=' + gameButtons[i] + '>' + gameButtons[i] + '</button>'
    }
}

function countdownTimer() {
    var time = 30;

    // Create countdown timer 
    var timer = setInterval(function(){
        if(time <= 0){
        clearInterval(timer);
        }
        document.getElementById('countdown-timer').innerHTML = time;
        time -= 1;
    }, 1000);
}

function gamePlay() {
    var number = document.querySelector("#game-number").innerHTML;
    numberRandomizer(500)
}


document.addEventListener("DOMContentLoaded", function () {
    $("#collapsable-menu").hide()
    displayLevelOptions()
    levelSelector()
    startButton()
})
