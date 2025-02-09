const BASE_URL = 'https://api.imgflip.com/get_memes';

const updateImage = (imageData) => {
    const imageContainer = document.querySelector('.main__image-container');

    // Clear any existing content
    imageContainer.innerHTML = '';

    // Create an image element
    const img = document.createElement('img');
    img.setAttribute('src', imageData.url);
    img.setAttribute('alt', imageData.name);
    img.classList.add('img-fluid'); // Bootstrap class for responsiveness

    // Append the image to the container
    imageContainer.appendChild(img);
};

const giveMeMeme = () => {
    const mainContainer = document.querySelector('.main');

    const memeContainer = document.createElement('div');
    memeContainer.classList.add('main__image-container');

    const button = document.createElement('button');
    button.classList.add('btn', 'btn-warning');
    button.textContent = 'ДАЙ МНЕ МЕМ!';

     mainContainer.appendChild(memeContainer);
     mainContainer.appendChild(button);

     button.addEventListener('click', async () => {
         try {
             const response = await fetch(BASE_URL);

             if (!response.ok) {
                 throw new Error(`HTTP error! status: ${response.status}`);
             }
             // Parse the JSON response
             const data = await response.json();

             // Get the array of memes
             const memes = data?.data?.memes;
             if (!memes || memes.length === 0) {
                 throw new Error('No memes found in the response');
             }

             const randomIndex = Math.floor(Math.random() * memes.length);
             const randomMeme = memes[randomIndex];

             updateImage(randomMeme);
         } catch (error) {
             console.error('Failed to fetch or display a meme:', error);
         }
     });
};

export default giveMeMeme;
