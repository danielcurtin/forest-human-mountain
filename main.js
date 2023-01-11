var userPlayer = new Player();
var compPlayer = new Player();
// var difficulty = selectedDiff
var game = new Game(userPlayer, compPlayer);

var gameBoard = document.querySelector('#gameBoardSection');
var gameHeader = document.querySelector('#gameState');
var playerBar = document.querySelector('#playerBar');
var changeDiffBtn = document.querySelector('#changeDiff');
var classicDiff = document.querySelector('#classic');
var hardDiff = document.querySelector('#hard');

var rock = document.querySelector('#rockOpt');
var paper = document.querySelector('#paperOpt');
var scissors = document.querySelector('#scissorsOpt');
var fire = document.querySelector('#fireOpt');
var water = document.querySelector('#waterOpt');


window.addEventListener('load', promptUser);
gameBoard.addEventListener('click', function(event) {
    if (event.target.dataset.diff) {
        updateDiff(event.target.dataset.diff);
        showGame(event.target.dataset.diff);
        show(changeDiffBtn);
    };
});
playerBar.addEventListener('click', function(event) {
    if (event.target.id === "changeDiff") {
        resetDiffMenu(event);
    };
});

function updateDiff(diff) {
    hide(classicDiff);
    hide(hardDiff);
    gameHeader.innerText = "Make your pick!";
    game.difficulty = diff;
};

function hide(element) {
    element.classList.add('hidden');
};

function show(element) {
    element.classList.remove('hidden');
};

function resetDiffMenu() {
    hide(changeDiffBtn);
    hideGame();
    show(classicDiff);
    show(hardDiff);
    gameHeader.innerText = "Choose your difficulty!";
};

function showGame(diff) {
    show(rock);
    show(paper);
    show(scissors);

    if (diff === "hard") {
        show(fire);
        show(water);
    };
};

function hideGame() {
    hide(rock);
    hide(paper);
    hide(scissors);
    hide(fire);
    hide(water);
}

function promptUser() {
    // var userName = .value;
};