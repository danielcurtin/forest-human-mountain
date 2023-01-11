class Player {
    constructor(username, selectedAv) {
        this.name = username || "Player";
        this.token = selectedAv || "🕹️";
        this.choice = undefined;
        this.wins = 0;
    };

    takeTurn(choice) {
        this.choice = choice;
        console.log(choice);
    };
};