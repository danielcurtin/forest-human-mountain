class Player {
    constructor(name, token) {
        this.name = name || "Player";
        this.token = token || "🕹️";
        this.bg = "#242424";
        this.choice = undefined;
        this.wins = 0;
    };

    takeTurn(choice) {
        this.choice = choice;
    };
};