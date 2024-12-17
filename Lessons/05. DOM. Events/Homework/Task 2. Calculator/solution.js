const TYPES = {
    DIGIT: 'digit',
    PLUS: 'plus',
    RESULT: 'result',
    RESET: 'reset',
};

const ADDITIONAL_BUTTONS = [
    {
        text: '+',
        type: TYPES.PLUS,
    },
    {
        text: '=',
        type: TYPES.RESULT,
    },
    {
        text: 'Сбросить',
        type: TYPES.RESET,
    },
];

const getSumOfText = (text) => text
    .split('+')
    .filter((el) => el)
    .reduce((acc, num) => acc + Number(num), 0);

const setCalculator = () => {
    // Начало
    const textBlock = document.querySelector('.calc__main');
    const buttonsBlock = document.querySelector('.calc__buttons');

    let buttonElements = [];
    for (let i = 0; i <= 9; i += 1) {
        buttonElements.push({ text: i, type: TYPES.DIGIT });
    }
    buttonElements = [ ...buttonElements, ...ADDITIONAL_BUTTONS ];

    buttonElements.forEach(({ type, text }) => {
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-dark');
        button.dataset.type = type;
        button.textContent = text;

        buttonsBlock.append(button);
    });

    const resultBlock = document.querySelector('.calc__result');
    const resultTextElement = document.createElement('span');
    resultTextElement.textContent = 'Результат: ';

    const resultNumberElement = document.createElement('span');
    resultNumberElement.classList.add('calc__result-number');
    resultNumberElement.textContent = 0;

    resultBlock.append(resultTextElement, resultNumberElement);

    const buttons = buttonsBlock.querySelectorAll('button');
    buttons.forEach((button) => {
        const buttonType = button.dataset.type;

        if (buttonType === TYPES.DIGIT) {
            button.addEventListener('click', (event) => {
                const currentDigit = button.textContent;
                textBlock.textContent = `${textBlock.textContent}${currentDigit}`;
            });
        } else if (buttonType === TYPES.PLUS) {
            button.addEventListener('click', (event) => {
                textBlock.textContent = textBlock.textContent + '+';
            });
        } else if (buttonType === TYPES.RESULT) {
            button.addEventListener('click', (event) => {
                const resultText = textBlock.textContent;
                const sum = getSumOfText(resultText);

                const resultBlock = document.querySelector('.calc__result-number');
                resultBlock.textContent = sum;
            });

        } else if (buttonType === TYPES.RESET) {
            button.addEventListener('click', (event) => {
                const resultBlock = document.querySelector('.calc__result-number');
                resultBlock.textContent = 0;
                textBlock.textContent = '';
            });
        }
    });
    // Конец
};

export default setCalculator;