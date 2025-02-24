import React from "react";
import { resumeData } from "../../data/data.ts";
import styles from "../../styles/HardSkills.module.css";

const HardSkills: React.FC = () => {
    return (
        <ul className={styles.hardSkills}>
            {resumeData.hardSkills.map((hardSkill) => (
                <li key={hardSkill}>{hardSkill}</li>
            ))}
        </ul>
    );
};

export default HardSkills;
