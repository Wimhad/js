// Объекты передаются по ссылке
const objOne = { name: 'Geralt' };
const objTwo = { name: 'Geralt' };
console.log(objOne === objTwo);




// Объявление объекта
const user = {
    name: 'Elon',
    age: 50,
    children: [ 'Nevada', 'Damian', 'Sakson', 'Kai' ],
    is_genius: true,
};




// Получение данных
const name = user.name;
const age = user.age;
const surname = user.surname;

console.log(name);
console.log(age);
console.log(surname);





// Динамические свойства
const property = 'name';
const name1 = user[property];
console.log(name1);






// Запись данных
user.name = 'Elon Musk';
user.location = 'US';
user.getAge = function () {
    return this.name;
};
console.log(user);






// Удаление данных
delete user.name;
delete user.children;
console.log(user);






// Получение ключей объекта
const keys = Object.keys(user);
console.log(keys);






// Получение values объекта
const values = Object.values(user);
console.log(values);





// Получение вхождений объекта
const entries = Object.entries(user);
console.log(entries);





// Слияние объектов
const objectOne = { name: 'Tom', age: 59 };
const objectTwo = { surname: 'Cruise' };
const result = { ...objectOne, ...objectTwo };
const result2 = Object.assign(objectOne, objectTwo);
console.log(result);
console.log(result2);






// Копирование объектов
const user2 = { name: 'Tom', age: 59 };
const copyOfUser2 = Object.assign({}, user2);
console.log(copyOfUser2);
console.log(copyOfUser2 === user2);

// or
// import _ from 'lodash';

const copyOfUser3 = _.cloneDeep(user);

// or
const copyOfUser4 = { ...user };






// Обход перечисляемых свойств объекта в цикле for in:
const user3 = {
    name: 'Justine',
    surname: 'Henin',
    area: 'tennis player'
};

for (let key in user3) {
    console.log("the key is " + key);
}