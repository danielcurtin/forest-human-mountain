class Game {
    constructor(player, comp, diff) {
        this.player = player || "Player";
        this.computer = comp;
        this.difficulty = diff;
        this.gameState = undefined;
    };

    playRound(choice) {
        this.player.takeTurn(choice);
        hideGame();
        show(document.querySelector(`.${choice}`));
        placeUserAv(document.querySelector(`.${choice}`));
        setTimeout(this.compChoice, 1000);
        setTimeout(function() {
            show(document.querySelector(`.${compPlayer.choice}`));
            placeCompAv(document.querySelector(`.${compPlayer.choice}`));
            game.determineGameState();
            showGameResults();
            game.updateWins();
        }, 1200);
        setTimeout(this.resetGame, 3000);
    };

    compChoice() {
        if (game.difficulty === "classic") {
            compPlayer.takeTurn(choices[Math.floor(Math.random() * 3)]);
        } else {
            compPlayer.takeTurn(choices[Math.floor(Math.random() * 5)]);
        };
    };

    determineGameState() {
        if (this.player.choice === this.computer.choice) {
            this.gameState = "draw";
        } else if (this.player.choice === "mountain") {
            if (this.computer.choice === "forest" || this.computer.choice === "water") {
                this.gameState = "loss";
            } else {
                this.gameState = "win";
            };
        } else if (this.player.choice === "forest") {
            if (this.computer.choice === "human" || this.computer.choice === "fire") {
                this.gameState = "loss";
            } else {
                this.gameState = "win";
            };
        } else if (this.player.choice === "human") {
            if (this.computer.choice === "mountain" || this.computer.choice === "fire") {
                this.gameState = "loss";
            } else {
                this.gameState = "win";
            };
        } else if (this.player.choice === "fire") {
            if (this.computer.choice === "water" || this.computer.choice === "mountain") {
                this.gameState = "loss";
            } else {
                this.gameState = "win";
            };
        } else if (this.player.choice === "water") {
            if (this.computer.choice === "forest" || this.computer.choice === "fire") {
                this.gameState = "loss";
            } else {
                this.gameState = "win";
            };
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
        showGame(this.difficulty);
        deleteChoiceAvs();
        updateDiff(this.difficulty);
    };
};