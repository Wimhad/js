class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static sortByAge(userOne, userTwo) {
        return userOne.age - userTwo.age;
    }
}

let users = [
    new User("Sergey", 42),
    new User("Dmitro", 24),
    new User("Liya", 32),
];

users.sort(User.sortByAge);




// Статические свойства определяются похожим образом:
class CurrentUser {
    static type = 'mammal';

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// Данную функциональность можно получить и простым присваиванием классу свойства:
CurrentUser.type = 'mammal';

