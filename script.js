// Данные продуктов на казахском
const productsData = {
    1: {
        name: "Қарқынды ылғалдандыратын крем",
        price: "4 500 ₸",
        description: "Құрғақ теріні терең ылғалдандырып, қоректендіреді, гидролипидтік қорғанышты қалпына келтіреді. Гиалурон қышқылы мен керамидтерді қамтиды.",
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    2: {
        name: "Қоректік серум",
        price: "6 200 ₸",
        description: "Терінің серпімділігі мен иілгіштігін қалпына келтіруге арналған бай қоректік заттарға бай серум.",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    3: {
        name: "Жұмсақ тазалағыш",
        price: "3 800 ₸",
        description: "Құрғатпай жұмсақ тазалау. Сезімтал және құрғақ теріге жақсы сәйкес келеді.",
        image: "https://images.unsplash.com/photo-1631729371254-42c2892fbc5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    4: {
        name: "Матты крем-гель",
        price: "4 800 ₸",
        description: "Күні бойы майлы жылтырауды бақылайды, теріні маттаңдырып, кеуектерді тарылтады.",
        image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    5: {
        name: "Кеуектерді тарылтатын серум",
        price: "5 500 ₸",
        description: "Кеңейген кеуектермен тиімді күреседі және май бездерінің жұмысын реттейді.",
        image: "https://images.unsplash.com/photo-1629196893363-28c68f061b78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    6: {
        name: "Тазалайтын сазы маскасы",
        price: "3 200 ₸",
        description: "Кеуектерді терең тазалайды, артық майды сіңіреді және қара нүктелердің пайда болуына жол бермейді.",
        image: "https://images.unsplash.com/photo-1556228579-4a6cda3de69c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    7: {
        name: "Теңгергіш тоник",
        price: "3 500 ₸",
        description: "Терінің pH балансын қалпына келтіреді, құрғақ аймақтарды ылғалдандырып, майлы аймақтарды маттаңдырады.",
        image: "https://images.unsplash.com/photo-1590418606746-018840f9cd0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    8: {
        name: "Ылғалдандыратын гель",
        price: "4 200 ₸",
        description: "Жеңіл гель құрылымы жабысқақ сезімсіз оңтайлы ылғалдандыруды қамтамасыз етеді.",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    9: {
        name: "Кешенді күтім",
        price: "7 800 ₸",
        description: "Аралас теріге толыққанды күтім жинағы: тазалау, тоникалау, ылғалдандыру.",
        image: "https://images.unsplash.com/photo-1570194065650-2f276eef1c18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
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
        console.log('Кнопка нажата:', btn.getAttribute('data-category'));
        
        // Убираем активный класс у всех кнопок и секций
        categoryBtns.forEach(b => b.classList.remove('active'));
        productSections.forEach(section => section.classList.remove('active'));
        
        // Добавляем активный класс текущей кнопке и соответствующей секции
        btn.classList.add('active');
        const category = btn.getAttribute('data-category');
        const targetSection = document.getElementById(category);
        
        if (targetSection) {
            targetSection.classList.add('active');
            console.log('Показана секция:', category);
        } else {
            console.error('Секция не найдена:', category);
        }
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
            console.log('Открыт продукт:', product.name);
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
    
    // Загрузка темы из localStorage
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        changeTheme(savedTheme);
    }
    
    console.log('Сайт успешно загружен!');
});

// Функция смены темы
function changeTheme(theme) {
    document.body.className = theme + '-theme';
    localStorage.setItem('selectedTheme', theme);
    console.log('Тема изменена на:', theme);
}

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

// Инициализация при загрузке
console.log('Косметикалық дүкен жүктелді!');
console.log('Әзірлеушілер:');
console.log('- Әбдіғапбар Ару: HTML & CSS');
console.log('- Елубай Еркежан: JavaScript & функционалдық');