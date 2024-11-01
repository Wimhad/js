const currentPassword = '42';
const password = prompt('Скажи пароль!');
if (currentPassword === password) {
    alert('Ну ладно, заходи...');
} else {
    const hasDrinks = confirm('А напитки ты принес?');
    if (hasDrinks) {
        alert('Ну ладно, заходи...');
    } else {
        alert('Не тот пароль!');
    }
}