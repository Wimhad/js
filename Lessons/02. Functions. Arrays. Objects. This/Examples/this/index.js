// При определении функции как метода объекта this указывает на сам объект
const user = {
    id: 42,
    name: 'Kimi',
    func: function() {
        return this.id;
    },
};
console.log(user.func());






// Глобальный объект
console.log(this === window);
// в браузере глобальный объект - window
// в node.js глобальный объект - global






// В пределах функции значение this зависит от того, каким образом вызвана функция.
// Вызов без контекста
function someFunc(){
    return this;
}

// В браузере:
console.log(someFunc() === window);





// Использование call, apply
const user2 = { name: 'Elon' };
const name = 'Musk';
function doThings() {
    return this.name;
}

doThings();
doThings.call(user2);
doThings.apply(user2);




// Использование bind - "привязка" this
function getName() {
    return this.name;
}
const newFunc = getName.bind({ name: 'Elon' });
console.log(newFunc());

const newNewFunc = getName.bind({ name: 'Sergey' });
console.log(newNewFunc());





// this в стрелочных функциях


function Person() {
    this.age = 0;

    setInterval(function growUp() {
        this.age++;
        console.log(this.age);  // NaN
    }, 1000);
}

var p = new Person();






function Person(){
    this.age = 0;

    setInterval(() => {
        this.age++;
        console.log(this.age);
    }, 1000);
}

var p = new Person();

