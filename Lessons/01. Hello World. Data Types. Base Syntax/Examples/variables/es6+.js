// let

function logDate() {
    for (let i = 0; i < 10; i++) {
        let text = 'i = ' + i;
    }
    console.log(text);
}

logDate();

function logDate1() {
    console.log(name);
    let name = 'Justine';
}

logDate1();

// const


const name = 'Justine';
let surname = 'Henin';

name = 'Maria';
surname = 'Sharapova';

const letters = [ 'a', 'b', 'c' ];
letters[3] = 'e';
console.log(letters);