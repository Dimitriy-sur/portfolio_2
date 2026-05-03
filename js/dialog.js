document.addEventListener('DOMContentLoaded', function () {
    const dialog = document.getElementsByTagName("dialog")[0];

    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nameValue = document.querySelector('#name').value.trim();
        const numberTelValue = document.querySelector('#number-tel').value.trim();

        const existingError = form.querySelector('.error');

        if (existingError) {
            existingError.remove();
        }

        function validatePhone(phone) {
            const phonePattern = /^\+?[0-9]{10,11}$/;
            return phonePattern.test(phone);
        }

        function validateName(name) {
            return name.length >= 2;
        }

        const isNameValid = validateName(nameValue);
        const isPhoneValid = validatePhone(numberTelValue);

        if (isNameValid && isPhoneValid) {
            dialog.showModal();
            form.reset(); // Очищаем форму
        } else {
            // Если валидация не пройдена — показываем ошибку
            const error = document.createElement('span');
            error.textContent = 'Некорректный ввод: проверьте имя (минимум 2 символа) и номер телефона (10–11 цифр, можно с +)';
            error.style.color = 'red';
            error.style.fontSize = '12px';
            error.style.position = 'absolute';
            error.classList.add('error');
            form.appendChild(error); // Добавляем в конец формы
        }

        console.log(`Имя = ${nameValue} \nНомер телефона = ${numberTelValue}`)

    });

});


