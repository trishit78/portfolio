import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import heroImg from '../../assests/img.jpg'
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Trishit Bhowmik</h1>
        <p className={styles.description}>
          I'm a Frontend developer with little  experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:trishit456@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      
      
      <img
        src={heroImg}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
