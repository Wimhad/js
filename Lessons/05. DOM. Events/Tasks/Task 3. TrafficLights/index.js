const LIGHTS = {
    red: {
        type: 'red',
        text: 'Красный',
    },
    yellow: {
        type: 'yellow',
        text: 'Желтый',
    },
    green: {
        type: 'green',
        text: 'Зеленый',
    },
};

const resetLights = () => {
    const lightElements = document.querySelectorAll(".traffic__lights-container span");
    lightElements.forEach(light => {
        light.classList.remove('red-light', 'yellow-light', 'green-light');
    });
};

const setLight = (type) => {
    const activeLight = document.querySelector(`.traffic__lights-container span[type="${type}"]`);
    resetLights();
    if (activeLight) {
        activeLight.classList.add(`${type}-light`);
    }
};

const setTrafficLight = () => {
    const trafficLightsDiv = document.querySelector(".traffic__lights");
    const trafficSelectDiv = document.querySelector(".traffic__lights-select");

    const lightsContainer = document.createElement("div");
    lightsContainer.classList.add("traffic__lights-container");

    const select = document.createElement("select");
    select.classList.add("form-select");

    Object.values(LIGHTS).forEach(light => {
        const lightElement = document.createElement("span");
        lightElement.setAttribute("type",light.type);
        lightsContainer.appendChild(lightElement);

        const option = document.createElement("option");
        option.textContent = light.text;
        option.value = light.type;
        select.appendChild(option);
    });

    trafficLightsDiv.appendChild(lightsContainer);
    trafficSelectDiv.appendChild(select);

    select.value = 'red';
    setLight('red');

    select.addEventListener('change', () => {
        setLight(select.value);
    });
};

export default setTrafficLight;
