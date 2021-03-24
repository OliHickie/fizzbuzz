function levelSelector() {
    var levels = ["easy", "medium", "hard", "ferocious"]

    levels.map(function (level) {
        var element = document.querySelector('#level-section');
        var pElem = document.createElement('p');
        pElem.className = 'level-button';

        element.appendChild(pElem);
        pElem.append(level)
    })

}
