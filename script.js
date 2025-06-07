// Телефон: дзвінок на мобілці, текст на ПК
const phoneBtn = document.querySelector('.floating-phone');
phoneBtn.addEventListener('click', () => {
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    window.location.href = 'tel:+380685669590';
  } else {
    alert('Наш номер: +38 068 566 95 90');
  }
});

// Отримуємо параметри з URL
const params = new URLSearchParams(window.location.search);
const city = params.get('city');
const query = params.get('q');

const cityContent = document.getElementById('city-content');

const cities = {
  kolomyia: "Ми працюємо у Коломиї — найкращі пропозиції для вашого дому!",
  yabluniv: "Прибираємо у Яблунові — швидко та якісно!",
  kosiv: "Офіси та квартири в Косові тепер завжди чисті!",
  yaremche: "Прибирання в Яремчі — комфорт і чистота у вашому домі!",
  nadvirna: "Надвірна — наш пріоритет. Замовляйте прибирання з нами!"
};

// Перевірка, чи запит стосується клінінгу та області
function isCleaningInRegion(q) {
  const qLower = q.toLowerCase();
  const hasCleaning = qLower.includes('клінінг');
  const hasRegion = qLower.includes('івано-франківська') || qLower.includes('іф') || qLower.includes('обл');
  return hasCleaning && hasRegion;
}

if (city && cities[city.toLowerCase()]) {
  cityContent.textContent = cities[city.toLowerCase()];
} else if (query) {
  if (isCleaningInRegion(query)) {
    // Показуємо всі міста для області
    cityContent.innerHTML = `
      Ми працюємо у всіх містах Івано-Франківської області:<br>
      - Коломия<br>
      - Яблунів<br>
      - Косів<br>
      - Яремче<br>
      - Надвірна
    `;
  } else {
    cityContent.textContent = `Результати пошуку за запитом: "${query}"`;
  }
} else {
  cityContent.textContent = 'Ми раді до вас приїхати';
}
