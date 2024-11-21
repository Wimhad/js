class CityGame {
    constructor(player1,player2) {
        this.players = [player1,player2];
        this.index = 0;
        this.rounds = [];
    }
    play(city) {
        this.index = this.index === 0 ? 1 : 0;
        if (this.rounds.length >= 2) {
            const random = Math.random() * 9;
            if (random <= 3) {
                return `Game over! The winner is ${this.players[this.index]}`;
            } else if (random >= 6) {
                return `Game over! The winner is ${this.players[this.index]}`;
            } else {
                this.rounds.push(city);
                return this.rounds;
            }
        } else {
            this.rounds.push(city);
            return this.rounds;
        }
    }
    restart() {
        this.rounds = [];
        this.index = 0;
        return "The game has been restarted!";
    }
}

export default CityGame;
