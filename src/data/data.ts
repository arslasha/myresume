// src/data/data.ts

export interface ContactInfo {
    phone: string;
    email: string;
    github: string;
    location: string;
}

export interface Experience {
    company: string;
    position: string;
    years: string;
    description: string;
    technologies: string[];
}

export interface Education {
    institution: string;
    degree: string;
    years: string;
    details: string;
}

export interface ResumeData {
    name: string;
    fullName: string;
    position: string;
    contacts: ContactInfo;
    about: string;
    hardSkills: string[];
    softSkills: string[];
    experience: Experience[];
    education: Education[];
}

export const resumeData: ResumeData = {
    name: "Хисамутдинов Арслан",
    fullName: "Хисамутдинов Арслан Илдарович",
    position: "Frontend-разработчик (React, TypeScript)",
    contacts: {
        phone: "+7 (937) 611-20-88",
        email: "aliernhis@gmail.com",
        github: "https://github.com/arslasha",
        location: "Москва, Россия",
    },
    about:
        "Я Frontend-разработчик с опытом работы в React, TypeScript, Redux и Next.js. Умею создавать адаптивные, оптимизированные и удобные интерфейсы. Стремлюсь к чистому и поддерживаемому коду, активно применяю современные инструменты фронтенда.",
    hardSkills: [
        "JavaScript (ES6+)",
        "TypeScript",
        "React.js",
        "Next.js",
        "Redux Toolkit",
        "CSS Modules / SCSS",
        "Tailwind CSS",
        "Framer Motion",
        "Jest / React Testing Library",
        "REST API / GraphQL",
        "Webpack / Vite",
        "Git, GitHub, CI/CD",
    ],
    experience: [
        {
            company: "TechFuture",
            position: "Frontend-разработчик",
            years: "2022 - настоящее время",
            description:
                "Разрабатываю UI-компоненты, работаю с REST API, оптимизирую производительность приложений. Активно использую TypeScript и Redux Toolkit. Улучшил архитектуру проекта, что снизило количество багов на 30%.",
            technologies: ["React", "TypeScript", "Redux Toolkit", "SCSS", "Jest"],
        },
        {
            company: "InnovateSoft",
            position: "Frontend-разработчик (стажировка)",
            years: "2021 - 2022",
            description:
                "Разработал систему авторизации и личного кабинета на Next.js. Оптимизировал загрузку страниц, что ускорило их открытие на 40%.",
            technologies: ["Next.js", "TypeScript", "Styled Components", "GraphQL"],
        },
    ],
    education: [
        {
            institution: "РТУ МИРЭА",
            degree: "Бакалавр, Программная инженерия",
            years: "2023 - 2027",
            details:
                "Изучал алгоритмы, структуры данных, базы данных и веб-разработку. Выполнил дипломную работу по оптимизации клиентской части веб-приложений.",
        },
    ],
    softSkills: [
        "Критическое мышление",
        "Быстрое обучение",
        "Мультизадачность",
        "Работа в команде",
        "Коммуникация",
    ],
};
