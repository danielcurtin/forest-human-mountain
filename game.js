class Game {
    constructor(player, comp) {
        this.player = player || "Player";
        this.computer = comp;
        this.choices = ["mountain", "forest", "human", "fire", "water"];
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
        hideGame();
        show(document.querySelector(`.${choice}`));
        placeUserAv(document.querySelector(`.${choice}`));

        setTimeout( () => {
            this.compChoice();
            show(document.querySelector(`.${this.computer.choice}`));
            placeCompAv(document.querySelector(`.${this.computer.choice}`));
            this.determineGameState();
            showGameResults();
            this.updateWins();
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
            if (this.computer.choice === "forest" || this.computer.choice === "human") {
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
        hideGame();
        showGame();
        deleteChoiceAvs();
    };
};