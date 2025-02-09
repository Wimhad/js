const getCharacterData = (characterId, key) => {
    // 1. Создаем URL для запроса
    const url = `https://www.anapioficeandfire.com/api/characters/${characterId}`;

    // 2. Возвращаем промис с fetch
    return fetch(url)
        .then(response => response.json()) // Парсим JSON-ответ
        .then(data => {
            // 3. Получаем имя персонажа
            const name = data.name || "Unknown";

            // 4. Получаем значение по ключу key
            const value = data[key];
            if (!value) {
                throw new Error(`Key '${key}' not found`);
            }

            // 5. Формируем строку ответа
            return `${name}, ${key}: ${Array.isArray(value) ? value.join(", ") : value}`;
        });
};

export default getCharacterData;













//// example
/*

fetch('https://example.com/api/resource', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: 'JohnDoe', age: 30 }),
})
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => console.log('Success:', data))
    .catch((error) => console.error('Error:', error));
*/
