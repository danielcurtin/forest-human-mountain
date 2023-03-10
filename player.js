class Player {
    constructor(name, token) {
        this.name = name || "Player";
        this.token = token || "đšī¸";
        this.bg = "#242424";
        this.choice = undefined;
        this.wins = 0;
        this.avatars = ["đšī¸", "đē", "đŖ", "đĻ", "đ§¸", "đ", "âī¸", "đĨ¨", "đ", "đ", "đ"];
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