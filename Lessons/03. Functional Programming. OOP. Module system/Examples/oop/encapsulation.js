const setStudent = (name, age, institute) => {
    return {
        name,
        age,
        institute,
        getName() { // Важно использовать именно обычную функцию, у стрелочных нет своего контекста!
            return this.name;
        },
        getAge() {
            return this.age;
        },
        getInstitute() {
            return this.institute;
        },
    };
};


// Использование
const encapsulation = setStudent('Dmitro', 20, 'ITIS');
console.log(encapsulation.getName());
