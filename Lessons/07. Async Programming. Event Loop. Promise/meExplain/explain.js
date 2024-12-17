/*
    1. Основы синхронного и асинхронного кода
    Синхронный код
    Синхронность означает, что операции выполняются строго последовательно, строка за строкой. Если одна операция занимает много времени, выполнение всего кода блокируется.

    Пример синхронного чтения и записи файлов:
*/

import fs from 'fs';

// Сначала читаем файл
const fileContent = fs.readFileSync('./files/index','utf-8');
// Затем записываем в другой файл
fs.writeFileSync('./files/copy-index', fileContent);

/*
    Проблема: Если чтение займет 10 секунд, интерфейс "зависнет", пока операция не завершится.
*/

// ----------------------------------------------------

/*
    2. Асинхронный код
    Асинхронное программирование позволяет выполнять операции в фоне, не блокируя выполнение основного кода.

    Пример с использованием setTimeout:
*/

console.log('Начало');  // Синхронный код
setTimeout(() => {
    console.log('Асинхронный код через 3 секунды');
}, 3000);
console.log('Конец');   // Выполняется раньше, чем асинхронный код

/*
    Вывод в консоль:
    #################################
    Начало
    Конец
    Асинхронный код через 3 секунды
    #################################
*/

// -------------------------------------------

/*
    3. Как работает Event Loop
    Асинхронный код в JavaScript управляется циклом событий (Event Loop):

    Асинхронные задачи выполняются в фоновом потоке (например, в браузерном API или Node.js).
    Когда задача завершена, результат отправляется в очередь задач.
    Если стек вызовов пуст, цикл событий берет задачу из очереди и выполняет ее.
*/
// =======================================
/*
    4. Методы работы с асинхронным кодом
    4.1 Коллбэки (callbacks)
    Коллбэк – это функция, которая передается как аргумент в другую функцию и вызывается после завершения операции.

    Пример чтения файла с коллбэком:
*/

import fs from 'fs';

fs.readFile('./files/index', 'utf-8', (error, data) => {
    if (error) {
        console.error('Ошибка:', error);
    } else {
        console.log('Содержимое файла:', data);
    }
});

/*
    Недостатки коллбэков:
    Callback Hell (ад коллбэков): сложность управления множеством вложенных коллбэков. Пример:
*/

fs.readFile('./files/one', 'utf-8', (errorOne, dataOne) => {
    fs.readFile('./files/two', 'utf-8', (errorTwo, dataTwo) => {
        fs.readFile('./files/three', 'utf-8', (errorThree, dataThree) => {
            console.log(`${dataOne} ${dataTwo} ${dataThree}`);
        });
    });
});

/*
    4.2 Промисы (Promises)
    Промис – это объект, представляющий результат асинхронной операции, который может быть:

    * Pending (выполняется)
    * Fulfilled (успешно завершен)
    * Rejected (завершен с ошибкой)
    Пример использования промисов:
*/

import { promises as fsPromises } from 'fs';

fsPromises.readFile('./files/index','utf-8')
    .then(data => {
        console.log('Содержимое файла:', data);
    })
    .catch(error => {
       console.error('Ошибка:', error);
    });

/*
    Цепочка промисов:
    Позволяет выполнять операции последовательно:
*/

fsPromises.readFile('.files/one', 'utf-8')
    .then(dataOne => {
        console.log(dataOne);
        return fsPromises.readFile('./files/two', 'utf-8');
    })
    .then(dataTwo => {
        console.log(dataTwo);
        return fsPromises.readFile('./files/three', 'utf-8');
    })
    .then(dataThree => {
        console.log(dataThree);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });

/*
    Параллельное выполнение с Promise.all:
    Когда порядок выполнения не важен:
*/

Promise.all([
    fsPromises.readFile('./files/one', 'utf-8'),
    fsPromises.readFile('./files/two', 'utf-8')
])
    .then(([dataOne,dataTwo]) => {
        console.log(`Файлы прочитаны: ${dataOne}, ${dataTwo}`);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });

/*
    4.3 Async/Await
    Синтаксис async/await делает код асинхронных операций линейным и понятным.

    Пример:
*/

import { promises as fsPromises } from 'fs';

async function readFiles() {
    try {
        const dataOne = await fsPromises.readFile('./files/one', 'utf-8');
        console.log(dataOne);

        const dataTwo = await fsPromises.readFile('./files/two', 'utf-8');
        console.log(dataTwo);

        const dataThree = await fsPromises.readFile('./files/three', 'utf-8');
        console.log(dataThree);
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

// readFiles();
// ++++++++++++++++++++++++++++++++
// Параллельное выполнение с await:

async function readAllFiles() {
    try {
        const [dataOne, dataTwo] = await Promise.all([
            fsPromises.readFile('./files/one', 'utf-8'),
            fsPromises.readFile('./files/two', 'utf-8')
        ]);
        console.log(`Файлы прочитаны: ${dataOne}, ${dataTwo}`);
    } catch (error) {
        console.error('Ошибка:', error)
    }
}

// readAllFiles();
// -------------------------------------
/*
    5. Обработка ошибок
    Обработка ошибок важна для стабильной работы приложения:

*/

// Промисы:

fsPromises.readFile('./files/index', 'utf-8')
    .then(data => console.log(data))
    .catch(error => console.error('Ошибка:', error));

// Async/Await:

try {
    const data = await fsPromises.readFile('./files/index', 'utf-8');
    console.log(data);
} catch (error) {
    console.error('Ошибка:', error);
}

/*
    6. Дополнительные методы
    Promise.resolve() и Promise.reject():

    Быстро создают успешный или неудачный промис.
*/

Promise.resolve('Успех').then(console.log);
Promise.reject('Ошибка').then(console.error);

/*
    Promise.finally(): Код, который должен выполниться в любом случае:
*/

fsPromises.readFile('./files/index', 'utf-8')
    .then(data => console.log(data))
    .catch(error => console.error(error))
    .finally(() => console.log('Завершено'))


/*
    7. Заключение
    Асинхронное программирование в JavaScript – мощный инструмент. Начав с простых коллбэков, вы можете перейти к удобным и гибким промисам, а затем к современному и выразительному синтаксису async/await. Понимание Event Loop и обработки ошибок – ключ к написанию устойчивого и эффективного кода.
*/


/*
    It seems you're diving into a detailed study of asynchronous programming in JavaScript. If you'd like, I can clarify or expand on any section of what you shared—whether it's callbacks, promises, async/await, error handling, or advanced concepts like Promise.all, Promise.race, or the Event Loop.

    Here are a few additional points I could elaborate on if you're interested:

    1. Real-Life Examples of Asynchronous Programming
    How these techniques are used in web development (e.g., making API calls, handling file uploads/downloads, etc.).
    Scenarios where Promise.all and Promise.race shine.
    2. Transitioning from Callbacks to Promises
    Step-by-step examples of converting callback-based code to promise-based code for better clarity and maintainability.
    3. async/await Simplification
    How async/await makes asynchronous code look more synchronous and reduces complexity in promise chains.
    4. Common Mistakes and Best Practices
    Pitfalls like unhandled rejections or not clearing timers.
    Structuring asynchronous code to maintain readability and prevent bugs.
    5. Debugging Asynchronous Code
    Tools and techniques (e.g., using Chrome DevTools or Node.js debugger).
    Would you like me to go into more detail on any of these, or do you have a specific topic or example in mind?
*/




