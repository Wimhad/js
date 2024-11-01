// степень округления числа
const ROUNDING_DEGREE = 100;

const roundAndRootNumber = (num) => {
    if (num < 0) {
        return "error";
    }
    if (num === 0) {
        return "0";
    }
    return (Math.floor(Math.sqrt(num) * 100) / 100).toFixed(2);
};

export default roundAndRootNumber;
