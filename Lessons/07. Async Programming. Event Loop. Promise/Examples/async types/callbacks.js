import fs from 'fs';

const callbackFunc = (error, data) => {
    // some code

    // error - ошибка, полученная при выполнении чтения файла
    // data - результат выполнения операции (содержимое файла в данном случае)
};

fs.readFile('./files/index', 'utf-8', callbackFunc);


const data = fs.readFile('./files/index', 'utf-8', callbackFunc);
console.log(data); // undefined


fs.readFile('./files/one', 'utf-8', (errorOne, dataOne) => {
    fs.readFile('./files/two', 'utf-8', (errorTwo, dataTwo) => {
        fs.readFile('./files/three', 'utf-8', (errorThree, dataThree) => {
            console.log(`${dataOne}${dataTwo}${dataThree}`);
        });
    });
});

// http://callbackhell.com/








// Параллельное выполнение операций

const state = [];

const logContent = () => {
    if (state.length !== 2) {
        return; // если добавлен только один файл, то выходим из функции
    }

    const text = state.join(', ');
    console.log(text);
};


// Читаем первый файл, добавляем его содержимое в data
fs.readFile('./app/one', 'utf-8', (error, data) => {
    state.push(data);

    logContent(); // пытаемся вывести данные в консоль
});

// Читаем второй файл, добавляем его содержимое в data
fs.readFile('./app/two', 'utf-8', (error, data) => {
    state.push(data);

    logContent(); // пытаемся вывести данные в консоль
});