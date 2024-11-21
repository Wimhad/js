class CityGame2 {
    constructor(player1, player2) {
        this.plays = [player1, player2];
        this.currPlayIndex = 0;
        this.citys = [];
        this.isGameOver = false;
    }

    play(city) {
        if (this.isGameOver) {
            return `Game over! The winner is ${this.getWiner()}`;
        }

        if (!this.isValCity(city)) {
            this.isGameOver = true;
            return `Game over! The winner is ${this.getWiner()}`
        }

    }

    getWiner() {
        return this.plays[1- this.currPlayIndex];
    }

    isValCity(city) {
        if (this.citys.includes(city)) {
            return false;
        }
        return true;
    }

}