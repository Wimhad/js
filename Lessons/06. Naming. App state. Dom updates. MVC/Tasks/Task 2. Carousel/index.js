// Метод для инициализации DOM приложения
const initDOM = (state) => {
    const carouselInner = document.querySelector('.carousel-inner');
    if (!carouselInner) {
        console.error('Error: .carousel-inner element not found in the DOM.');
        return;
    }

    // Create a div for each image and add it to the carousel-inner
    state.forEach((url, index) => {
        const div = document.createElement('div');
        div.classList.add('carousel-item');
        if (index === 0) div.classList.add('active');

        const img = document.createElement('img');
        img.classList.add('d-block', 'w-100');
        img.src = url;

        div.appendChild(img);
        carouselInner.appendChild(div);
    });
};

// Метод для ререндера приложения
const render = (activeImageIndex) => {
    const carouselItems = document.querySelectorAll('.carousel-item');
    if (!carouselItems.length) {
        console.error('Error: No .carousel-item elements found in the DOM.');
        return;
    }

    // Remove the 'active' class from all items
    carouselItems.forEach(item => item.classList.remove('active'));

    // Add the 'active' class to the item at the activeImageIndex
    const activeItem = carouselItems[activeImageIndex];
    if (activeItem) {
        activeItem.classList.add('active');
    } else {
        console.error(`Error: No carousel item at index ${activeImageIndex}.`);
    }
};

// Метод определения обработчиков событий в приложении
const addListeners = (state) => {
    let activeImageIndex = 0;

    const nextButton = document.querySelector('.carousel-control-next');
    const prevButton = document.querySelector('.carousel-control-prev');

    if (!nextButton || !prevButton) {
        console.error('Error: Carousel control buttons not found in the DOM.');
        return;
    }

    // Next button logic
    nextButton.addEventListener('click', () => {
        activeImageIndex = (activeImageIndex + 1) % state.length;
        render(activeImageIndex);
    });

    // Prev button logic
    prevButton.addEventListener('click', () => {
        activeImageIndex = (activeImageIndex - 1 + state.length) % state.length; // Adding state.length ensures index wraps around positively
        render(activeImageIndex);
    });
};

// Приложение
const setCarousel = (imageUrls) => {
    if (!Array.isArray(imageUrls) || imageUrls.length === 0) {
        console.error('Error: Invalid or empty imageUrls array.');
        return;
    }

    initDOM(imageUrls);
    render(0);
    addListeners(imageUrls);
};

export default setCarousel;
