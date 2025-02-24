import React from "react";
import styles from "./../styles/Section.module.css";

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
    return (
        <section className={styles.section}>
            <h3 className={styles.title}>{title}</h3>
            {children}
        </section>
    );
};

export default Section;
