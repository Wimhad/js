import CarBrand from './carBrand';
import bugatti from "./bugatti";

class BugattiBrand extends CarBrand {
    // Начало
    constructor(model, power, acceleration, cost) {

        super("Bugatti " + model,power,acceleration);
        this.cost = cost;
    }

    getIsExpensive() {
        return this.cost > 1 ;
    }
    // Конец
}

export default BugattiBrand;