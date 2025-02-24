// src/components/Experience.tsx
import React from "react";
import { resumeData } from "../../data/data.ts";
import type { Experience } from "../../data/data.ts";
import styles from "../../styles/Experience.module.css";

const Experience: React.FC = () => {
    return (
        <div className={styles.experience}>
            {resumeData.experience.map((job: Experience) => (
                <div key={job.company}>
                    <h4>{job.company}</h4>
                    <p>{job.position} ({job.years})</p>
                    <p>{job.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Experience;
