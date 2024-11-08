const isSequenceContinuous = (numbers) => {
    // Начало
    if (numbers.length <= 1) {
        return false;
    }
    let num = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        num++;
        if (num !== numbers[i]) {
            return false;
        }
    }
    return true;
    // Конец
};

export default isSequenceContinuous;