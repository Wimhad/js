class CarBrand {
    // Начало
    constructor(model, power, acceleration) {
        this.model = model;
        this.power = power;
        this.acceleration = acceleration;
    }

    runDrag(time) {
        return `${this.model} runs drag for ${time} seconds`
    }

    getWhoIsFaster(car) {
        const time = this.acceleration - car.acceleration;
        const faster = time > 0 ? car : this;

        return `${faster.model} is faster for ${Math.abs(time)} seconds`
    }
    // Конец
}

export default CarBrand;