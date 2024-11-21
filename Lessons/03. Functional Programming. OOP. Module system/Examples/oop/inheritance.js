class Actor {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getIsKeanu() {
        return this.name === 'Keanu';
    }

    getAge() {
        return this.age;
    }
}

class HollywoodActor extends Actor {
    constructor(name, age, movies) {
        // super - ключевое слово, вызывающее родительский конструктор.
        // В данном случае мы наследуем аргументы
        super(name, age);
        this.movies = movies;
    }

    getMovies() {
        return this.movies;
    }
}


// Использование
const currentActor = new HollywoodActor('Keanu', 57, [ { name: 'Matrix' } ]);
currentActor.getIsKeanu();
currentActor.getAge();