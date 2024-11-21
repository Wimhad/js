import CarBrand from './carBrand';

class LadaBrand extends CarBrand {
    // Начало
    constructor(model, power, acceleration, location) {
        super("Lada " + model, power, acceleration);
        this.location = location;
    }

    getLocation() {
        return `${this.model} is located in ${this.location}`;
    }
    // Конец
}

export default LadaBrand;