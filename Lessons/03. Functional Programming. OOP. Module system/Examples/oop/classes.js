class Classes {
    constructor(name, age, institute) {
        this.name = name;
        this.age = age;
        this.institute = institute;
        this.projects = [];
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}

const student = new Classes('Dmitro', 20, 'ITIS');
console.log(student.getAge());
