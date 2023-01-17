class Player {
    constructor(name, token) {
        this.name = name || "Player";
        this.token = token || "🕹️";
        this.bg = "#242424";
        this.choice = undefined;
        this.wins = 0;
        this.avatars = ["🕹️", "🐺", "🐣", "🦁", "🧸", "🎃", "⛄️", "🥨", "🍔", "🍕", "🎂"];
        this.bgColors = ["#242424", "firebrick", "maroon", "orange", "gold", "goldenrod", "darkgreen", "seagreen", "lightskyblue", "steelblue", "lightpink","fuchsia", "orchid", "slateblue"];
    };

    takeTurn(choice) {
        this.choice = choice;
    };

    updateUser() {
        var userInputName = document.querySelector("#userInputName");

        if (userInputName.value === "") {
            this.name = "Player";
        } else {
            this.name = userInputName.value;
        };

        this.token = this.avatars[selectedAvatar.dataset.avatar];
        this.bg = this.bgColors[selectedAvatar.dataset.bg];
    };
};