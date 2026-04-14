const partnerData = {
    mts: {
        title: 'МТС Прогрессоры',
        img: 'mts_promo.jpg',
        html: 'Главный партнер! МТС поддерживает интеллектуальные инициативы Томска. Приложение «Прогрессоры» — экосистема бонусов для активных горожан.<br><a href="https://progressors.ru" target="_blank">Перейти на сайт</a>',
    },
    jobs: {
        title: 'Mister Jobs',
        img: 'jobs_store.jpg',
        html: 'Торгово-сервисный центр по ремонту и продаже техники! Mr.Jobs предоставляет оборудование для трансляций.<br><a href="https://vk.com/club165712322" target="_blank">ВКонтакте</a> | <a href="https://t.me/misterjobs_ru" target="_blank">Telegram</a>',
    },
    gangster: {
        title: 'Gangster’s Sushi',
        img: 'sushi_promo.jpg',
        html: 'Доставка авторских роллов. К нашему турниру ребята организуют большую доставку!<br><a href="https://gangsta-sushi.ru" target="_blank">Заказать на сайте</a>',
    },
    bezumno: {
        title: 'БЕЗУМНО ШАУРМА',
        img: 'shaurma_promo.jpg',
        html: 'Самая сочная шаурма в городе. Поддержка финалистов!<br><a href="https://vk.com/club209601713" target="_blank">ВКонтакте</a>',
    },
    rvv: {
        title: '«Руки ВВерх!» Бар',
        img: 'rvv_promo.jpg',
        html: 'Это культовое место, совмещающее в себе бар, ресторан, диско-клуб, караоке и концертную площадку! К нашему турниру РукиВверх! Бар подготовил 3 подарочных сертификата на приятную сумму!.<br><a href="https://go.2gis.com/EaXvY" target="_blank">Построить маршрут</a>',
    },
    fabrika: {
        title: 'Кальянная «Фабрика»',
        img: 'fabrika_interior.jpg',
        html: 'Отдых и стиль в центре города. Победители нашего турнира получат сертификат на вкуснейший дымный кальян!<br><a href="https://vk.com/club87733396" target="_blank">Томск</a> | <a href="https://vk.com/club18435560" target="_blank">Новосибирск</a> | <a href="https://vk.com/club109633493" target="_blank">Шерегеш</a>',
    },
    bonjour: {
        title: 'Мастерская Bonjour',
        img: 'cups_promo.jpg',
        html: 'Стильная наградная продукция в наличии и под заказ! Промокод "Томск1604" на бесплатный макет.<br><a href="https://vk.com/bonjour_altai" target="_blank">ВКонтакте</a>',
    },
};

function openPartnerModal(id) {
    const item = partnerData[id];
    if (!item) return;
    document.getElementById('p-img').src = item.img;
    document.getElementById('p-title').innerText = item.title;
    document.getElementById('p-content').innerHTML = item.html;
    document.getElementById('modal-overlay').style.display = 'flex';
    document.getElementById('main-content').classList.add('blurred');
    document.body.classList.add('modal-open');
}

function closePartnerModal() {
    document.getElementById('modal-overlay').style.display = 'none';
    document.getElementById('main-content').classList.remove('blurred');
    document.body.classList.remove('modal-open');
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const eventDate = new Date('April 18, 2026 10:00:00').getTime();

function tickCountdown() {
    const d = eventDate - Date.now();
    if (d <= 0) return;
    document.getElementById('days').innerText = Math.floor(d / 86400000)
        .toString()
        .padStart(2, '0');
    document.getElementById('hours').innerText = Math.floor((d % 86400000) / 3600000)
        .toString()
        .padStart(2, '0');
    document.getElementById('minutes').innerText = Math.floor((d % 3600000) / 60000)
        .toString()
        .padStart(2, '0');
}

function onScrollBackToTop() {
    const btn = document.getElementById('backToTop');
    btn.style.display = window.pageYOffset > 500 ? 'flex' : 'none';
}

document.getElementById('backToTop').addEventListener('click', scrollToTop);
window.addEventListener('scroll', onScrollBackToTop);

document.getElementById('modal-overlay').addEventListener('click', closePartnerModal);
document.querySelector('.partner-info-box').addEventListener('click', (e) => e.stopPropagation());

document.querySelectorAll('.partner-item').forEach((el) => {
    el.addEventListener('click', () => openPartnerModal(el.dataset.partner));
});

document.querySelector('.map-wrapper').addEventListener('click', function () {
    this.classList.add('active');
});

document.addEventListener('click', (e) => {
    const mapWrap = document.querySelector('.map-wrapper');
    if (mapWrap && !mapWrap.contains(e.target)) {
        mapWrap.classList.remove('active');
    }
});

setInterval(tickCountdown, 1000);
tickCountdown();
