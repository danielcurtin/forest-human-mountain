var gameBoard = document.querySelector('#gameBoardSection');
var gameHeader = document.querySelector('#gameState');
var playerBar = document.querySelector('#playerBar');
var classicDiff = document.querySelector('#classic');
var hardDiff = document.querySelector('#hard');
var changeDiffBtn = document.querySelector('#changeDiff');

var userAv = document.querySelector('#userAvatar');
var selectedAvatar = document.querySelector('#selectedAv');
var userDisplayName = document.querySelector('#userName');
var userWins = document.querySelector('#userWins');
var compWins = document.querySelector('#compWins');
var modal = document.querySelector('#userModal');

var mountain = document.querySelector('#mountainOpt');
var forest = document.querySelector('#forestOpt');
var human = document.querySelector('#humanOpt');
var fire = document.querySelector('#fireOpt');
var water = document.querySelector('#waterOpt');

var avatars = ["🕹️", "🐺", "🐣", "🦁", "🧸", "🎃", "⛄️", "🥨", "🍔", "🍕", "🎂"];
var bgColors = ["#242424", "firebrick", "maroon", "orange", "gold", "goldenrod", "darkgreen", "seagreen", "lightskyblue", "steelblue", "lightpink","fuchsia", "orchid", "slateblue"];
var userPlayer = new Player();
var compPlayer = new Player("Bot", "👾");
var game = new Game(userPlayer, compPlayer);


modal.addEventListener('click', event => {
    if (event.target.id === "modalSubmit") {
        closeModal();
        updateUser();
    } else if (event.target.id === "leftAv") {
        decrementAvatar();
    } else if (event.target.id === "rightAv") {
        incrementAvatar();
    } else if (event.target.id === "leftBg") {
        decrementBg();
    } else if (event.target.id === "rightBg") {
        incrementBg();
    };
});

gameBoard.addEventListener('click', event => {
    if (gameBoard.dataset.active === "true") {
        return;
    } else if (event.target.dataset.diff) {
        game.updateDiff(event.target.dataset.diff);
        showGame();
    } else if (event.target.dataset.choice) {
        game.playRound(event.target.dataset.choice);
        toggleActiveState();
    };
});

playerBar.addEventListener('click', event => {
    if (gameBoard.dataset.active === "true") {
        return;
    } else if (event.target.id === "changeDiff") {
        resetDiffMenu();
    };
});



function hide(element) {
    element.classList.add('hidden');
};

function show(element) {
    element.classList.remove('hidden');
};

function incrementAvatar() {
    if (selectedAvatar.dataset.avatar * 1 + 1 < avatars.length) {
        selectedAvatar.dataset.avatar++;
        selectedAvatar.innerText = `${avatars[selectedAvatar.dataset.avatar]}`;
    };
};

function decrementAvatar () {
    if (selectedAvatar.dataset.avatar - 1 >= 0) {
        selectedAvatar.dataset.avatar--;
        selectedAvatar.innerText = `${avatars[selectedAvatar.dataset.avatar]}`;
    };
};

function incrementBg() {
    if (selectedAvatar.dataset.bg * 1 + 1 < bgColors.length) {
        selectedAvatar.dataset.bg++;
        selectedAvatar.style.background = `${bgColors[selectedAvatar.dataset.bg]}`;
    };
};

function decrementBg() {
    if (selectedAvatar.dataset.bg - 1 >= 0) {
        selectedAvatar.dataset.bg--;
        selectedAvatar.style.background = `${bgColors[selectedAvatar.dataset.bg]}`;
    };
};

function closeModal() {
    userPlayer.token = avatars[selectedAvatar.dataset.avatar];
    userPlayer.bg = bgColors[selectedAvatar.dataset.bg];
    hide(modal);
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

function toggleActiveState() {
    if (gameBoard.dataset.active === "true") {
        gameBoard.dataset.active = "false";
    } else {
        gameBoard.dataset.active = "true";
    };
};

function updateUser() {
    var userInputName = document.querySelector('#userInputName');
    userPlayer.name = userInputName.value;

    userAv.innerText = userPlayer.token;
    userAv.style.background = userPlayer.bg;
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
    userChoiceAv.style.background = userPlayer.bg;
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