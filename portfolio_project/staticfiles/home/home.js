
        function toggleLanguage() {
            const heroText = document.querySelector('.hero');
            const navLinks = document.querySelectorAll('.nav-links a');
            const langButton = document.querySelector('.language-toggle span');
            const title = document.querySelector('title');

            if (heroText.dataset.lang === 'en') {
                // Переключаем текст с английского на русский
                heroText.innerHTML = `<p>Привет, я Владимир 😊<br> Программист из России, увлеченный решением задач и созданием продуктов для B2B и B2C. Я full-stack разработчик, способный работать с любой стадии проекта до завершения. Среди моих проектов, работа с такими брендами как Esenia, SWAG и DryDry. Если у вас есть интересная задача и вы хотите работать вместе, давайте обсудим!</p>`;
                heroText.dataset.lang = 'ru';
                title.textContent = 'Владимир Цар';

                // Обновляем навигационные ссылки на русский
                navLinks[0].textContent = 'Обо мне';
                navLinks[1].textContent = 'Домой';
                navLinks[2].textContent = 'Связь';
                langButton.textContent = 'EN';
            } else {
                // Переключаем текст с русского на английский
                heroText.innerHTML = `<p>Hi, I'm Vladimir 😊<br> Programmer from Russia, passionate about solving problems and creating products for B2B and B2C. I am a full-stack developer capable of working from any stage of a project to completion. Among my projects, I have worked with brands like Esenia, SWAG, and DryDry. If you have an exciting challenge and want to work together, let's discuss it!</p>`;
                heroText.dataset.lang = 'en';
                title.textContent = 'Vladimir Tsar';

                // Обновляем навигационные ссылки на английский
                navLinks[0].textContent = 'About';
                navLinks[1].textContent = 'Home';
                navLinks[2].textContent = 'Contact';
                langButton.textContent = 'RU';
            }

            // Обновление активной ссылки
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.textContent.toLowerCase() === (document.title.toLowerCase() === 'portfolio' ? 'home' : 'домой')) {
                    link.classList.add('active');
                }
            });
        }

