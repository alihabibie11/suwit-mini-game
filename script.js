console.log("script connected!");

class Start {
    constructor() {
        this.playerName = "Habibie";
        this.botName = "Habibot";
        //pilihan player harus di set ketika start karna blum ada value nya di constructor
        //use getter and setter
        this.playerOption;
        this.botOption;
        this.winner = "";
    }

    //get data yg sudah di set
    //get optional, bisa pake yang di constuctor saja
    get getPlayerOption() {
        return this.playerOption;
    }
    //set data playeroption di constructor from pickoption
    set setPlayerOption(option) {
        this.playerOption = option;
    }

    get getBotOption() {
        return this.botOption;
    }

    set setBotOption(option) {
        this.botOption = option;
    }

    botBrain() {
        const option = ["🖐", "✌", "✊"];
        const bot = option[Math.floor(Math.random() * option.length)];
        return bot;
    }

    winCalculation() {
        if (this.botOption == "🖐" && this.playerOption == "✌") {
            return (this.winner = this.playerName);
        } else if (this.botOption == "🖐" && this.playerOption == "✊") {
            return (this.winner = this.botName);
        } else if (this.botOption == "✌" && this.playerOption == "🖐") {
            return (this.winner = this.botName);
        } else if (this.botOption == "✌" && this.playerOption == "✊") {
            return (this.winner = this.playerName);
        } else if (this.botOption == "✊" && this.playerOption == "🖐") {
            return (this.winner = this.playerName);
        } else if (this.botOption == "✊" && this.playerOption == "✌") {
            return (this.winner = this.botName);
        } else {
            return (this.winner = "DRAW");
        }
    }

    matchResult() {
        if (this.winner !== "DRAW") {
            return `${this.winner} MENANG!`;
        } else {
            return `WAAA ${this.winner}, GAK ADA YANG MENANG! 🤪`;
        }
    }
}

function pickOption(params) {
    var start = new Start();

    start.setPlayerOption = params;
    start.setBotOption = start.botBrain();
    start.winCalculation();

    const inGame = document.getElementById("inGame");
    const result = document.getElementById("result");
    const playerName = document.getElementById("playerName");
    const botName = document.getElementById("botName");

    inGame.textContent = '...';
    result.textContent = '...';

    // console.log("You choose " + start.getPlayerOption);
    // console.log(start.botName+ " choose " + start.getBotOption);
    // console.log("The Winner is " + start.winner);
    playerName.textContent = `${start.playerName}`
    botName.textContent = `${start.botName}`
    
    setTimeout(() => {
        inGame.textContent = `${start.getPlayerOption} VS ${start.getBotOption}`;
        result.textContent = start.matchResult();
    }, 1500);

    // console.log('Hasil : ' + start.matchResult())
}
