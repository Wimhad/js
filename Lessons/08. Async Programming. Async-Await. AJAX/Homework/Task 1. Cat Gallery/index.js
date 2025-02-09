// Импорт axios ниже работает только в node.js и нужен для тестирования
// Для отслеживания решения в браузере axios добавляется на страницу в виде скрипта:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Выполните задание, отслеживая изменения в браузере,
// после чего раскомментируйте строку с импортом для прохождения тестов

import axios from 'axios';

const setCatGallery = async () => {
    const container = document.querySelector('.main__container');

    try {
        const requests = Array.from({length: 10}, () =>
        axios.get('https://api.thecatapi.com/v1/images/search')
        );

        const responses = await Promise.all(requests);

        const imageUrls = responses.map(response => response.data[0].url);

        imageUrls.forEach(url => {
            const img = document.createElement('img');
            img.src = url;
            container.appendChild(img);
        });

        return 'cat gallery is ready!';
    } catch (error) {
        console.error('Failed to fetch cat images:', error);
        throw error; // Re-throw the error for further handling
    }
};

export default setCatGallery;
