// Массивы передаются по ссылке
const arrOne = [];
const arrTwo = [];
console.log(arrOne === arrTwo); // false, потому что сравниваются две ссылки






// Объявление массива
const cars = [ 'Tesla', 'Audi', 'Lada' ];






// Получение данных через индекс
const car = cars[1];
console.log(car);





// Запись данных
cars[2] = 'BMW';
cars[4] = 'Renault';
console.log(cars);






// Встроенные методы работы с массивами

// Определение длины массива
const cars2 = [ 'Tesla', 'Audi', 'BMW' ];
const carsLength = cars2.length;






// Конкатенация массивов
const carsOne = [ 'Tesla', 'Audi', 'BMW' ];
const carsTwo = [ 'Renault', 'Mercedes', 'Ferrari' ];
const carsThree = carsOne.concat(carsTwo);
console.log(carsThree);






// Объединение массива в строку
const carsString1 = carsOne.join();
console.log(carsString1);

const carsString2 = carsOne.join('-');
console.log(carsString2);






// Фильтрация массива
const users = [
    { name: 'Alex', age: 10 },
    { name: 'Pat', age: 25 },
    { name: 'Tom', age: 18 },
    { name: 'Sergey', age: 36 },
];
const filteredUsers = users.filter((user) => {
    return user.age > 20;
});
console.log(filteredUsers);






// Трансформация массива
const mappedUsers = users.map((user) => {
    return user.age;
});
console.log(mappedUsers);







// Агрегация массива
const totalAge = users.reduce((acc, user) => {
    const sum = acc + user.age;
    return sum;
}, 0);
console.log(totalAge);






// Другие методы:
// pop - удаляет на месте элемент, возвращает его
const numbers = [ 10, 25, 18, 36 ];
const lastElement = numbers.pop();
console.log(lastElement);
console.log(numbers);






// push - добавляет элемент, возвращает новую длину
const numbers2 = [ 10, 25, 18, 36 ];
const newLength = numbers2.push(42);
console.log(newLength);
console.log(numbers2);






// sort - сортирует массив на месте
const numbers3 = [ 36, 1, 2, 10, 21 ];
numbers3.sort();
console.log(numbers3);







// Деструктуризация массивов
const [ first, second ] = [ 'js', 'cool' ];
console.log(first);
console.log(second);






// Spread, Rest операторы
const beers = [ 'gambrinus', 'kozel', 'bernard' ];
const result = [ 'bakalar', 'budweiser', ...beers ];
console.log(result);






// Слияние массивов
const one = [ 1, 2, 3 ];
const two = [ 5, 6, 7 ];
const result2 = [ ...one, ...two ];
console.log(result2);

// As same As
const result3 = one.concat(two);
console.log(result3);






// Копирование массива
const array = [ 'coldplay', 'radiohead' ];
const copy1 = [ ...array ];
const copy2 = array.slice();







// Обход массива в цикле for of (данный цикл работает для всех
// итерируемых объектов (Array, Map, Set))
let numbers4 = [ 21, 42, 58 ];

for (let number of numbers4) {
    console.log(number);
}