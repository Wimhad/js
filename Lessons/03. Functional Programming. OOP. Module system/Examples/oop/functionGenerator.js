// Определим геттеры за пределами конструктора
function getName() {
    return this.name;
}

function getAge() {
    return this.age;
}

// Конструктры (как и классы в целом) принято именовать с большой буквы
function FunctionGenerator(name, age, institute) {
    this.name = name;
    this.age = age;
    this.institute = institute;
    this.getName = getName;
    this.getAge = getAge;
}

// Использование
const student = new FunctionGenerator('Dmitro', 20, 'ITIS');
console.log(student.getAge());