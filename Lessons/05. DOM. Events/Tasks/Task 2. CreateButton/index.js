const createButton = () => {
    const btnCon = document.querySelector(".button-container");
    const btn = document.createElement("button");
    btn.textContent = "Кнопка";
    btn.classList.add("btn", "btn-primary");
    btnCon.appendChild(btn);
    const disDiv = document.querySelector(".description");

    const span = document.createElement("span");
    span.textContent = "Текст вставлен!";

    btn.addEventListener("click", () => {
        // const span = document.createElement("span");
        // span.textContent = "Текст вставлен!";
        disDiv.appendChild(span);
    })
};

export default createButton;
