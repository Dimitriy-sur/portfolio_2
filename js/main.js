// Обработчик кликов по изображениям
// Находим все изображения с тегом img
const images = document.querySelectorAll('img');

// Создаем модальное окно (если еще не существует)
let modal = document.getElementById('image-modal');
if (!modal) {
    modal = document.createElement('dialog');
    modal.id = 'image-modal';
    modal.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: auto;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease;
    backdrop-filter: blur(5px);
    `;

    // Создаем контейнер для увеличенного изображения
    const modalImageContainer = document.createElement('div');
    modalImageContainer.style.cssText = `
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    `;

    // Создаем само изображение
    const modalImage = document.createElement('img');
    modalImage.id = 'modal-img';
    modalImage.style.cssText = `
    height: auto;
    object-fit: contain;
    border-radius: 8px;
    ` ;

    // Создаем кнопку закрытия (крестик)
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
    position: absolute;
    top: -20px;
    right: -20px;
    width: 40px;
    height: 40px;
    background: #fff;
    color: #000;
    border: none;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1001;
    `;

    closeBtn.addEventListener('click', closeModal);

    // Собираем модальное окно
    modalImageContainer.appendChild(modalImage);
    modal.appendChild(modalImageContainer);
    modal.appendChild(closeBtn)
    document.body.appendChild(modal);
}

// Функция открытия модального окна
function openModal(src) {

    const modalImg = document.getElementById('modal-img');
    modalImg.src = src;
    document.body.style.overflow = 'hidden'; // 🔒 Отключаем скролл
    document.body.style.height = '100vh';

    // Блокируем скролл и добавляем блюр к фону
    document.querySelectorAll('.container').forEach(container => {
        if (container.parentElement) {
            container.parentElement.style.setProperty('filter', 'blur(5px)');
        }
    });
    document.querySelector('.map').style.setProperty('filter', 'blur(5px)');

    // Показываем модальное окно
    setTimeout(() => {
        modal.style.opacity = '1';
        modal.style.visibility = 'visible';
    }, 10);
}

// Функция закрытия модального окна
function closeModal() {
    modal.style.opacity = '0';
    modal.style.visibility = 'hidden';

    // Возвращаем скролл и убираем блюр
    document.body.style.cssText = '';
    document.querySelectorAll('.container').forEach(container => {
        if (container.parentElement) {
            container.parentElement.style.removeProperty('filter');
        }
    });
    document.querySelector('.map').style.removeProperty('filter');
}

// Закрытие по клику на фон
modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        closeModal();
    }
});

// Добавляем обработчики клика на все изображения
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', function () {
        if (img.src.includes('images')) {
            openModal(this.src);
        }
    });
});
