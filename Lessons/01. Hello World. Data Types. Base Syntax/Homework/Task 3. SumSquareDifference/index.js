const sumSquareDifference = (num) => {
    // Начало
    let a = 0;
    let b = 0;
    for (let i = 1; i <= num; i++) {
        a += i;
        b += i ** 2;
    }
    return a ** 2 - b;
    // Конец
};

export default sumSquareDifference;