import fs from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const getSum = (content) => {
    // Преобразуем содержимое в массив чисел, суммируем их
    return content
        .split(',')
        .map(Number)
        .reduce((acc, num) => acc + num, 0);
};

const writeSumSync = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    // Считываем содержимое двух файлов
    const contentOne = fs.readFileSync(pathToFileOne, 'utf-8');
    const contentTwo = fs.readFileSync(pathToFileTwo, 'utf-8');

    // Получаем сумму чисел из обоих файлов
    const sum = getSum(contentOne) + getSum(contentTwo);

    // Записываем результат в третий файл
    fs.writeFileSync(pathToResultFile, sum.toString(), 'utf-8');
};

export default writeSumSync;
