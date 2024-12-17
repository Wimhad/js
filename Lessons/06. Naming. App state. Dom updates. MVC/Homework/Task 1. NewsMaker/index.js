import WatchJS from '../../helpers/melanke-watchjs.js';

const { watch } = WatchJS;

const setNewsMaker = () => {
    // Начало


    // Model: State of the application
    const state = {
        news: [] // Array to hold news items
    };

    // View: Renders the news items to the DOM
    const renderNews = () => {
        const newsContainer = document.querySelector('.news__container');
        newsContainer.innerHTML = '';

        // Loop through the news array and render each item
        state.news.forEach((newsItem) => {
            const newsElement = document.createElement('div');
            newsElement.classList.add('news__news-element');

            const date = new Date().toLocaleDateString();
            const dateElement = document.createElement('h5');
            dateElement.textContent = date;

            const textElement = document.createElement('div');
            textElement.textContent = newsItem.text;

            newsElement.appendChild(dateElement);
            newsElement.appendChild(textElement);

            newsContainer.append(newsElement);
        });
    };


    // Controller: Adding the event listeners
    const addListeners = () => {
        const input = document.querySelector('.form-control');
        const button = document.querySelector('.btn');

        // When the 'Create' button is clicked
        button.addEventListener('click', () => {
            const newsText = input.value.trim();
            if (newsText) {
                // Add news item to the state (model)
                state.news.unshift({ text: newsText});
                input.value = '';
            }
        });
    };

    // Watch the state for changes (when news is added, render it)
    watch(state, 'news', () => {
        renderNews(); // Re-render the news items whenever the model is updated
    });

    // Initialize the application by setting up event listeners and rendering the initial view
    addListeners();
    renderNews();


    // Конец
};

export default setNewsMaker;
