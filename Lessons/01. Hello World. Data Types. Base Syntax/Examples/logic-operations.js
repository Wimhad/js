// if/else/else if:
if (number > 10) {
    console.log('Число больше десяти');
} else if (number < 5) {
    console.log('Число меньше пяти');
} else {
    console.log('Ну и зачем здесь эти числа вообще...');
}




// оператор && - "И"
if (number > 10 && number < 5) {
    console.log('Число больше десяти И меньше пяти');
}




// оператор || - "Или"
if (number > 10 || number < 5) {
    console.log('Число больше десяти ИЛИ меньше пяти');
}




// switch/case
const number = 42;

switch (number) {
    case 35:
        console.log('Это не 42, парень..');
        break;
    case 52:
        console.log('Это вообще ни разу не 42...');
        break;
    case 42:
        console.log('Ну наконец-то нормальное число...');
        break;
    default:
        console.log('Неизвестное число, дружище');
}