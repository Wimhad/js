<template>
    <div class="quotes">
        <h3>Введите текст для поиск по нему цитат</h3>
        <input
            class="form-control form-control-lg"
            type="text"
            v-model="searchText"
            placeholder="Жизнь"
        />
        <div class="quotes__container">
            <template v-for="quote in quotes">
                <!--Начало-->
                <div class="quotes__quote-block" v-show="getVisibility(quote.text)">
                    <div
                        class="quotes__quote-text"
                        v-replace:[searchText]="{searchText}">
                        "{{ quote.text }}"
                    </div>
                    <div
                        class="quotes__quote-author">
                        (c) {{ quote.author }}
                    </div>
                </div>
                <!--Конец-->
            </template>
        </div>
    </div>
</template>
0 1 2 3 4
<script>
export default {
    name: 'MyDirective',
    // Начало
    directives: {
        replace: {
            update: (element, bindings) => {
                if (element.textContent.includes(bindings.arg)) {
                    const elementText = element.textContent;
                    element.innerHTML = elementText.replaceAll(bindings.arg, '<span>' + bindings.arg + '</span>');
                }
            }
        }
    },
    // Конец
    methods: {
        getVisibility(text) {
            return text.includes(this.searchText);
        },
    },
    data() {
        return {
            searchText: '',
            quotes: [
                {
                    id: 1,
                    text: 'Настойчивость очень важна. Вы не должны сдаваться, если только не вынуждены сдаться.',
                    author: 'Илон Маск',
                },
                {
                    id: 2,
                    text: 'Проблемы — это спрятанные решения.',
                    author: 'Павел Дуров',
                },
                {
                    id: 3,
                    text: 'Если вы не желаете слышать критику, пожалуйста, не делайте ничего нового.',
                    author: 'Джефф Безос',
                },
                {
                    id: 4,
                    text: 'Если вы предпринимаете только те действия, результат которых известен вам заранее, долго ваш бизнес не протянет.',
                    author: 'Джефф Безос',
                },
                {
                    id: 5,
                    text: 'В мире, который меняется очень быстро, единственная стратегия, которая гарантированно провальна — не рисковать',
                    author: 'Марк Цукерберг',
                },
                {
                    id: 6,
                    text: ' Если бы я мог прожить жизнь заново, я был бы сантехником.',
                    author: 'Альберт Эйнштейн',
                },
                {
                    id: 7,
                    text: 'Ты не несешь ответственности за то, чего ждут от тебя другие люди. Если от тебя ждут слишком многого, то это их ошибка, а не твоя вина.',
                    author: 'Ричард Фейнман',
                },
                {
                    id: 8,
                    text: 'Если вы ученый, квантовый физик и не можете в двух словах объяснить пятилетнему ребенку, чем вы занимаетесь, — вы шарлатан',
                    author: 'Ричард Фейнман',
                },
                {
                    id: 9,
                    text: 'Мне всегда нравилось преуспевать в том, что у меня никак не должно было получиться.',
                    author: 'Ричард Фейнман',
                },
                {
                    id: 10,
                    text: 'В жизни нет ничего, чего стоило бы бояться, есть только то, что нужно понять.',
                    author: 'Мария Кюри-Склодовская',
                },
                {
                    id: 11,
                    text: 'Мне кажется, каждый призван заниматься одним делом на Земле.',
                    author: 'Жан-Поль Бельмондо',
                },
                {
                    id: 12,
                    text: 'Важно помнить: всякий раз, когда ты покупаешь что-то, ты на сто процентов поддерживаешь политику той компании, которая произвела эту вещь.',
                    author: 'Леонардо Ди Каприо',
                },
                {
                    id: 13,
                    text: 'Деньги — странная вещь. Люди, которые не имеют их, сильно к ним стремятся. Люди, которые их имеют, имеют также много проблем.',
                    author: 'Айртон Сенна',
                },
                {
                    id: 14,
                    text: 'Никто из нас не хотел быть бас-гитаристом. В нашем представлении это был толстый парень, который играл где-то сзади.',
                    author: 'Пол Маккартни',
                },
                {
                    id: 15,
                    text: 'Я всё время что-то пишу. Потому что я помешан на мысли, что мы должны стать ещё лучше.',
                    author: 'Крис Мартин',
                },
                {
                    id: 16,
                    text: 'С тех пор прошло 80 лет и я по-прежнему задаю себе этот же вопрос. Что же такое электричество?), но не в состоянии ответить на него.',
                    author: 'Никола Тесла',
                },

            ],
        };
    },
};
</script>

<style>
.quotes {
    margin: 50px auto;
    width: 700px;
}

.quotes h3 {
    margin-bottom: 15px;
}

.quotes__container {
    margin-top: 15px;
    padding-top: 15px;
}

.quotes__quote-block {
    margin-bottom: 15px;
    padding: 10px;
    box-shadow: 4px 4px 8px 2px rgba(34, 60, 80, 0.2);
    border-radius: 6px;
}

.quotes__quote-text {
    font-size: 20px;
}

.quotes__quote-author {
    margin-top: 5px;
    font-size: 16px;
}

.quotes__quote-text span {
    color: #1783b7;
    text-decoration: underline;
}
</style>
