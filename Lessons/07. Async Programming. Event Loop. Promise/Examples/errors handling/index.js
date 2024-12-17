try {
    // выполняем код
    const data = testData; // здесь выполнение остановится из-за ошибки
    const newData = data.names; // не выполнится
} catch (error) {
    // ловим ошибку, обрабатываем ее
    console.log(error);
} finally {
    // выполняем что-то (выполнится в любом случае)
    this.filter = { ...data };
}


// Создание ошибок, их выброс дальше
const error = new Error('Текст ошибки');
const error = new SyntaxError('Текст ошибки');
const error = new ReferenceError('Текст ошибки');
const error = new TypeError('Текст ошибки');


try {
    const data = { keys: [ 1, 2, 3 ] };
    if (!data.names) {
        throw new Error("Имена не найдены");
    }
    const newData = data.names; // не выполнится
} catch (error) {
    console.log(error);
    throw error; // "выбрасываем" ошибку для дальнейшего использоваться
}



promises.readFile('./files/one', 'utf-8')
    .then((dataOne) => console.log(dataOne))
    .then(() => promises.readFile('./files/two', 'utf-8'))
    .then((dataTwo) => console.log(dataTwo))
    .catch((error) => console.log(error))
    .then(() => promises.readFile('./files/three', 'utf-8'))
    .then((dataThree) => console.log(dataThree));
