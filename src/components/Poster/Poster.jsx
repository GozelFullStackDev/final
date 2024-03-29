import React from "react";

import styles from "../../styles/Home.module.css";

import BG from "../../images/computer.png";

const Poster = () => (
  <section className={styles.home}>
    <div className={styles.title}></div>
    <div className={styles.product}>
      <div className={styles.text}>
        <div className={styles.subtitle}>Home Products</div>
        <h1 className={styles.head}>Everything you need...</h1>
        {/* <button className={styles.button}>Shop Now</button> */}
      </div>
      <div className={styles.image}>
        <img src={BG} alt="" />
      </div>
    </div>
  </section>
);

export default Poster;
