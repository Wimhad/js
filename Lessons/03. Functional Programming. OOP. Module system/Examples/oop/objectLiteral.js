// Функция-конструктор
const setStudent = (name, age, institute) => {
    return { name, age, institute };
};

// Геттеры
const getName = (student) => student.name;
const getAge = (student) => student.age;
const getInstitute = (student) => student.institute;


// Использование
const objectLiteral = setStudent('Dmitro', 20, 'ITIS');
console.log(getName(objectLiteral));
