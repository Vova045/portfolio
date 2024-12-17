// Переменные для элементов на странице
const pageTitle = document.querySelector('title');
const navAbout = document.querySelector('.nav-about');
const navHome = document.querySelector('.nav-home');
const nameField = document.querySelector('.intro-text h2');
const professionField = document.querySelector('.intro-text p:first-of-type');
const introText = document.querySelector('.intro-text p:last-of-type');
const contactTitle = document.querySelector('.intro-contact h3');
const contactAddress = document.querySelector('.contact-item a[href*="maps"]');
const experienceTitle = document.querySelector('.experience-title');
const languageTitle = document.querySelector('.language-title');
const skillsTitle = document.querySelector('.skills-title');
const skillsText = document.querySelector('.skills-text');
const skillsSubText = document.querySelector('.skills-subtext');
const hobbiesTitle = document.querySelector('.skills-container + hr + h2');
const hobbiesText = document.querySelector('.skills-container + hr + h2 + div ul');
const footer = document.querySelector('footer p');
const langButton = document.querySelector('.language-toggle span');

// Функция переключения языка
function toggleLanguage() {
    const isEnglish = langButton.textContent === "RU";

    if (isEnglish) {
        // Устанавливаем русский текст
        pageTitle.textContent = "Обо мне";
        navAbout.textContent = "Обо мне";
        navHome.textContent = "Домой";
        nameField.textContent = "Владимир Цар";
        professionField.textContent = "Full-Stack Разработчик. Продукт Менеджер.";
        introText.textContent = "Я занимаюсь созданием эффективных и масштабируемых веб-приложений и решений, а также управляю продуктами. Мой опыт охватывает весь цикл разработки — от идеи до запуска. Я всегда открыт для интересных проектов и новых вызовов.";
        contactTitle.textContent = "Контакты";
        contactAddress.textContent = "Старый Оскол, Россия";
        contactAddress.href = "https://yandex.ru/maps/?text=Старый%20Оскол";
        experienceTitle.textContent = "Опыт";
        languageTitle.textContent = "Знание языков";
        skillsTitle.textContent = "Умения";
        skillsText.textContent = "Технические умения";
        skillsSubText.textContent = "Имею опыт работы с Bitrix, 1C и готов к изучению новых языков программирования и программ.";
        hobbiesTitle.textContent = "Хобби";
        hobbiesText.innerHTML = `
            <li><span>Спорт:</span> Бег на длинные дистанции, большой теннис, футбол</li>
            <li><span>Создание товаров:</span> Портреты, стикеры, изделия из дерева</li>
            <li><span>Домашние животные:</span> Стаффордширский терьер, миниатюрная немецкая овчарка</li>
        `;
        const languageLists = document.querySelectorAll('.language-list');
        languageLists[0].innerHTML = `
            <li>
                <span>Русский</span>
                Родной
            </li>
            <li>
                <span>Английский</span>
                B1
            </li>
        `;
        languageLists[1].innerHTML = `
            <li>
                <span>Немецкий</span>
                A2
            </li>
            <li>
                <span>Чешский</span>
                A1
            </li>
        `;
        footer.textContent = "© 2024 Владимир Цар";

        // Перевод секции опыта
        const experienceTexts = document.querySelectorAll('.experience-text');
        experienceTexts[0].innerHTML = `
            <strong>Студия Наружной Рекламы</strong> (2024)
            <br>Разработка приложения на Bitrix для управления рекламными кампаниями.
            <br>
            <span class="experience-subtext">
В рамках проекта был разработан и внедрен сайт на Django, размещенный на сервере Windows Server. Я занимался изучением бизнес-процессов компании, включая подсчет заказов, материалов и услуг. Одной из ключевых задач было создание калькулятора цен. Было необходимо разработать систему для учета технологических операций, включая расчеты времени и расходных материалов. Также разрабатывал систему для подсчета прибыли, накладных расходов и зарплаты сотрудников. Изначально все эти процессы велись в 1С, но задача заключалась в полном переходе на платформу Bitrix, что позволило значительно повысить скорость расчета заказов и упростить работу менеджеров. Теперь, при звонке клиента, менеджер может оперативно посчитать стоимость заказа прямо в Bitrix.            </span>
        `;
        experienceTexts[1].innerHTML = `
            <strong>Косметологическая компания DryDry</strong> (2022 - 2024)
            <br>Техническое обслуживание и оптимизация сайта для косметологической компании.
            <br>
            <span class="experience-subtext">
Я занимался доработкой и поддержкой существующего сайта, включая изменения логотипов, цветовой схемы и разработку адаптивной верстки. Создавал лендинги для продукции и верстал страницы из PSD-макетов. Внедрил слайдер с анимацией, улучшил фильтры поиска и добавил раздел новостей с интерактивной картой. Разрабатывал функционал на Django, решал проблемы с сервером и обеспечивал оптимизацию работы сайта. Подготовка графики для слайдера и визуальных элементов также входила в мои обязанности.
            </span>
        `;
        experienceTexts[2].innerHTML = `
            <strong>Табачная фабрика SWAG</strong> (2023 - 2024)
            <br>Разработка веб-приложения для управления процессами на табачной фабрике.
            <br>
            <span class="experience-subtext">
Я разработал сайт с нуля, включая сложные анимации, эффекты и уникальные интерактивные элементы. Реализовал параллакс-эффект, анимации для автомобиля, вывески и дождя, а также взаимодействие с пользователем через подсветку элементов и динамическую навигацию. Настроил формы отправки данных, внедрил возрастное ограничение и интегрировал Яндекс.Карту. Проект включает кроссбраузерную и адаптивную верстку, плавные переходы и использование базы данных MySQL.
            </span>
        `;
        experienceTexts[3].innerHTML = `
            <strong>Интерактивные панели Esenia</strong> (2024)
            <br>Разработка веб-приложения для управления услугами и клиентами Esenia.
            <br>
            <span class="experience-subtext">
Я создал уникальный сайт с интерактивным виртуальным городом, включающим улицы образования, развлечений и бизнеса. Реализованы видеопереходы и параллакс-эффекты для создания глубины и реалистичности. Также интегрировал мультимедийные элементы внутри зданий и разработал страницу каталога с характеристиками панелей. Использовал GIMP и Blender для создания анимаций и эффектов, таких как движение машин и дождь. Проект был успешно завершен с акцентом на кроссбраузерную верстку и высокое качество визуализации.
            </span>
        `;

        langButton.textContent = "EN";
        document.documentElement.lang = "ru";
    } else {
        // Устанавливаем английский текст
        pageTitle.textContent = "About Me";
        navAbout.textContent = "About Me";
        navHome.textContent = "Home";
        nameField.textContent = "Vladimir Tsar";
        professionField.textContent = "Full-Stack Developer. Product Manager.";
        introText.textContent = "I create efficient and scalable web applications and solutions, as well as manage products. My experience covers the entire development cycle—from idea to launch. I am always open to interesting projects and new challenges.";
        contactTitle.textContent = "Contacts";
        contactAddress.textContent = "Stary Oskol, Russia";
        contactAddress.href = "https://www.google.com/maps?q=Stary+Oskol";
        experienceTitle.textContent = "Experience";
        languageTitle.textContent = "Language skills";
        skillsTitle.textContent = "Skills";
        skillsText.textContent = "Technical skills";
        skillsSubText.textContent = "I have experience with Bitrix, 1C and am willing to learn new programming languages and programs.";
        hobbiesTitle.textContent = "Hobbies";
        hobbiesText.innerHTML = `
            <li><span>Sports:</span> Long-distance running, tennis, football</li>
            <li><span>Custom products:</span> Portraits, stickers, wooden crafts</li>
            <li><span>Pets:</span> Staffordshire Terrier, Miniature German Shepherd</li>
        `;
        const languageLists = document.querySelectorAll('.language-list');
        footer.textContent = "© 2024 Vladimir Tsar";
        languageLists[0].innerHTML = `
        <li>
            <span>Russian</span>
            Native
        </li>
        <li>
            <span>English</span>
            B1
        </li>
    `;
    languageLists[1].innerHTML = `
        <li>
            <span>German</span>
            A2
        </li>
        <li>
            <span>Czech</span>
            A1
        </li>
    `;
        // Перевод секции опыта
        const experienceTexts = document.querySelectorAll('.experience-text');
        experienceTexts[0].innerHTML = `
            <strong>Outdoor Advertising Studio</strong> (2024)
            <br>Developing a Bitrix application for managing advertising campaigns.
            <br>
            <span class="experience-subtext">
The project involved the development and implementation of a Django website hosted on a Windows Server. I was engaged in studying the company's business processes, including counting orders, materials and services. One of the key tasks was to create a price calculator. It was necessary to develop a system to record process operations, including calculations of time and consumables. Also developed a system to calculate profit, overhead and employee payroll. Initially, all these processes were conducted in 1C, but the task was to completely switch to the Bitrix platform, which significantly increased the speed of calculating orders and simplified the work of managers. Now, when a client calls, the manager can quickly calculate the cost of an order directly in Bitrix.
         </span>
        `;
        experienceTexts[1].innerHTML = `
            <strong>Cosmetics Company DryDry</strong> (2022 - 2024)
            <br>Technical support and site optimization for the company.
            <br>
            <span class="experience-subtext">
I have been involved in tweaking and maintaining an existing website, including logo changes, color schemes, and responsive layout development. Created product lendings and layout pages from PSD layouts. Implemented a slider with animations, improved search filters and added a news section with an interactive map. Developed functionality on Django, solved server problems and ensured optimization of the site. Preparing graphics for the slider and visual elements was also part of my duties.
            </span>
        `;
        experienceTexts[2].innerHTML = `
            <strong>Tobacco Factory SWAG</strong> (2023 - 2024)
            <br>Developing a web application to manage processes at the factory.
            <br>
            <span class="experience-subtext">
I designed the site from the ground up, including complex animations, effects and unique interactive elements. I implemented parallax effect, animations for car, signage and rain, as well as user interaction through highlighting elements and dynamic navigation. I customized data submission forms, implemented age limit and integrated Yandex.Map. The project includes cross-browser and adaptive layout, smooth transitions and use of MySQL database.
            </span>
        `;
        experienceTexts[3].innerHTML = `
            <strong>Interactive Panels Esenia</strong> (2024)
            <br>Developing a web app for managing Esenia services and clients.
            <br>
            <span class="experience-subtext">
I created a unique website with an interactive virtual city including education, entertainment and business streets. Implemented video transitions and parallax effects to create depth and realism. Also integrated multimedia elements within the buildings and developed a catalog page with panel specifications. Utilized GIMP and Blender to create animations and effects such as car movement and rain. The project was successfully completed with a focus on cross-browser layout and high quality visualization.
            </span>
        `;

        langButton.textContent = "RU";
        document.documentElement.lang = "en";
    }
}
