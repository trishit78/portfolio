import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Problem Solver</h3>
              <div className="mt-4">
                <div className="flex items-center space-x-4">
                <h1 className="text-xl">LeetCode : </h1>
                <a href="https://leetcode.com/u/trishit78/"><span className="text-xl">
                leetcode/trishit78
                  </span></a>
                </div>
                <div className="flex items-center space-x-4">
                <h1 className="text-xl">Code360 : </h1>
                <a href="https://www.naukri.com/code360/profile/c3286a42-c556-4c74-b763-c73b3b99d2c2"><span className="text-xl">
                code360/trishit
                  </span></a>
                </div>
              </div>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Open Source Enthusiast</h3>
              <p>
                Participated in Hacktoberfest,HackSquad,GSSOC and various open sorce programs, and mentor in GSSOC(2024) 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
