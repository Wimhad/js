### Программа - поток данных.
```
const text = 'Изучаем функциональное программирование
с 42-ой лабораторией';

const letterFound = letter(text);
const letterUsed = unique(letterUsed);
```

### Можно использовать промежуточные функции
```
function uniqueLetters(text) {
    return unique(letters(text));
}

const lettersUsed = uniqueLetters(text);
```

Тут мы приходим к композиции - цепочка вызовов(справа - налево)

### compose(h, g, f)(x) = h(g(f(x)))

```
const uniqueLetters = compose(unique, letters);
const lettersUsed = uniqueLetters(text);
```

Такой подход хорошо тем, что функция не упоминает данные, которые использует.
Такие функции легко переиспользовать.
```
const uniqueLetters = compose(unique, letters);
const uniqueLettersCount = compose(count, uniqueLetters);
```

### А что если функция принимает два аргумента?
```
function translate(lang, text)
const translater = compose(translate, unique, words);
translate(text); //error
```

### Как решить?

использовать каррирование

```
function translate(lang, text)
const translateToRu = curry('ru');
const translater = compose(translateToRu, unique, words);
translate(text); //работает
```

### Пример реализации
```
const compose = (f, g) => (x) => f(g(x));

const text = 'some bla bkla bla';

const words = (text) => text
    .replace(/\s/g, '')
    .split('');

const unique = (words) => words
    .filter((word, index, arr) => arr.indexOf(word) === index)

const uniqueWords = compose(unique, words);

console.log(uniqueWords(text));
```
