function levelSelector() {
    var levels = ["easy", "medium", "hard", "ferocious"]

    levels.map(function (level) {
        // add a <p> to #level-section element giving each one class of "level-button" and id of level name
        var parentElement = document.querySelector('#level-section');
        var pElem = document.createElement('p');
        pElem.className = 'level-button';
        pElem.id = level;


        parentElement.appendChild(pElem);
        pElem.append(level.toUpperCase())
    })
}

function displayLevels() {
    var downArrow = document.getElementById("downArrow")

    function displayLevelOptions() {
        $("#collapsable-menu").toggleClass("d-none");
    }

    downArrow.addEventListener("click", function () {
        if (downArrow.classList.contains("rotate")) {
            downArrow.classList.remove('rotate');
            displayLevelOptions()
        } else {
            downArrow.classList.add("rotate")
            displayLevelOptions()
        }
    })
}

window.onload = function () {

    displayLevels()
    levelSelector()
}
