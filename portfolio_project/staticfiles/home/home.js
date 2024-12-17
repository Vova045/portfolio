function toggleLanguage() {
    const heroText = document.querySelector('.hero');
    const navLinks = document.querySelectorAll('.nav-links a');
    const langButton = document.querySelector('.language-toggle span');
    const title = document.querySelector('title');

    // Переменные для проектов
    const projectEsenia = document.querySelector('#esenia');
    const projectSwag = document.querySelector('#swag');
    const projectDryDry = document.querySelector('#drydry');

    if (heroText.dataset.lang === 'en') {
        // Переключаем текст с английского на русский
        heroText.innerHTML = `<p>Привет, я Владимир 😊<br> Программист из России, увлеченный решением задач и созданием продуктов для B2B и B2C. Я full-stack разработчик, способный работать с любой стадии проекта до завершения.
        Среди моих проектов, работа с такими брендами как <a href="#esenia">Esenia</a>, <a href="#swag">SWAG</a> и <a href="#drydry">DryDry</a>.
        Про мои умения и увлечения вы можете прочитать <a style="text-decoration: none;" href="/about">здесь</a>.
        Если у вас есть интересная задача и вы хотите работать вместе, давайте обсудим!</p>`;
        heroText.dataset.lang = 'ru';
        title.textContent = 'Владимир Цар';

        // Обновляем тексты для проектов
        projectEsenia.querySelector('h3').textContent = 'Esenia';
        projectEsenia.querySelector('.opacity07').textContent = 'Веб-приложение для демонстрации интерактивных панелей';

        projectSwag.querySelector('h3').textContent = 'SWAG';
        projectSwag.querySelector('.opacity07').textContent = 'Веб-приложение для презентации жевательного табака';

        projectDryDry.querySelector('h3').textContent = 'DRYDRY';
        projectDryDry.querySelector('.opacity07').textContent = 'Поддержка сайта по продаже косметических средств';

        // Обновляем навигационные ссылки на русский
        navLinks[0].textContent = 'Обо мне';
        navLinks[1].textContent = 'Дом';
        langButton.textContent = 'EN';
    } else {
        // Переключаем текст с русского на английский
        heroText.innerHTML = `<p>Hi, I'm Vladimir 😊<br> Programmer from Russia, passionate about solving problems and creating products for B2B and B2C. I am a full-stack developer capable of working from any stage of a project to completion. Among my projects, I have worked with brands like <a href="#esenia">Esenia</a>, <a href="#swag">SWAG</a> and <a href="#drydry">DryDry</a>.
        You can learn more about my skills and hobbies <a style="text-decoration: none;" href="/about">here</a>.
        If you have an exciting challenge and want to work together, let's discuss it!</p>`;
        heroText.dataset.lang = 'en';
        title.textContent = 'Vladimir Tsar';

        // Обновляем тексты для проектов
        projectEsenia.querySelector('h3').textContent = 'Esenia';
        projectEsenia.querySelector('.opacity07').textContent = 'Web application for demonstrating interactive panels';

        projectSwag.querySelector('h3').textContent = 'SWAG';
        projectSwag.querySelector('.opacity07').textContent = 'Web application for presenting chewing tobacco';

        projectDryDry.querySelector('h3').textContent = 'DRYDRY';
        projectDryDry.querySelector('.opacity07').textContent = 'Website support for selling cosmetics';

        // Обновляем навигационные ссылки на английский
        navLinks[0].textContent = 'About';
        navLinks[1].textContent = 'Home';
        langButton.textContent = 'RU';
    }

    // Обновление активной ссылки
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Активируем нужную ссылку в зависимости от языка
    const activeLinkText = heroText.dataset.lang === 'en' ? 'Home' : 'Дом';
    navLinks.forEach(link => {
        if (link.textContent === activeLinkText) {
            link.classList.add('active');
        }
    });
}
