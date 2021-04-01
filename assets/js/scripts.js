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

function displayLevels() {
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

function numberDisplay() {
    // When the start-btn is clicked, random numbers will display for 3 secs 
    var numberWindow = document.querySelector("#game-number");
    var startButton = document.querySelector('#start-btn');

    numberWindow.append(0);

    // On clicking start-btn, random numbers are displayed every 50 millisecond 
    startButton.addEventListener("click", function () {
        startButton.classList.add("d-none");

        var displayRandomNumbers = setInterval(() => {
            numberWindow.innerHTML = ""
            numberWindow.innerHTML = Math.floor((Math.random() * 99) + 1);
        }, 50)

        // After 3000 ms random numbers stop changing
        setTimeout(function () {
            clearInterval(displayRandomNumbers);
        }, 3000);
    })
}

// function startPlay() {
//     // When start-btn clicked, it disappears
//     var startButton = document.querySelector('#start-btn');
//     startButton.addEventListener("click", function () {
//         startButton.classList.add("d-none");
//     })
// }

function gameButtons() {
    var gameButtons = ["fizz", "buzz", "fizzbuzz", "none"]

    // Create game buttons when start-btn clicked
    for (let i = 0; i < gameButtons.length; i++) {
        document.querySelector('#gameplay-btns').innerHTML +=
            '<button class="gameplay" id=' + gameButtons[i] + '>' + gameButtons[i] + '</button>'
    }
}


document.addEventListener("DOMContentLoaded", function () {

    $("#collapsable-menu").hide()
    displayLevels()
    levelSelector()
    numberDisplay()
    startPlay()
})
