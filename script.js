// Обработка кнопок
document.querySelectorAll('.work__card-button').forEach((button) => {
  button.addEventListener('click', function () {
    const parentCard =
      this.closest('.work__build-card') || this.closest('.advantages__block');
    if (!parentCard) return;

    const hiddenText =
      parentCard.querySelector('.work__hidden') ||
      parentCard.querySelector('.advantages__hidden');
    const isVisible = this.getAttribute('data-visible') === 'true';

    if (hiddenText) {
      hiddenText.setAttribute('data-visible', isVisible ? 'false' : 'true');
      this.setAttribute('data-visible', isVisible ? 'false' : 'true');
      parentCard.setAttribute('data-expanded', isVisible ? 'false' : 'true');
    }
  });
});

// Слайдер
document.addEventListener('DOMContentLoaded', () => {
  const sliderImages = document.querySelectorAll('.product__slider-image');
  const dots = document.querySelectorAll('.product__dot');
  const prevButton = document.querySelector('.product__slider-button.prev');
  const nextButton = document.querySelector('.product__slider-button.next');
  let currentIndex = 0;

  function updateSlider(index) {
    const offsetMultiplier = 145; // Ширина боковой картинки + половина центральной
    sliderImages.forEach((image, i) => {
      const offset = (i - index) * offsetMultiplier;

      const scale = i === index ? 1 : 0.98;
      const translation =
        i === index ? offset : i < index ? offset - 27.5 : offset + 27.5;

      image.classList.toggle('active', i === index);
      image.style.transform = `translateX(${translation}px) scale(${scale})`;
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  function showNextImage() {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    updateSlider(currentIndex);
  }

  function showPrevImage() {
    currentIndex =
      (currentIndex - 1 + sliderImages.length) % sliderImages.length;
    updateSlider(currentIndex);
  }

  prevButton.addEventListener('click', showPrevImage);
  nextButton.addEventListener('click', showNextImage);

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateSlider(currentIndex);
    });
  });

  // Инициализация слайдера
  updateSlider(currentIndex);
});

// Слайдер карточек
document.addEventListener('DOMContentLoaded', () => {
  const sliderInner = document.querySelector('.career__slider-inner');
  const sliderCards = document.querySelectorAll('.career__card');
  const prevButton = document.querySelector('.career__slider-button.prev');
  const nextButton = document.querySelector('.career__slider-button.next');
  let currentIndex = 0;

  function updateSlider(index) {
    const cardWidth = sliderCards[0].offsetWidth;
    const offset = -index * cardWidth;
    sliderInner.style.transform = `translateX(${offset}px)`;
  }

  function showNextCard() {
    currentIndex = (currentIndex + 1) % sliderCards.length;
    updateSlider(currentIndex);
  }

  function showPrevCard() {
    currentIndex = (currentIndex - 1 + sliderCards.length) % sliderCards.length;
    updateSlider(currentIndex);
  }

  prevButton.addEventListener('click', showPrevCard);
  nextButton.addEventListener('click', showNextCard);

  // Инициализация слайдера
  updateSlider(currentIndex);
});

// Попап
document.addEventListener('DOMContentLoaded', function () {
  const openPopupButtons = document.querySelectorAll('.open-popup');
  const closePopupButton = document.querySelector('.popup .close-button');
  const popup = document.querySelector('.popup');

  openPopupButtons.forEach((button) => {
    button.addEventListener('click', () => {
      popup.style.display = 'flex';
    });
  });

  closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });
});


// Загрузка файла
document.addEventListener('DOMContentLoaded', function() {
    const uploadButton = document.querySelector('.popup__form-upload-button');
    const fileInput = document.querySelector('.popup__form-input-file');

    uploadButton.addEventListener('click', function() {
        fileInput.click();
    });
});


// Отправка формы и показ сообщения
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('popupForm');
    const message = document.getElementById('formMessage');
    const closeButton = document.querySelector('.popup__form-message-button-main');
    const popup = document.querySelector('.popup');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        message.style.display = 'block';
        form.style.display = 'none';
    });

    closeButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });
});

