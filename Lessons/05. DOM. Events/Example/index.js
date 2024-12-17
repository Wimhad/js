const hostRef = document.getElementById("host")

// const btn = hostRef.getElementById("btn");
// const btn2 = document.querySelector(".btn-2")
// const btn3 = document.querySelector("#btn")
// const btn4 = document.querySelector("[name='btnName']")
// const btn4 = document.querySelector("[id='btn']")
// const btn4 = document.querySelector("[type='btn']")
// const btn = hostRef.querySelector("#btn");
// const buttons = hostRef.querySelectorAll(".btn-2");
const buttonsArr = Array.from(hostRef.querySelectorAll(".btn-2"));
// console.log(buttonsArr);

// прослушка клика для коллекции элементов
buttonsArr.forEach((item, index) => {
    console.log(index, item);
    
    item.addEventListener('click', () => {
        console.log(`кнопка с inx ${ index } была нажата`);
    })
})

const elementRef = document.getElementById("element");

// elementRef.addEventListener('click', function () {
//     console.log("КНОПКА БЫЛА КЛИКНУТА");
// })

// прослушка для элемента - 1 способ (добавляет прослушку)
elementRef.addEventListener('click', () => {
    console.log("КНОПКА БЫЛА КЛИКНУТА");
})

// прослушка для элемента - 2 способ (перекрывает прослушки)
elementRef.onclick = () => {
    console.log("КНОПКА БЫЛА КЛИКНУТА");
}

const radioArr = Array.from(document.getElementsByName("var"));
const radioArr2 = Array.from(document.querySelectorAll("[name='var']"));

console.log(radioArr2)
radioArr2.forEach(inputItem => {
    inputItem.addEventListener('input', () => {
        const parent = inputItem.closest('label')
        const text = parent.querySelector('span').innerText;
        console.log('ИЗМЕНИЛСЯ ВЫБОР');
        console.log(inputItem.value);
        console.log(inputItem.closest('label'))
        console.log(text)
    })
})

const formRef = document.getElementById("form");

formRef.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("SUBMIT НАЖАЛ");
})

const blockRef = document.getElementById("block");

let timeout;

blockRef.addEventListener('mousemove', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        console.log("ДВИЖЕНИЕ МЫШИ")
    }, 200)
})

blockRef.addEventListener('mouseout', () => {
    console.log('Вышли за блок');
    clearTimeout(timeout);
})

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' || event.key === 'Enter') {
        console.log('Выход')
    }
})

let isActive = false;

const defaultIsActive = localStorage.getItem("LS_ACTIVE")

if (defaultIsActive) {
    if (defaultIsActive === 'true') {
        setActive()
    } else {
       setInactive()
    }
}

blockRef.onclick = () => {
    if (isActive) {
        // isActive = false
        // blockRef.style.backgroundColor = 'grey';
        setInactive()
    } else {
        // isActive = true
        // blockRef.sty le.backgroundColor = 'red';
        setActive()
    }
    
    // blockRef.classList.toggle('block--disabled');
    // blockRef.classList.toggle('block--active');
    
    isActive = !isActive;
    localStorage.setItem("LS_ACTIVE", isActive);
}

function setActive() {
    blockRef.classList.add('block--active');
    blockRef.classList.remove('block--disabled');
}

function setInactive() {
    blockRef.classList.add('block--disabled');
    blockRef.classList.remove('block--active');
}


// setTimeout(() => {
//     console.log("ТАЙМЕР")
// }, 2000)
//
// setInterval(() => {
//     console.log("ИНТЕРВАЛ")
// }, 1000)

