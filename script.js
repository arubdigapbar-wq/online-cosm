// Данные продуктов на казахском
const productsData = {
    1: {
        name: "Қарқынды ылғалдандыратын крем",
        price: "4 500 ₸",
        description: "Құрғақ теріні терең ылғалдандырып, қоректендіреді, гидролипидтік қорғанышты қалпына келтіреді. Гиалурон қышқылы мен керамидтерді қамтиды.",
        image: "images/products/moisturizing-cream.jpg"
    },
    2: {
        name: "Қоректік серум",
        price: "6 200 ₸",
        description: "Терінің серпімділігі мен иілгіштігін қалпына келтіруге арналған бай қоректік заттарға бай серум.",
        image: "images/products/nourishing-serum.jpg"
    },
    3: {
        name: "Жұмсақ тазалағыш",
        price: "3 800 ₸",
        description: "Құрғатпай жұмсақ тазалау. Сезімтал және құрғақ теріге жақсы сәйкес келеді.",
        image: "images/products/gentle-cleanser.jpg"
    },
    4: {
        name: "Матты крем-гель",
        price: "4 800 ₸",
        description: "Күні бойы майлы жылтырауды бақылайды, теріні маттаңдырып, кеуектерді тарылтады.",
        image: "images/products/matt-cream.jpg"
    },
    5: {
        name: "Кеуектерді тарылтатын серум",
        price: "5 500 ₸",
        description: "Кеңейген кеуектермен тиімді күреседі және май бездерінің жұмысын реттейді.",
        image: "images/products/pore-serum.jpg"
    },
    6: {
        name: "Тазалайтын сазы маскасы",
        price: "3 200 ₸",
        description: "Кеуектерді терең тазалайды, артық майды сіңіреді және қара нүктелердің пайда болуына жол бермейді.",
        image: "images/products/clay-mask.jpg"
    },
    7: {
        name: "Теңгергіш тоник",
        price: "3 500 ₸",
        description: "Терінің pH балансын қалпына келтіреді, құрғақ аймақтарды ылғалдандырып, майлы аймақтарды маттаңдырады.",
        image: "images/products/balancing-toner.jpg"
    },
    8: {
        name: "Ылғалдандыратын гель",
        price: "4 200 ₸",
        description: "Жеңіл гель құрылымы жабысқақ сезімсіз оңтайлы ылғалдандыруды қамтамасыз етеді.",
        image: "images/products/hydra-gel.jpg"
    },
    9: {
        name: "Кешенді күтім",
        price: "7 800 ₸",
        description: "Аралас теріге толыққанды күтім жинағы: тазалау, тоникалау, ылғалдандыру.",
        image: "images/products/complex-care.jpg"
    }
};

// Элементы DOM
const categoryBtns = document.querySelectorAll('.category-btn');
const productSections = document.querySelectorAll('.products-section');
const productCards = document.querySelectorAll('.product-card');
const modal = document.getElementById('productModal');
const closeModal = document.querySelector('.close');
const avatar = document.getElementById('userAvatar');
const avatarInput = document.getElementById('avatarInput');
const balanceElement = document.getElementById('balance');

// Смена категорий
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Убираем активный класс у всех кнопок и секций
        categoryBtns.forEach(b => b.classList.remove('active'));
        productSections.forEach(section => section.classList.remove('active'));
        
        // Добавляем активный класс текущей кнопке и соответствующей секции
        btn.classList.add('active');
        const category = btn.getAttribute('data-category');
        document.getElementById(category).classList.add('active');
    });
});

// Открытие модального окна продукта
productCards.forEach(card => {
    card.addEventListener('click', () => {
        const productId = card.getAttribute('data-id');
        const product = productsData[productId];
        
        if (product) {
            document.getElementById('modalTitle').textContent = product.name;
            document.getElementById('modalPrice').textContent = product.price;
            document.getElementById('modalDescription').textContent = product.description;
            document.getElementById('modalImg').src = product.image;
            document.getElementById('modalImg').alt = product.name;
            
            modal.style.display = 'block';
        }
    });
});

// Закрытие модального окна
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Смена аватарки
avatar.addEventListener('click', () => {
    avatarInput.click();
});

avatarInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            avatar.src = e.target.result;
            // Сохраняем в localStorage
            localStorage.setItem('userAvatar', e.target.result);
        };
        reader.readAsDataURL(file);
    }
});

// Загрузка аватарки из localStorage при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
    const savedAvatar = localStorage.getItem('userAvatar');
    if (savedAvatar) {
        avatar.src = savedAvatar;
    }
    
    const savedBalance = localStorage.getItem('userBalance');
    if (savedBalance) {
        balanceElement.textContent = savedBalance;
    }
});

// Анимации при наведении на карточки разработчиков
const developerCards = document.querySelectorAll('.developer-card');
developerCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.05)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Функция смены темы (цвета фона)
function changeTheme(theme) {
    document.body.className = theme + '-theme';
    localStorage.setItem('selectedTheme', theme);
}

// Загрузка темы из localStorage
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        changeTheme(savedTheme);
    }
});

// Покупка продукта (уменьшение баланса)
document.querySelector('.buy-btn').addEventListener('click', function() {
    const priceText = document.getElementById('modalPrice').textContent;
    const price = parseInt(priceText.replace(/\s/g, '').replace('₸', ''));
    let currentBalance = parseInt(balanceElement.textContent.replace(/\s/g, '').replace('₸', ''));
    
    if (currentBalance >= price) {
        currentBalance -= price;
        balanceElement.textContent = currentBalance.toLocaleString('ru-RU') + ' ₸';
        localStorage.setItem('userBalance', balanceElement.textContent);
        
        alert('Сатып алу сәтті аяқталды!');
        modal.style.display = 'none';
    } else {
        alert('Баланста қаражатыңыз жеткіліксіз!');
    }
});

// Добавляем кнопки для смены темы в хедер
const themeButtons = `
    <div class="theme-buttons">
        <button onclick="changeTheme('light')" class="theme-btn light">Ашық</button>
        <button onclick="changeTheme('dark')" class="theme-btn dark">Қою</button>
        <button onclick="changeTheme('pink')" class="theme-btn pink">Қызғылт</button>
        <button onclick="changeTheme('blue')" class="theme-btn blue">Көк</button>
    </div>
`;

document.querySelector('.profile-section').insertAdjacentHTML('beforeend', themeButtons);

// Стили для кнопок тем (добавляем в CSS через JavaScript)
const themeStyles = `
.theme-buttons {
    display: flex;
    gap: 10px;
    margin-left: 20px;
}

.theme-btn {
    padding: 5px 10px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    font-size: 0.8rem;
    transition: all 0.3s ease;
}

.theme-btn.light { background: #f8f8f8; color: #333; }
.theme-btn.dark { background: #333; color: white; }
.theme-btn.pink { background: #ff69b4; color: white; }
.theme-btn.blue { background: #6495ed; color: white; }

.theme-btn:hover {
    transform: scale(1.1);
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = themeStyles;
document.head.appendChild(styleSheet);

// Инициализация при загрузке
console.log('Косметикалық дүкен жүктелді!');
console.log('Әзірлеушілер:');
console.log('- Әбдіғапбар Ару: HTML & CSS');
console.log('- Елубай Еркежан: JavaScript & функционалдық');