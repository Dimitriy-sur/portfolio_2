const sliderMainGym = document.querySelector('.slides-gym');
const slidesGym = document.querySelectorAll('.slide-gym');
const prevButtonGym = document.querySelector('.prev-gym');
const nextButtonGym = document.querySelector('.next-gym');

// Определяем количество слайдов
const totalSlidesGym = slidesGym.length;

// Текущий слайд (начинаем с первого)
let currentSlideGym = 0;

// Функция для переключения слайда
function goToSlideGym(slideIndex) {
  // Убедимся, что индекс в пределах допустимого диапазона
  slideIndex = slideIndex % totalSlidesGym;

  // Если индекс отрицательный, переводим на последний слайд
  if (slideIndex < 0) {
    slideIndex = totalSlidesGym - 1;
  }

  // Обновляем текущий слайд
  currentSlideGym = slideIndex;

  // Вычисляем смещение для анимации (в процентах)
  const translateX = `-${currentSlideGym * 33}%`;

  // Применяем смещение к контейнеру слайдов
  sliderMainGym.style.transform = `translateX(${translateX})`;
}

// Обработчики кликов для кнопок
prevButtonGym.addEventListener('click', () => {
  goToSlideGym(currentSlideGym - 1); // Переключаем на предыдущий слайд
});

nextButtonGym.addEventListener('click', () => {
  goToSlideGym(currentSlideGym + 1); // Переключаем на следующий слайд
});

// Запуск начального состояния (первый слайд)
goToSlideGym(currentSlideGym);
