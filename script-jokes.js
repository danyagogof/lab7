document.getElementById("jokeButton").addEventListener("click", function () {
    // Створюємо XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Встановлюємо метод GET і шлях до файлу
    xhr.open("GET", "jokes.txt", true);

    // Обробка відповіді
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Розділяємо текст на масив жартів
            const jokes = xhr.responseText.split("\n");

            // Вибираємо випадковий жарт
            const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

            // Виводимо жарт на сторінку
            document.getElementById("jokeDisplay").textContent = randomJoke;
        } else {
            // Якщо сталася помилка, вивести повідомлення
            document.getElementById("jokeDisplay").textContent = "Не вдалося отримати жарт.";
        }
    };

    // Обробка помилки
    xhr.onerror = function () {
        document.getElementById("jokeDisplay").textContent = "Виникла помилка під час запиту.";
    };

    // Надсилаємо запит
    xhr.send();
});
