const setCounter = () => {
    const mainDiv = document.querySelector(".main");
    mainDiv.innerHTML = `
        <button class="btn btn-primary">Количество нажатий: 0<button>
    `;
    let count = 0;

    const btn = document.querySelector(".main .btn");
    btn.addEventListener("click", () => {
        count++;
        btn.textContent = `Количество нажатий: ${count}`;
        if (count === 3) {
            btn.classList.remove("btn-primary");
            btn.classList.add("btn-warning");
        }
    });
};





export default setCounter;
