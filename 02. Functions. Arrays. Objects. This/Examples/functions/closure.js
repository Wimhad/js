
// Есть два типа области видимости - лексическая и глобальная
let userName = 'Elon';
const consoleName = () => {
    console.log(userName);
}
userName = 'Musk';
consoleName();





// Замыкание
const makeGreeting = (greetingWord) => {
    const logName = (name) => {
        const text = `${greetingWord}, ${name}!`;
        console.log(text);
    }

    return logName;
}

const welcomeGreeting = makeGreeting('Welcome');
welcomeGreeting('Elon');
welcomeGreeting('Liya');

const hiGreeting = makeGreeting('Hi');
hiGreeting('Elon');
hiGreeting('Liya');