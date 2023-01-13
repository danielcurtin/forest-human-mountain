class Game {
    constructor(player, comp) {
        this.player = player || "Player";
        this.computer = comp;
        this.choices = ["forest", "human", "mountain", "fire", "water"];
        this.difficulty = undefined;
        this.gameState = undefined;
    };

    updateDiff(diff) {
        hide(classicDiff);
        hide(hardDiff);
        this.difficulty = diff;
    };

    playRound(choice) {
        this.player.takeTurn(choice);
        this.compChoice();

        var userChoiceElement = document.querySelector(`.${this.player.choice}`);
        var compChoiceElement = document.querySelector(`.${this.computer.choice}`);

        hideGame();
        show(userChoiceElement);
        placeUserAv(userChoiceElement);

        setTimeout( () => {
            show(compChoiceElement);
            placeCompAv(compChoiceElement);
            this.determineGameState();
            this.updateWins();
            showGameResults();
        }, 1000);

        setTimeout(this.resetGame, 3000);
    };

    compChoice() {
        if (this.difficulty === "classic") {
            this.computer.takeTurn(game.choices[Math.floor(Math.random() * 3)]);
        } else if(this.difficulty === "hard") {
            this.computer.takeTurn(game.choices[Math.floor(Math.random() * 5)]);
        };
    };

    getChoiceNum(player) {
        for (var i = 0; i < this.choices.length; i++) {
            if (player.choice === this.choices[i]) {
                return i + 1;
            };
        };
    };

    determineGameState() {
        var userChoiceNum = this.getChoiceNum(this.player);
        var compChoiceNum = this.getChoiceNum(this.computer);
        var pathNum = compChoiceNum - userChoiceNum;

        if (!pathNum) {
            this.gameState = "draw";
        } else if (pathNum > 0 && !(pathNum % 2) || pathNum < 0 && (pathNum % 2)) {
            this.gameState = "win";
        } else {
            this.gameState = "loss";
        };
    };

    updateWins() {
        if (this.gameState === "win") {
            this.player.wins++;
        } else if (this.gameState === "loss") {
            this.computer.wins++;
        };

        updateWinsDisplay();
    };

    resetGame() {
        hideGame();
        showGame();
        deleteChoiceAvs();
        toggleActiveState();
    };
};