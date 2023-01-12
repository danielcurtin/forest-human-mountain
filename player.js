class Player {
    constructor() {
        this.name = "Player";
        this.token = "🕹️";
        this.bg = "#242424";
        this.choice = undefined;
        this.wins = 0;
    };

    takeTurn(choice) {
        this.choice = choice;
    };
};