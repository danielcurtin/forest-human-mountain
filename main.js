var userPlayer = new Player();
var compPlayer = new Player("Bot", "👾");
var game = new Game(userPlayer, compPlayer, difficulty);
var choices = ["rock", "paper", "scissors", "fire", "water"];

var gameBoard = document.querySelector('#gameBoardSection');
var gameHeader = document.querySelector('#gameState');
var playerBar = document.querySelector('#playerBar');
var changeDiffBtn = document.querySelector('#changeDiff');
var classicDiff = document.querySelector('#classic');
var hardDiff = document.querySelector('#hard');

var userAv = document.querySelector('#userAvatar');
var userDisplayName = document.querySelector('#userName');

var userWins = document.querySelector('#userWins');
var compWins = document.querySelector('#compWins');

var rock = document.querySelector('#rockOpt');
var paper = document.querySelector('#paperOpt');
var scissors = document.querySelector('#scissorsOpt');
var fire = document.querySelector('#fireOpt');
var water = document.querySelector('#waterOpt');

var difficulty;


window.addEventListener('load', updateUser);
gameBoard.addEventListener('click', function(event) {
    if (event.target.dataset.diff) {
        updateDiff(event.target.dataset.diff);
        showGame(event.target.dataset.diff);
        show(changeDiffBtn);
    } else if (event.target.dataset.choice) {
        runGame(event.target.dataset.choice);
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
    difficulty = diff;
    game.difficulty = difficulty;
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

function compChoice() {
    if (game.difficulty === "classic") {
        compPlayer.takeTurn(choices[Math.floor(Math.random() * 3)]);
    } else {
        compPlayer.takeTurn(choices[Math.floor(Math.random() * 5)]);
    };
};

function runGame(choice) {
    game.playRound(choice);
}

function placeUserAv(choiceElement) {
    var userChoiceAv = document.createElement('div');

    userChoiceAv.setAttribute('class', 'avatar');
    userChoiceAv.classList.add('temp');
    userChoiceAv.innerText = userPlayer.token;
    choiceElement.appendChild(userChoiceAv);
};

function placeCompAv(choiceElement) {
    var compChoiceAv = document.createElement('div');

    compChoiceAv.setAttribute('class', 'avatar');
    compChoiceAv.classList.add('comp-player-av');
    compChoiceAv.classList.add('temp');
    compChoiceAv.innerText = compPlayer.token;
    choiceElement.appendChild(compChoiceAv);
}

function deleteChoiceAvs() {
    var toDelete = document.querySelectorAll('.temp');

    for (var i = 0; i < toDelete.length; i++) {
        toDelete[i].remove();
    }
}

function updateUser() {
    userAv.innerText = userPlayer.token;
    userDisplayName.innerText = userPlayer.name;
    updateWinsDisplay();
};

function updateWinsDisplay() {
    userWins.innerText = `Wins: ${userPlayer.wins}`;
    compWins.innerText = `Wins: ${compPlayer.wins}`;
};