### Специализация

```
function ajax(url, data, callback) {
    ...
}
```

У нас есть какое-то api.

Мы можем его специализировать, чтобы работать только с пользователями

```
const curriedAjax = curry(ajax);

//специализация
const userFetcher = curriedAjax('api/users');
```