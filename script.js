document.addEventListener("DOMContentLoaded", function () {
    // 🏆 Анимация появления блока "О нас" при скролле
    const aboutCards = document.querySelectorAll(".about-card");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Чтобы не анимировать повторно
            }
        });
    }, { threshold: 0.5 });

    aboutCards.forEach(card => {
        observer.observe(card);
    });

    // 🌍 Переключение языка
    const langButtons = document.querySelectorAll(".lang-switch button");
    const textElements = {
        "hero-title": {
            "ru": "Найди подработку быстро и легко!",
            "en": "Find a job quickly and easily!"
        },
        "main": {
            "ru": "Главная",
            "en": "Main"
        },
        "we": {
            "ru": "О нас",
            "en": "About us"
        },
        "jobs": {
            "ru": "Виды подработок",
            "en": "Job types"
        },
        "team": {
            "ru": "Команда",
            "en": "Team"
        },
        "contacts": {
            "ru": "Контакты",
            "en": "Contacts"
        },
        "hero-desc": {
            "ru": "Мы поможем тебе найти подработку по твоим навыкам и свободному времени. Оставь заявку и начни зарабатывать уже сегодня!",
            "en": "We will help you find a part-time job based on your skills and free time. Apply now and start earning today!"
        },
        "cta": {
            "ru": "Оставить заявку",
            "en": "Apply Now"
        },
        "about-title": {
            "ru": "О нас",
            "en": "About Us"
        },
        "about-point1": {
            "ru": "Быстрый поиск",
            "en": "Quick Search"
        },
        "about-desc1": {
            "ru": "Находите подработку рядом с собой по геолокации.",
            "en": "Find part-time jobs nearby using geolocation."
        },
        "about-point2": {
            "ru": "Легкие задания",
            "en": "Easy Tasks"
        },
        "about-desc2": {
            "ru": "Простые и доступные задачи без сложных навыков.",
            "en": "Simple and accessible tasks without complex skills."
        },
        "about-point3": {
            "ru": "Свободный график",
            "en": "Flexible Schedule"
        },
        "about-desc3": {
            "ru": "Выбирайте удобное время для работы.",
            "en": "Choose a convenient time to work."
        },
        "about-point4": {
            "ru": "Моментальный заработок",
            "en": "Instant Earnings"
        },
        "about-desc4": {
            "ru": "Выполняйте задания и сразу получайте оплату.",
            "en": "Complete tasks and get paid instantly."
        },
        "jobs-title": {
            "ru": "Виды подработки",
            "en": "Types of Jobs"
        },
        "job1": {
            "ru": "Уборка – помощь по дому, вынос мусора",
            "en": "Cleaning – Household help, trash removal"
        },
        "job2": {
            "ru": "Доставка – курьерские поручения, покупки",
            "en": "Delivery – Courier services, shopping"
        },
        "job3": {
            "ru": "Ремонт – починка техники, сборка мебели",
            "en": "Repairs – Appliance fixing, furniture assembly"
        },
        "job4": {
            "ru": "Помощь с питомцами – выгул собак, кормление",
            "en": "Pet care – Dog walking, feeding"
        },
        "job5": {
            "ru": "Учебная помощь – написание конспектов, репетиторство",
            "en": "Tutoring – Note writing, tutoring"
        },
        "team-title": {
            "ru": "Основатели",
            "en": "Founders"
        },
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
        "contact-title": {
            "ru": "Свяжитесь с нами",
            "en": "Contact Us"
        }
    };

    function setLanguage(lang) {
        localStorage.setItem("language", lang); // Запоминаем язык

        // Обновляем текст на странице
        Object.keys(textElements).forEach(id => {
            let element = document.querySelector(`[data-lang="${id}"]`);
            if (element) {
                element.textContent = textElements[id][lang];
            }
        });

        // Обновляем стили кнопок
        langButtons.forEach(btn => btn.classList.remove("active"));
        document.getElementById(`${lang}-btn`).classList.add("active");
    }

    // Проверяем, есть ли сохраненный язык
    const savedLanguage = localStorage.getItem("language") || "ru";
    setLanguage(savedLanguage);

    // Добавляем обработчики событий для кнопок смены языка
    langButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedLang = button.id.replace("-btn", "");
            setLanguage(selectedLang);
        });
    });
});
