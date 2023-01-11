var gameBoard = document.querySelector('#gameBoardSection');
var gameHeader = document.querySelector('#gameState');
var playerBar = document.querySelector('#playerBar');
var classicDiff = document.querySelector('#classic');
var hardDiff = document.querySelector('#hard');
var changeDiffBtn = document.querySelector('#changeDiff');

var userAv = document.querySelector('#userAvatar');
var userDisplayName = document.querySelector('#userName');
var userWins = document.querySelector('#userWins');
var compWins = document.querySelector('#compWins');

var mountain = document.querySelector('#mountainOpt');
var forest = document.querySelector('#forestOpt');
var human = document.querySelector('#humanOpt');
var fire = document.querySelector('#fireOpt');
var water = document.querySelector('#waterOpt');

var userPlayer = new Player();
var compPlayer = new Player("Bot", "👾");
var game = new Game(userPlayer, compPlayer);



window.addEventListener('load', updateUserBar);

gameBoard.addEventListener('click', function(event) {
    if (event.target.dataset.diff) {
        game.updateDiff(event.target.dataset.diff);
        showGame();
    } else if (event.target.dataset.choice) {
        game.playRound(event.target.dataset.choice);
    };
});

playerBar.addEventListener('click', function(event) {
    if (event.target.id === "changeDiff") {
        resetDiffMenu();
    };
});



function hide(element) {
    element.classList.add('hidden');
};

function show(element) {
    element.classList.remove('hidden');
};

function showGame() {
    show(mountain);
    show(forest);
    show(human);
    show(changeDiffBtn);
    gameHeader.innerText = "Make your pick!";

    if (game.difficulty === "hard") {
        show(fire);
        show(water);
    };
};

function hideGame() {
    hide(mountain);
    hide(forest);
    hide(human);
    hide(fire);
    hide(water);
};

function updateUserBar() {
    userAv.innerText = userPlayer.token;
    userDisplayName.innerText = userPlayer.name;
};

function updateWinsDisplay() {
    userWins.innerText = `Wins: ${userPlayer.wins}`;
    compWins.innerText = `Wins: ${compPlayer.wins}`;
};

function resetDiffMenu() {
    hide(changeDiffBtn);
    hideGame();
    show(classicDiff);
    show(hardDiff);
    gameHeader.innerText = "Choose your difficulty!";
};

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
};

function deleteChoiceAvs() {
    var toDelete = document.querySelectorAll('.temp');

    for (var i = 0; i < toDelete.length; i++) {
        toDelete[i].remove();
    };
};

function showGameResults() {
    if (game.gameState === "draw") {
        gameHeader.innerText = "🟡 It's a draw! 🟡";
    } else if (game.gameState === "win") {
        gameHeader.innerText = "🟢 You win! 🟢";
    } else if (game.gameState === "loss") {
        gameHeader.innerText = `🔴 ${compPlayer.name} won 🔴`;
    };
};