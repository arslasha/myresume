// src/App.tsx
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import styles from "./styles/App.module.css";
import Header from "./Components/Header/index.tsx";
import About from "./Components/About/index.tsx";
import Experience from "./Components/Experience/index.tsx";
import Education from "./Components/Education/index.tsx";
import Footer from "./Components/Footer/index.tsx";
import Section from "./Components/Section.tsx";
import SoftSkills from "./Components/SoftSkills";
import HardSkills from "./Components/HardSkills/index.tsx";

const App: React.FC = () => {
    const [pageTitle, setPageTitle] = useState("Резюме | Хисамутдинов Арслан");

    useEffect(() => {
        const handleVisibilityChange = () => {
            setPageTitle(document.hidden ? "Не уходи! 👀" : "Резюме | Хисамутдинов Арслан");
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
    }, []);

    return (
        <>
            {/* Настройки вкладки и иконки */}
            <Helmet>
                <title>{pageTitle}</title>
                <link rel="icon" href="/favicon.ico" />
            </Helmet>

            <div className={styles.app}>
                {/* Заголовок вынесен отдельно */}
                <Header />
                <Section title="About">
                    <About />
                </Section>
                <Section title="Hard skills">
                    <HardSkills />
                </Section>
                <Section title="Experience">
                    <Experience />
                </Section>
                <Section title="Education">
                    <Education />
                </Section>

                <Section title="Soft Skills">
                    <SoftSkills />
                </Section>

                <Footer />
            </div>
        </>
    );
};

export default App;