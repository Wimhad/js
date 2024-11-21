const reorderDigits = (type, ...numbers) => {
    if (type === "asc") {
        return numbers.sort((a , b) => a - b);
    } else if (type === "desc") {
        return numbers.sort((a, b) => b - a);
    }
};

export default reorderDigits;
