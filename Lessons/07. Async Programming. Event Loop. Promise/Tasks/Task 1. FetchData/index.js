const fetchData = () => {
    const inputField = document.querySelector('.form-control');
    let debounceTimer = null;

    inputField.addEventListener('input' , () => {
        clearTimeout(debounceTimer); // Сбрасываем предыдущий таймер
        debounceTimer = setTimeout(() => {
            const searchText = inputField.value;
            alert(`Ищем: ${searchText}`);
        }, 1000); // Задержка в 1 секунду
    });
};

export default fetchData;
