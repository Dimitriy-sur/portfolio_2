// Получаем элементы
const sliderMainPersonal = document.querySelector('.slides-personal');
const slidesPersonal = document.querySelectorAll('.slide-personal');
const prevButtonPersonal = document.querySelector('.prev-personal');
const nextButtonPersonal = document.querySelector('.next-personal');

// Определяем количество слайдов
const totalSlidesPersonal = slidesPersonal.length;

// Текущий слайд (начинаем с первого)
let currentSlidePersonal = 0;

// Функция для переключения слайда
function goToSlidePersonal(slideIndex) {
  // Убедимся, что индекс в пределах допустимого диапазона
  slideIndex = slideIndex % totalSlidesPersonal;

  // Если индекс отрицательный, переводим на последний слайд
  if (slideIndex < 0) {
    slideIndex = totalSlidesPersonal - 1;
  }

  // Обновляем текущий слайд
  currentSlidePersonal = slideIndex;

  // Вычисляем смещение для анимации (в процентах)
  const translateX = `-${currentSlidePersonal * 25}%`;

  // Применяем смещение к контейнеру слайдов
  sliderMainPersonal.style.transform = `translateX(${translateX})`;
}

// Обработчики кликов для кнопок
prevButtonPersonal.addEventListener('click', () => {
  goToSlidePersonal(currentSlidePersonal - 1); // Переключаем на предыдущий слайд
});

nextButtonPersonal.addEventListener('click', () => {
  goToSlidePersonal(currentSlidePersonal + 1); // Переключаем на следующий слайд
});

// Запуск начального состояния (первый слайд)
goToSlidePersonal(currentSlidePersonal);
