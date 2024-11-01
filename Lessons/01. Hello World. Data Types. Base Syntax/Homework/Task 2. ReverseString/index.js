const reverseString = (str) => {
    // Начало
    if (str === "") return "";
    return str.slice(-1) + reverseString(str.slice(0,-1));
    // return [...str].reverse().join("");
    // Конец
};

export default reverseString;