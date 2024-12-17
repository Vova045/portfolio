function toggleLanguage() {
    const langElements = document.querySelectorAll('[data-lang]');
    const navLinks = document.querySelectorAll('.nav-links a');
    const langButton = document.querySelector('.language-toggle span');
    const title = document.querySelector('title');

    langElements.forEach((element) => {
        if (element.dataset.lang === 'en') {
            // Переключаем с английского на русский
            element.dataset.lang = 'ru';
        } else {
            // Переключаем с русского на английский
            element.dataset.lang = 'en';
        }
    });

    // Обновляем тексты
    if (langElements[0].dataset.lang === 'en') {
        document.querySelector('.hero-title').textContent = 'About Me';
        document.querySelector('.hero-text').innerHTML = `
            I am Alexander Merkushev, a passionate software engineer with over 10 years of experience in software development.
            I specialize in building scalable, reliable, and efficient software systems, as well as mentoring aspiring developers.
        `;
        document.querySelector('.experience-title').textContent = 'Experience';
        document.querySelector('.experience-text').innerHTML = `
            <strong>Lead Software Engineer at TechCorp</strong> (2018 - Present)
            <br>Leading a team of developers to create innovative software solutions.
        `;
        document.querySelector('.education-title').textContent = 'Education';
        document.querySelector('.education-text').innerHTML = `
            <strong>Master's in Computer Science</strong> - State University (2011 - 2013)
        `;
        document.querySelector('.contact-title').textContent = 'Contact';
        document.querySelector('.contact-text').innerHTML = `
            Email: <a href="mailto:alexander.merkushev@example.com" style="color: #5DADE2;">alexander.merkushev@example.com</a>
        `;
        langButton.textContent = 'RU';
        title.textContent = 'Alexander Merkushev';
    } else {
        document.querySelector('.hero-title').textContent = 'Обо мне';
        document.querySelector('.hero-text').innerHTML = `
            Я Александр Меркулев, увлечённый инженер-программист с более чем 10-летним опытом в разработке программного обеспечения.
            Я специализируюсь на создании масштабируемых, надёжных и эффективных программных систем, а также на наставничестве для начинающих разработчиков.
        `;
        document.querySelector('.experience-title').textContent = 'Опыт';
        document.querySelector('.experience-text').innerHTML = `
            <strong>Ведущий инженер-программист в TechCorp</strong> (2018 - настоящее время)
            <br>Руководство командой разработчиков для создания инновационных программных решений.
        `;
        document.querySelector('.education-title').textContent = 'Образование';
        document.querySelector('.education-text').innerHTML = `
            <strong>Магистр в области компьютерных наук</strong> - Государственный университет (2011 - 2013)
        `;
        document.querySelector('.contact-title').textContent = 'Контакт';
        document.querySelector('.contact-text').innerHTML = `
            Email: <a href="mailto:alexander.merkushev@example.com" style="color: #5DADE2;">alexander.merkushev@example.com</a>
        `;
        langButton.textContent = 'EN';
        title.textContent = 'Александр Меркулев';
    }

    // Обновление активной ссылки
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.textContent.toLowerCase() === (document.title.toLowerCase() === 'portfolio' ? 'home' : 'домой')) {
            link.classList.add('active');
        }
    });
}