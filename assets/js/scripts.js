function levelSelector() {
    var levels = ["easy", "medium", "hard", "ferocious"]

    levels.map(function (level) {
        // add a <p> to #level-section element giving each one class of "level-button" and id of level name
        var parentElement = document.querySelector('#level-section');
        var divElem = document.createElement('div')
        var pElem = document.createElement('p');
        pElem.className = 'level-button';
        pElem.id = level;


        parentElement.appendChild(divElem).appendChild(pElem);
        pElem.append(level.toUpperCase())
    })
}

function displayLevelOptions() {
    var downArrow = document.getElementById("downArrow")

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

        // On clicking start-btn, random numbers are displayed every 50 millisecond 
        var displayRandomNumbers = setInterval(() => {
            numberWindow.innerHTML = ""
            numberWindow.innerHTML = Math.floor((Math.random() * 99) + 1);
        }, 50)

        // After 'time' ms random numbers stop changing
        setTimeout(function () {
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

        numberRandomizer(3000)
    })
}


function createGameButtons() {
    var gameButtons = ["fizz", "buzz", "fizzbuzz", "none"]

    // Create game buttons when start-btn clicked
    for (let i = 0; i < gameButtons.length; i++) {
        document.querySelector('#gameplay-btns').innerHTML +=
            '<button onclick="gamePlay()" class="gameplay" id=' + gameButtons[i] + '>' + gameButtons[i] + '</button>'
    }
}

function gamePlay() {
    var number = document.querySelector("#game-number").innerHTML;
    console.log(number)
    numberRandomizer(500)
    
}


document.addEventListener("DOMContentLoaded", function () {

    $("#collapsable-menu").hide()
    displayLevelOptions()
    levelSelector()
    startButton()
    
})
