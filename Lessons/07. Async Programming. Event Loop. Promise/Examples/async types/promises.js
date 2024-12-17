// Создание промиса

const bestPromiseEver = new Promise((resolveCallback, rejectCallback) => {
    resolveCallback(result);
    rejectCallback(error);
});


// Использование промиса
bestPromiseEver.then(onFulfilled, onRejected)

// Пример:
promises
    .readFile('./files/one', 'utf-8')
    .then(
        // Функция onFulfilled:
        (result) => {
            console.log(result);
        },
        // Функция onRejected:
        (error) => {
            console.log(error);
        }
    )


// Из промиса всегда возвращается другой промис.

const promise = fsp.readFile('./files/one', 'utf-8');
console.log(promise);
// Promise { <pending> } // операция еще выполняется




// Цепочка промисов
const { promises } = fs;

promises.readFile('./files/one', 'utf-8')
    .then((dataOne) => console.log(dataOne))
    .then(() => promises.readFile('./files/two', 'utf-8'))
    .then((dataTwo) => console.log(dataTwo))
    .then(() => promises.readFile('./files/three', 'utf-8'))
    .then((dataThree) => console.log(dataThree));




// Параллельное выполнение промисов

const promiseOne = '<создаем промис>';
const promiseTwo = '<создаем еще промис>';

const promise = Promise.all([ promiseOne, promiseTwo ]);

promise.then(([ dataOne, dataTwo ]) => console.log(`${dataOne}${dataTwo}`));



// "Промисификация" выглядит следующим образом:

const newPromise = new Promise((resolve, reject) => {
    // resolve - коллбек, вызываемый при успешком выполнении операции
    // reject - коллбек, вызываемый при появлении ошибок в процессе выполнения операции
    fs.readdir('./files/one', (error, data) => {
        if (error) {
            reject(error);
            return;
        }
        resolve(data);
    });
});

// Далее наш промис можно использовать как любой другой промис (через `then` и `catch`)

// https://noteskeeper.ru/heritage/1332/


// Другие способы создания промисов

const promiseOne = Promise.resolve();  // промис, который завершится с успехом
// promiseOne.then((data) => ...

const promiseTwo = Promise.reject();   // промис, который завершится с неудачей
// promiseTwo.catch((error) => ...
