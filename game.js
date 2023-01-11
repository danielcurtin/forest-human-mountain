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
        setTimeout(compChoice, 1000);
        setTimeout(function() {
            show(document.querySelector(`.${compPlayer.choice}`));
            placeCompAv(document.querySelector(`.${compPlayer.choice}`));
            game.determineGameState();
            game.showGameResults();
            game.updateWins();
        }, 1200);
        setTimeout(this.resetGame, 3000);
    };

    resetGame() {
        showGame(this.difficulty);
        deleteChoiceAvs();
        updateDiff(this.difficulty);
    };

    determineGameState() {
        if (this.player.choice === this.computer.choice) {
            this.gameState = "draw";
        } else if (this.player.choice === "rock") {
            if (this.computer.choice === "paper" || this.computer.choice === "water") {
                this.gameState = "loss";
            } else {
                this.gameState = "win";
            };
        } else if (this.player.choice === "paper") {
            if (this.computer.choice === "scissors" || this.computer.choice === "fire") {
                this.gameState = "loss";
            } else {
                this.gameState = "win";
            };
        } else if (this.player.choice === "scissors") {
            if (this.computer.choice === "rock" || this.computer.choice === "fire") {
                this.gameState = "loss";
            } else {
                this.gameState = "win";
            };
        } else if (this.player.choice === "fire") {
            if (this.computer.choice === "water" || this.computer.choice === "rock") {
                this.gameState = "loss";
            } else {
                this.gameState = "win";
            };
        } else if (this.player.choice === "water") {
            if (this.computer.choice === "paper" || this.computer.choice === "fire") {
                this.gameState = "loss";
            } else {
                this.gameState = "win";
            };
        };
    };

    showGameResults() {
        if (this.gameState === "draw") {
            gameHeader.innerText = "🟡 It's a draw! 🟡";
        } else if (this.gameState === "win") {
            gameHeader.innerText = "🟢 You win! 🟢";
        } else if (this.gameState === "loss") {
            gameHeader.innerText = "🔴 Bot won 🔴";
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
};