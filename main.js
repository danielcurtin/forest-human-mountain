var gameBoard = document.querySelector("#gameBoardSection");
var gameHeader = document.querySelector("#gameState");
var playerBar = document.querySelector("#playerBar");
var classicDiff = document.querySelector("#classic");
var hardDiff = document.querySelector("#hard");
var changeDiffBtn = document.querySelector("#changeDiff");

var userAv = document.querySelector("#userAvatar");
var selectedAvatar = document.querySelector("#selectedAv");
var userDisplayName = document.querySelector("#userName");
var userWins = document.querySelector("#userWins");
var compWins = document.querySelector("#compWins");
var modal = document.querySelector("#userModal");

var mountain = document.querySelector("#mountainOpt");
var forest = document.querySelector("#forestOpt");
var human = document.querySelector("#humanOpt");
var fire = document.querySelector("#fireOpt");
var water = document.querySelector("#waterOpt");

var game = new Game();


modal.addEventListener("click", event => {
    if (event.target.id === "modalSubmit") {
        hide(modal);
        game.player.updateUser();
        displayUser();
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

gameBoard.addEventListener("click", event => {
    if (game.active) {
        return;
    } else if (event.target.dataset.diff) {
        game.updateDiff(event.target.dataset.diff);
        showGame();
    } else if (event.target.dataset.choice) {
        game.playRound(event.target.dataset.choice);
    };
});

playerBar.addEventListener("click", event => {
    if (game.active) {
        return;
    } else if (event.target.id === "changeDiff") {
        changeDiffMenu();
    };
});


function hide(element) {
    element.classList.add("hidden");
};

function show(element) {
    element.classList.remove("hidden");
};

function incrementAvatar() {
    if (selectedAvatar.dataset.avatar * 1 + 1 < game.player.avatars.length) {
        selectedAvatar.dataset.avatar++;
        selectedAvatar.innerText = game.player.avatars[selectedAvatar.dataset.avatar];
    };
};

function decrementAvatar () {
    if (selectedAvatar.dataset.avatar - 1 >= 0) {
        selectedAvatar.dataset.avatar--;
        selectedAvatar.innerText = game.player.avatars[selectedAvatar.dataset.avatar];
    };
};

function incrementBg() {
    if (selectedAvatar.dataset.bg * 1 + 1 < game.player.bgColors.length) {
        selectedAvatar.dataset.bg++;
        selectedAvatar.style.background = game.player.bgColors[selectedAvatar.dataset.bg];
    };
};

function decrementBg() {
    if (selectedAvatar.dataset.bg - 1 >= 0) {
        selectedAvatar.dataset.bg--;
        selectedAvatar.style.background = game.player.bgColors[selectedAvatar.dataset.bg];
    };
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

function displayUser() {
    userAv.innerText = game.player.token;
    userAv.style.background = game.player.bg;
    userDisplayName.innerText = game.player.name;
    updateWinsDisplay();
};

function updateWinsDisplay() {
    userWins.innerText = `Wins: ${game.player.wins}`;
    compWins.innerText = `Wins: ${game.computer.wins}`;
};

function changeDiffMenu() {
    hide(changeDiffBtn);
    hideGame();
    show(classicDiff);
    show(hardDiff);
    gameHeader.innerText = "Choose your difficulty!";
};

function placeUserAv(choiceElement) {
    var userChoiceAv = document.createElement("div");

    userChoiceAv.setAttribute("class", "avatar");
    userChoiceAv.classList.add("temp");
    userChoiceAv.innerText = game.player.token;
    userChoiceAv.style.background = game.player.bg;
    choiceElement.appendChild(userChoiceAv);
};

function placeCompAv(choiceElement) {
    var compChoiceAv = document.createElement("div");

    compChoiceAv.setAttribute("class", "avatar");
    compChoiceAv.classList.add("comp-player-av");
    compChoiceAv.classList.add("temp");
    compChoiceAv.innerText = game.computer.token;
    choiceElement.appendChild(compChoiceAv);
};

function deleteChoiceAvs() {
    var toDelete = document.querySelectorAll(".temp");

    for (var i = 0; i < toDelete.length; i++) {
        toDelete[i].remove();
    };
};

function showGameResults() {
    if (game.gameState === "draw") {
        gameHeader.innerText = "🟡 It's a draw! 🟡";
    } else if (game.gameState === "win") {
        gameHeader.innerText = `🟢 You win, ${game.player.name}! 🟢`;
    } else if (game.gameState === "loss") {
        gameHeader.innerText = `🔴 ${game.computer.name} won 🔴`;
    };
};