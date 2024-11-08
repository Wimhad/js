const greeting = (name) => {
    console.log(`Ты уволен, ${name}!`);
}
greeting('Денис');






// Функции - объекты первого рода.
const getID = (user) => user.id;
const newFunc = getID;
newFunc({ name: 'Liya', id: 42 });






// Передача функции как аргумента в другую функцию
const greeting2 = (name, callback) => {
    const text = `Но за что, ${name}??!`;
    callback(text);
}

const logFunc = (text) => {
    console.log(test);
}
greeting2('Игнат', logFunc);





// Аргументы по умолчанию
const greeting3 = (message, user = 'Vladimir') => {
    console.log('user', user);
}