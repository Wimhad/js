// SetTimeout, setInterval

const whereIsTheMoney = (name) => {
    console.log(`Где деньги, ${name}?`);
};

setTimeout(whereIsTheMoney, 1000, 'Лебовски');
const timerId = setTimeout(whereIsTheMoney, 1000, 'Лебовски');
clearTimeout(timerId);










setInterval(whereIsTheMoney, 1000, 'Тимур');
const timerId = setInterval(whereIsTheMoney, 1000, 'Тимур');
clearInterval(timerId);