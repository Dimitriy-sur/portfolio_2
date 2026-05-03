// Получаем элементы
const sliderMainTrainer = document.querySelector('.trainers-list');
const slidesTrainer = document.querySelectorAll('.trainers-item');
const prevButtonTrainer = document.querySelector('.trainer-btn-prev');
const nextButtonTrainer = document.querySelector('.trainer-btn-next');

// Определяем количество слайдов
const totalSlidesTrainer = slidesTrainer.length;

// Текущий слайд (начинаем с первого)
let currentSlideTrainer = 0;

// Функция для переключения слайда
function goToSlideTrainer(slideIndex) {
    // Убедимся, что индекс в пределах допустимого диапазона
    slideIndex = slideIndex % totalSlidesTrainer;

    // Если индекс отрицательный, переводим на последний слайд
    if (slideIndex < 0) {
        slideIndex = totalSlidesTrainer - 1;
    }

    // Обновляем текущий слайд
    currentSlideTrainer = slideIndex;

    // Вычисляем смещение для анимации (в процентах)
    const translateX = `-${currentSlideTrainer * 25}%`;

    // Применяем смещение к контейнеру слайдов
    sliderMainTrainer.style.transform = `translateX(${translateX})`;
}

// Обработчики кликов для кнопок
prevButtonTrainer.addEventListener('click', () => {
    goToSlideTrainer(currentSlideTrainer - 1); // Переключаем на предыдущий слайд
});

nextButtonTrainer.addEventListener('click', () => {
    goToSlideTrainer(currentSlideTrainer + 1); // Переключаем на следующий слайд
});

// Запуск начального состояния (первый слайд)
goToSlideTrainer(currentSlideTrainer);
