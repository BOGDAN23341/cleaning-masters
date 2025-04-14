// Анімація при скролі
const animatedItems = document.querySelectorAll('.fade-in, .fade-in-up');

function checkVisibility() {
  animatedItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

// Телефон: дзвінок на мобілці, текст на ПК
const phoneBtn = document.getElementById('phone-btn');
phoneBtn.addEventListener('click', () => {
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    // Мобільний пристрій
    window.location.href = 'tel:+380123456789';
  } else {
    // ПК
    alert('Наш номер: +380685669590');
  }
});

// Отримуємо параметри з URL (наприклад, ?city=kolomyia)
const params = new URLSearchParams(window.location.search);
const city = params.get('city'); // Отримуємо значення city з URL
const query = params.get('q'); // Отримуємо значення q (пошуковий запит)

// Динамічно змінюємо контент залежно від міста або пошукового запиту
const titleElement = document.getElementById('title');
const descriptionElement = document.getElementById('description');
const cityContent = document.getElementById('city-content');

// Обробка значень для кожного міста
if (city) {
  if (city === 'kolomyia') {
    titleElement.innerText = 'Клінінг в Коломиї';
    descriptionElement.innerText = 'Професійне прибирання квартир, офісів та будинків у Коломиї.';
    cityContent.innerHTML = '<p>Ми надаємо клінінгові послуги в Коломиї. Чистота гарантована!</p>';
  } else if (city === 'yabluniv') {
    titleElement.innerText = 'Клінінг в Яблунові';
    descriptionElement.innerText = 'Швидке і якісне прибирання в Яблунові.';
    cityContent.innerHTML = '<p>Наші спеціалісти забезпечать порядок у вашому домі чи офісі в Яблунові.</p>';
  } else if (city === 'kosiv') {
    titleElement.innerText = 'Клінінг в Косові';
    descriptionElement.innerText = 'Прибирання в Косові для всіх типів приміщень.';
    cityContent.innerHTML = '<p>Клінінг квартир, будинків та офісів у Косові — з нами ви можете бути впевнені у чистоті.</p>';
  } else if (city === 'yaremche') {
    titleElement.innerText = 'Клінінг в Яремче';
    descriptionElement.innerText = 'Догляд за вашим помешканням у Яремче.';
    cityContent.innerHTML = '<p>Ми надаємо послуги з прибирання квартир та офісів в Яремче.</p>';
  } else if (city === 'nadvirna') {
    titleElement.innerText = 'Клінінг в Надвірній';
    descriptionElement.innerText = 'Клінінгові послуги в Надвірній для будь-якого типу приміщень.';
    cityContent.innerHTML = '<p>Надаємо професійну допомогу у прибиранні квартир та офісів в Надвірній.</p>';
  } else {
    // Якщо місто не вказано або неправильний параметр
    titleElement.innerText = 'Виберіть місто';
    descriptionElement.innerText = 'Виберіть місто для перегляду наших послуг.';
    cityContent.innerHTML = '<p>Для перегляду інформації про клінінг виберіть місто з меню вище.</p>';
  }
}

// Обробка пошукового запиту для "cleaning masters"
if (query) {
  if (query.toLowerCase().includes('cleaning masters')) {
    titleElement.innerText = 'Cleaning Masters — Професійний клінінг';
    descriptionElement.innerText = 'Cleaning Masters пропонує послуги клінінгу у вашому місті. Забезпечуємо чистоту, швидкість і якість!';
    cityContent.innerHTML = '<p>Ми надаємо послуги клінінгу в кількох містах. Для детальнішої інформації виберіть місто.</p>';
  }
}

// Додатково, додаємо клас show до футера після завантаження сторінки
window.addEventListener('load', () => {
  document.querySelector('.footer').classList.add('show');
});
