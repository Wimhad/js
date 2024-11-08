// Возвращает копию элемента
const getCopy = (el) => JSON.parse(JSON.stringify(el));


// Возвращает массив без дубликатов
const onlyUnique = (array) => [ ...new Set(array) ];

const generateDifference = (objOne, objTwo) => {
    const obj = {};
    const keys = [...Object.keys(objOne),...Object.keys(objTwo)];
    for (const key of keys) {
        if (!(key in objOne)) {
            obj[key] = 'added';
        } else if (!(key in objTwo)) {
            obj[key] = 'deleted';
        } else if (objOne[key] === objTwo[key]) {
            obj[key] = 'unchanged';
        } else {
            obj[key] = 'changed';
        }
    }
    return obj;
};


export default generateDifference;
