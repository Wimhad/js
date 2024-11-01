// Динамическая типизация
let name;
name = 'Justine';
console.log(typeof name);

let newName = 'Justine';
console.log(typeof newName);

newName = 42;
console.log(typeof newName);

newName = true;
console.log(typeof newName);






// Слабая типизация
console.log(4 + '2');
console.log('4' + 2);

const text = ('b' + 'a' + +'a' + 'a').toLowerCase();
console.log(text);






// Строгое/нестрогое сравнение

console.log(4 === 2);
console.log(false === false);
console.log({} === {});
console.log(42 === '42');

console.log(4 == 2);
console.log(1 == true);
console.log(0 == false);
console.log({} == {});
console.log(42 == '42');






// Объектные типы данных в JS

const names = [ 'Justine' ];
console.log(names.length);






const num = 42;
const newNum = new Number(42);

console.log(typeof num);
console.log(typeof newNum);







// Все в js - объект
console.log('name'.length);

console.log((7).toString);