const array = [ 1, 2, 3, 4, 5, 6 ];
const isEven = (x) => x % 2 === 0;

const evenNumbers = [];

for (let i = 0; i < array.length; i++) {
    if (isEven(array[i])) {
        evenNumbers.push(array[i]);
    }
}