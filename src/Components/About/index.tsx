// src/components/About.tsx
import React from "react";
import { resumeData } from "../../data/data.ts";
import styles from "../../styles/About.module.css";

const About: React.FC = () => {
    return <p className={styles.about}>{resumeData.about}</p>;
};

export default About;
