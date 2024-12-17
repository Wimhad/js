import WatchJS from '../../helpers/melanke-watchjs.js';

const { watch } = WatchJS;

const useForm = (mainContainerSelector) => {
    const mainContainer = document.querySelector(mainContainerSelector);
    const newsInput = mainContainer.querySelector('.form-control');
    const newsAddButton = mainContainer.querySelector('.btn-primary');
    const newsContainer = mainContainer.querySelector('.news__container');

    return {
        newsInput,
        newsAddButton,
        newsContainer,
    };
};

const addEventListeners = ({ newsInput, newsAddButton }, state) => {
    newsInput.addEventListener('input', (event) => {
        state.form.text = event.target.value;
    });

    newsAddButton.addEventListener('click', () => {
        const newsText = state.form.text.trim();

        if (newsText === '') {
            return;
        }

        const date = new Date();
        state.news.push({
            text: newsText,
            date: date.toLocaleDateString() + ' ' + date.toLocaleTimeString(),
        });

        state.form.text = '';
    });
};

const setWatchers = ({ newsContainer, newsInput }, state) => {
    const getNewsHtml = (newsData) => (`
        <div class="news__news-element">
            <h5>${ newsData.date }</h5>
            <div>${ newsData.text }</div>
        </div>
    `);

    const getNewsList = (newsList) => (
        newsList
            .map(getNewsHtml)
            .reverse()
            .join('\n')
    );

    watch(state, 'news', () => {
        newsContainer.innerHTML = getNewsList(state.news);
    });

    watch(state, 'form', () => {
        if (state.form.text === '') {
            newsInput.value = '';
        }
    });
};

const setNewsMaker = () => {
    // Модель нашего приложения
    const state = {
        form: {
            text: '',
        },
        news: [],
    };

    // Обновляемые элементы нашего приложения
    const {
        newsContainer,
        newsInput,
        newsAddButton,
    } = useForm('.main');

    // Мозги приложения - слой Controller
    // Создаем обработчики для событий в слое View (в интерфейсе)
    // Единственная ответственность обработчиков - обновлять состояние приложения (слой Model)
    addEventListeners({
        newsInput,
        newsAddButton,
    }, state);

    // Работа со слоем View
    // Единственная ответственность вотчеров - обновлять DOM при изменении состояния
    setWatchers({ newsContainer, newsInput },state);
};

export default setNewsMaker;
