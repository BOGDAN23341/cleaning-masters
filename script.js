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
    alert('Наш номер: +38 (012) 345-67-89');
  }
});
