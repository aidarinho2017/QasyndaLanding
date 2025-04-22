
document.addEventListener("DOMContentLoaded", function () {
    const aboutCards = document.querySelectorAll(".about-card");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    aboutCards.forEach(card => {
        observer.observe(card);
    });

    // Анимация новостей
    const newsCards = document.querySelectorAll(".news-card");
    newsCards.forEach(card => observer.observe(card));

    const langButtons = document.querySelectorAll(".lang-switch button");

    const textElements = {
        "hero-title": {
            "ru": "Найди подработку быстро и легко!",
            "en": "Find a job quickly and easily!"
        },
        "hero-desc": {
            "ru": "Мы поможем тебе найти подработку по твоим навыкам и свободному времени. Оставь заявку и начни зарабатывать уже сегодня!",
            "en": "We will help you find a part-time job based on your skills and free time. Apply now and start earning today!"
        },
        "cta": {
            "ru": "Оставить заявку",
            "en": "Apply Now"
        },
        "main": { "ru": "Главная", "en": "Main" },
        "we": { "ru": "О нас", "en": "About us" },
        "news": { "ru": "Новости", "en": "News" },
        "jobs": { "ru": "Виды подработки", "en": "Job types" },
        "team": { "ru": "Основатели", "en": "Team" },
        "contacts": { "ru": "Контакты", "en": "Contacts" },
        "about-title": { "ru": "О нас", "en": "About Us" },

        "about-point1": { "ru": "Быстрый поиск", "en": "Quick Search" },
        "about-desc1": { "ru": "Находите подработку рядом с собой по геолокации.", "en": "Find part-time jobs nearby using geolocation." },
        "about-point2": { "ru": "Легкие задания", "en": "Easy Tasks" },
        "about-desc2": { "ru": "Простые и доступные задачи без сложных навыков.", "en": "Simple and accessible tasks without complex skills." },
        "about-point3": { "ru": "Свободный график", "en": "Flexible Schedule" },
        "about-desc3": { "ru": "Выбирайте удобное время для работы.", "en": "Choose a convenient time to work." },
        "about-point4": { "ru": "Моментальный заработок", "en": "Instant Earnings" },
        "about-desc4": { "ru": "Выполняйте задания и сразу получайте оплату.", "en": "Complete tasks and get paid instantly." },

        "jobs-title": { "ru": "Виды подработки", "en": "Types of Jobs" },
        "job1": { "ru": "Уборка – помощь по дому, вынос мусора", "en": "Cleaning – Household help, trash removal" },
        "job2": { "ru": "Доставка – курьерские поручения, покупки", "en": "Delivery – Courier services, shopping" },
        "job3": { "ru": "Ремонт – починка техники, сборка мебели", "en": "Repairs – Appliance fixing, furniture assembly" },
        "job4": { "ru": "Помощь с питомцами – выгул собак, кормление", "en": "Pet care – Dog walking, feeding" },
        "job5": { "ru": "Учебная помощь – написание конспектов, репетиторство", "en": "Tutoring – Note writing, tutoring" },
        "team-title": { "ru": "Основатели", "en": "Founders" },
        
        "team1": {
            "ru": "Вдохновитель Qasynda и человек, который верит, что найти подработку должно быть так же просто, как заказать кофе.",
            "en": "The visionary behind Qasynda who believes finding a job should be as easy as ordering coffee."
        },
        "team2": {
            "ru": "Мастер общения и продвижения, который знает, как сделать так, чтобы о Qasynda говорили, доверяли и рекомендовали.",
            "en": "A communication and PR expert who ensures people talk about, trust, and recommend Qasynda."
        },
        "team3": {
            "ru": "Следит за тем, чтобы платформа была удобной, понятной и действительно помогала людям находить подработку быстро и легко.",
            "en": "Ensures the platform is user-friendly, easy to understand, and genuinely helps people find jobs quickly."
        },
        "team4": {
            "ru": "Человек, который превращает идеи в реальность, создавая технологию, делающую Qasynda быстрой и надежной.",
            "en": "Turns ideas into reality by building the technology that makes Qasynda fast and reliable."
        },
        "contact-title": { "ru": "Свяжитесь с нами", "en": "Contact Us" },
        "event-digital": {
            "ru": "Международный цифровой форум, где обсуждали будущее цифровой экономики.",
            "en": "An international digital forum where the future of the digital economy was discussed."
        },
        "event-ai": {
            "ru": "Крупнейшая выставка по искусственному интеллекту в регионе.",
            "en": "The largest artificial intelligence exhibition in the region."
        },
        "event-kolesa": {
            "ru": "Мощное IT-мероприятие для студентов, где мы обменялись опытом с ведущими разработчиками и стартаперами.",
            "en": "A powerful IT event for students where we exchanged experiences with top developers and startups."
        },
        "event-ton": {
            "ru": "Уникальная встреча с сообществом Web3-разработчиков и предпринимателей.",
            "en": "A unique meetup with the Web3 developer and entrepreneur community."
        },

        // Новости
        "news-title": { "ru": "Новости", "en": "News" },
        "news-success": { "ru": "Успех команды", "en": "Team success" },
        "news-hult": {
            "ru": "Qasynda на Hult Prize KBTU",
            "en": "Qasynda at Hult Prize KBTU"
        },
        "news-hult-desc": {
            "ru": "3 место среди стартапов КБТУ! Представили Qasynda на Hult Prize On-Campus и вошли в топ-3 лучших команд. Настоящая битва идей и сильный апгрейд для нас!",
            "en": "3rd place among KBTU startups! Presented Qasynda at Hult Prize On-Campus and made it to the top 3. A true battle of ideas and a great upgrade for us!"
        },
        "news-crack": {
            "ru": "2 место на Crack It",
            "en": "2nd place at Crack It"
        },
        "news-crack-desc": {
            "ru": "Международный кейс-чемпионат среди студентов и школьников. Наша команда предложила эффективное решение бизнес-задачи и уверенно представила его перед жюри.",
            "en": "An international case championship for students. Our team proposed an effective business solution and confidently presented it to the jury."
        },
        "news-digital": {
            "ru": "Мы в центре цифровых событий",
            "en": "We're at the center of digital events"
        },
        "news-final": {
            "ru": "Qasynda всегда там, где технологии, идеи и рост!",
            "en": "Qasynda is always where technology, ideas, and growth are!"
        }
    };

    window.setLanguage = function(lang) {
        localStorage.setItem("language", lang);
        Object.keys(textElements).forEach(key => {
            const el = document.querySelector(`[data-lang="${key}"]`);
            if (el) el.textContent = textElements[key][lang];
        });
        langButtons.forEach(btn => btn.classList.remove("active"));
        const activeBtn = document.getElementById(`${lang}-btn`);
        if (activeBtn) activeBtn.classList.add("active");
    };

    const savedLanguage = localStorage.getItem("language") || "ru";
    setLanguage(savedLanguage);

    langButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedLang = button.id.replace("-btn", "");
            setLanguage(selectedLang);
        });
    });
});
