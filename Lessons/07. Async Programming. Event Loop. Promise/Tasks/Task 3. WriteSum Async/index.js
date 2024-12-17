import { promises as fs } from 'fs';

const getSum = (content) => {
    return content
        .split(',')
        .map((num) => Number(num.trim()))
        .reduce((acc, num) => acc + num, 0);
};

const writeSum = async (pathToFileOne, pathToFileTwo) => {
    try {
        // Read the contents of the two files asynchronously
        const [contentOne, contentTwo] = await Promise.all([
            fs.readFile(pathToFileOne, 'utf-8'),
            fs.readFile(pathToFileTwo, 'utf-8'),
        ]);

        // Compute the sum of numbers from both files
        const sum = getSum(contentOne) + getSum(contentTwo);

        // Return the computed sum
        return sum;
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('Такого файла нет');
        }
        throw error;
    }
};

export default writeSum;
