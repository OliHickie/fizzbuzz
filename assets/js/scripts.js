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
    var numberWindow = document.querySelector("#game-number");

    numberWindow.append(0);
}

function startPlay() {
    var startButton = document.querySelector('#start-btn');
    startButton.addEventListener("click", function () {
        startButton.classList.add("d-none");
    })
}

function gameButtons() {
    var gameButtons = ["fizz", "buzz", "fizzbuzz", "none"]

    for (let i = 0; i < gameButtons.length; i++){
        document.querySelector('#gameplay-btns').innerHTML += 
        '<button class="gameplay" id=' + gameButtons[i] + '>' + gameButtons[i] + '</button>'
    }
    // document.querySelector('#gameplay-btns').innerHTML =
    // '<div><button class="gameplay" id=' + gameButtons[0] + '>' + gameButtons[0] + '</button><button class="gameplay" id=' + gameButtons[1] + '>' + gameButtons[1] + '</button><button class="gameplay" id=' + gameButtons[2] + '>' + gameButtons[2] + '</button><button class="gameplay" id=' + gameButtons[3] + '>' + gameButtons[3] + '</button></div>'
    
}


document.addEventListener("DOMContentLoaded", function () {

    $("#collapsable-menu").hide()
    displayLevels()
    levelSelector()
    numberDisplay()
    startPlay()

})
