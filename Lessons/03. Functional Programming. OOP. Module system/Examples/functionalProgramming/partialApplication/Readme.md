### Частичное применение
 ```
function sum(x, y, z) {
    return x + y + z;
}

const partSum = partial(sum, 42);

partSum(1, 2) // 45
partSum(1) // NaN, тк фукнция все равно вызывается 
```

### Частичное применение в JS есть из коробки - bind
```
function translater(lang, text) {
    ...
}
const translateToRu = translater.bind(null, 'ru');
translateToRu(text);
```

### Порядков аргументов имеет значение

Если использовать каррирование, то будет ошибка, потому что язык идет последним
Можно поменять порядок аргументов, используя compose
```
function translate(text, lang)

const reversedTranslater = compose(translate, flip);
const translateToRu = curry(reversedTranslater, 'ru');
const translater = compose(translateRu, unique, words);

translater(text);
```
