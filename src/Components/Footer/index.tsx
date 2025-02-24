// src/components/Footer.tsx
import React from "react";
import { resumeData } from "../../data/data.ts";
import styles from "../../styles/Footer.module.css";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <h2>Контакты</h2>
            <p>📞 {resumeData.contacts.phone}</p>
            <p>📧 {resumeData.contacts.email}</p>
            <p>
                🌍 <a href={resumeData.contacts.github}>GitHub</a>
            </p>
        </footer>
    );
};

export default Footer;
