class Game {
    constructor(player, comp) {
        this.player = player || "Player";
        this.computer = comp;
        this.difficulty = undefined;
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
        }, 1200);
        setTimeout(this.resetGame, 3000);
    };

    resetGame() {
        showGame(this.difficulty);
        deleteChoiceAvs();
    };
};