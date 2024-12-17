const setToDo = () => {
    // Начало
    const toDoMainDiv = document.querySelector(".to-do__main");
    const input = document.createElement("input");
    input.classList.add("form-control", "form-control-lg");
    const btnAdd = document.createElement("button");
    btnAdd.classList.add("btn","btn-danger");
    btnAdd.textContent = "Добавить в план";
    const  btnFull = document.createElement("button");
    btnFull.classList.add("btn", "btn-success");
    btnFull.textContent = "Добавить в сделанные";
    toDoMainDiv.appendChild(input);
    toDoMainDiv.appendChild(btnAdd);
    toDoMainDiv.appendChild(btnFull);

    const toDoTask = document.querySelector(".to-do__tasks");
    const inputText = document.querySelector(".to-do__main input")

    const addListener = (el,type) => {
        el.addEventListener("click", () => {
            const span = document.createElement("span");
            span.setAttribute("data-type",type);
            span.textContent = inputText.value;
            inputText.value = "";
            toDoTask.appendChild(span);

            const spans = document.querySelectorAll(".to-do__tasks span");
            spans.forEach(span => {
                span.addEventListener("click", () => {
                    span.remove();
                })
            });
        });
    }
    addListener(btnAdd,"planned");
    addListener(btnFull,"completed");




    // Конец
};

export default setToDo;