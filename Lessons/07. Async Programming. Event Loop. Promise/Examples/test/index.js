// // console.log('Страница загрузилась')
// //
// // setTimeout(() => {
// //   console.log("Отложенная операция")
// // })
// //
// // setTimeout(() => {
// //   console.log("Отложенная операция")
// // })
// //
// // let a = 0;
// //
// // setInterval(() => {
// //   a = a + 1
// //   console.log("Повторная операция", a)
// // }, 1000)
// //
// // console.log('последняя строка')
//
//
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // const data = {
//     //   status: "200",
//     //   userName: "Jon"
//     // }
//     // resolve(data);
//     reject("Error");
//   }, 3000)
// })
//
// document.body.innerHTML = "Loading..."
//
//
// promise
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((err) => console.error(err))
//   .finally(() => {
//     console.log("Finally")
//     document.body.innerHTML = ""
//   })
//
//

const userData = confirm();

console.log(userData)

const promise = new Promise((resolve, reject) => {
  if (userData === true) {
    resolve("OK");
  } else {
    reject("Error пользователь не подтвердил");
  }
})

promise
  .then((text) => console.log(text))
  .catch((err) => console.error(err))

