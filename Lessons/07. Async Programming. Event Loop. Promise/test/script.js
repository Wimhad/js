const selectRef = document.getElementById('select');
const loadRef = document.getElementById("load")
setDefaultColor();
onListener();

function onListener () {
  const promise = new Promise((resolve, reject) => {
    selectRef.addEventListener('change', () => {
        const value = selectRef.value;
        localStorage.setItem("COLOR_LS", value);
        
        if (value === 'red') {
          reject("Ошибка, красный")
        } else if (value === 'green') {
          resolve("Ок, зеленый")
        }
      }
    )
  })
  
  promise
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
    .finally(() => onListener())
}

function setDefaultColor () {
  selectRef.value = localStorage.getItem("COLOR_LS");
  
  setTimeout(() => {
    loadRef.classList.add("hide");
    selectRef.classList.remove("hide");
  }, 2000)
}
