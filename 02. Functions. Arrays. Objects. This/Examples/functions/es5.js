// Function Declaration (объявление функции)
helloWorld();
function helloWorld() {
    console.log('Hello World!');
}






// Function Expression (функциональное выражение)
helloWorld2();
const helloWorld2 = function() {
    console.log('Hello World!');
}






// Аргументы по умолчанию
function greeting(message, user) {
    user = user || 'Vladimir';
    // Или if (typeof user === undefined) { user = 'Vladimir'; }
    // Или if (arguments.length === 1) { user = 'Vladimir'; }
}