import React from "react";
import { resumeData } from "../../data/data.ts";
import styles from "../../styles/SoftSkills.module.css";

const softSkills: React.FC = () => {
    return (
        <ul className={styles.softSkills}>
            {resumeData.softSkills.map((softSkills) => (
                <li key={softSkills}>{softSkills}</li>
            ))}
        </ul>
    );
};

export default softSkills;

