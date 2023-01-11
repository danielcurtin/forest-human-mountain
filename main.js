var userPlayer = new Player();
var compPlayer = new Player();
// var difficulty = selectedDiff
var game = new Game(userPlayer, compPlayer);

var gameBoard = document.querySelector('#gameBoardSection');
var classicDiff = document.querySelector('#classic');
var hardDiff = document.querySelector('#hard');

window.addEventListener('load', promptUser);
gameBoard.addEventListener('click', function(event) {
    chooseDiff(event);
});


function promptUser() {
    // var userName = .value;
};

function chooseDiff(event) {
    if (event.target.dataset.diff === "classic") {
        updateDifficulty(event.target.dataset.diff);
    } else if (event.target.dataset.diff === "hard") {
        updateDifficulty(event.target.dataset.diff);
    };
};

function updateDifficulty(diff) {
    hide(classicDiff);
    hide(hardDiff);
    game.difficulty = diff;
};

function hide(element) {
    element.classList.add('hidden');
};

function show(element) {
    element.classList.remove('hidden');
};