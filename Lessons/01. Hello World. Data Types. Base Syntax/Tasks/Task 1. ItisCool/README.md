### Задание

Реализуйте функцию `itisCool`, которая выводит (console.log) в терминал числа в диапазоне
от `begin` до `end`. При этом:

- Если число делится без остатка на 3, вместо него выводится текст `Itis`
- Если число делится без остатка на 5, вместо него выводится текст `Cool`
- Если число делится без остатка и на 3, и на 5, вместо числа выводится текст `ItisCool`
- В остальных случаях выводится само число

Функция принимает в качестве аргументов два параметра (`begin` и `end`), определяющих
начало и конец диапазона (включительно). Для простоты считаем, что эти параметры являются
целыми положительными числами. Если диапазон пуст (в случае, когда `begin` > `end`),
функция просто ничего не печатает.

Вызов функции:

```
itisCool(11, 20);
```

Вывод в терминале:

```
11
Itis
13
14
ItisCool
16
17
Itis
19
Cool
```