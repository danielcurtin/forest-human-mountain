class Game {
    constructor(player, comp) {
        this.player = player || "Player";
        this.computer = comp;
        this.difficulty = undefined;
    };

    playRound(choice) {
        this.player.takeTurn(choice);
        setTimeout(compChoice, 1000);
    };

    resetGame() {

    };
};