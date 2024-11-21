### Каррирование

Каррирование - превращает функцию в набор функций с меньшим числом параметров(изолента)

```
function translate(lang, text) {
    ...
}

//распаковываем изоленту
const curriedTranslater = curry(translate);

//приматываем аргумент
const translateToRu = curriedTranslater('ru');
const translater = compose(translateRu, unique, letters);

translate(text); // теперь работает
```

### Каррирование в деталях

```
function sum(x, y, z) {
    return x + y + z;
}

const curriedSum = curry(sum);

curriedSum(3)(14)(15) // sum(3, 14, 15)
```

### Мы можем сохранять результат первого аргумента, например

```
const addTo42 = curriedSum(42);
addTo42(2)(10) // добавли остальное
```
