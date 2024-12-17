// Асинхронные операции
// Оно же пример `Event Loop`

console.log('Сначала это');

setTimeout(() => {
    console.log('И только потом асинхронный код');
}, 3000);

console.log('А потом это');