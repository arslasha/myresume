// src/components/Education.tsx
import React from "react";
import { resumeData } from "../../data/data.ts";
import type { Education } from "../../data/data.ts";
import styles from "../../styles/Education.module.css";


const Education: React.FC = () => {
    return (
        <div className={styles.education}>
            {resumeData.education.map((edu: Education) => (
                <div key={edu.institution}>
                    <h4>{edu.institution} ({edu.years})</h4>
                    <p>{edu.details}</p>
                </div>
            ))}
        </div>
    );
};

export default Education;
