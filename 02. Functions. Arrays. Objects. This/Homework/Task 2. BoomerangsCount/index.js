const getBoomerangsCount = (numbers) => {
    // Начало
    let result = 0;
    if (numbers.length < 4) {
        return result;
    }
    let arr = [];
    for (let i = 0; i < numbers.length - 2; i++) {
         arr = numbers.slice(i,i + 3);
        if (arr[0] === arr[2] && arr[1] !== arr[0]) {
            result++;
        }
    }
    return result;
    // Конец
};

export default getBoomerangsCount;