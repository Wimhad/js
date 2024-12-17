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

function setCalculator() {
    const calcElement = document.querySelector('.calc');

    // Создаем кнопки (цифры + дополнительные)
    const digitButtons = Array.from({ length: 10 }, (_, i) => ({
        text: i.toString(),
        type: TYPES.DIGIT,
    }));
    const allButtons = [...digitButtons, ...ADDITIONAL_BUTTONS];

    // Очистка контейнера кнопок
    const buttonsContainer = calcElement.querySelector('.calc__buttons');
    buttonsContainer.innerHTML = '';

    allButtons.forEach((button) => {
        const btn = document.createElement('button');
        btn.textContent = button.text;
        btn.classList.add('btn', 'btn-dark');
        btn.dataset.type = button.type;

        // Добавляем обработчик события
        btn.addEventListener('click', handleButtonClick);
        buttonsContainer.appendChild(btn);
    });

    // Создаем элементы результата
    const resultContainer = calcElement.querySelector('.calc__result');
    resultContainer.innerHTML = `
        <span>Результат:</span>
        <span class="calc__result-number">0</span>
    `;
}

// Обработка кликов по кнопкам
function handleButtonClick(event) {
    const button = event.target;
    const buttonType = button.dataset.type;
    const mainDisplay = document.querySelector('.calc__main');
    const resultDisplay = document.querySelector('.calc__result-number');

    switch (buttonType) {
        case TYPES.DIGIT:
        case TYPES.PLUS:
            mainDisplay.textContent += button.textContent;
            break;
        case TYPES.RESULT:
            try {
                const expression = mainDisplay.textContent;
                const result = eval(expression); // Обработка выражения
                resultDisplay.textContent = result;
            } catch (error) {
                resultDisplay.textContent = 'Ошибка';
            }
            break;
        case TYPES.RESET:
            mainDisplay.textContent = '';
            resultDisplay.textContent = '0';
            break;
        default:
            console.error('Неизвестный тип кнопки:', buttonType);
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', setCalculator);


export default setCalculator;
