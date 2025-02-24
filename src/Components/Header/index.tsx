import React from "react";
import { resumeData } from "../../data/data.ts";
import styles from "../../styles/Header.module.css";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.fullName}>{resumeData.fullName || "Имя не указано"}</h1>
            <h2 className={styles.position}>{resumeData.position || "Должность не указана"}</h2>
        </header>
    );
};

export default Header;
