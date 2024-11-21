const array = [ 1, 2, 3, 4, 5, 6 ];
const isEven = (x) => x % 2 === 0;
const evenNumbers = array.filter(isEven);

console.log(evenNumbers);