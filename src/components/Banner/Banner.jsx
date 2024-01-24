import React from "react";

import styles from "../../styles/Home.module.css";

import bannerImg from "../../images/banner.png";

const Banner = () => (
  <section className={styles.banner}>
    <div className={styles.left}>
      <p className={styles.content}>
       Shop With Us
        <span>SALE</span>
      </p>
      {/* <button className={styles.more}>See more</button> */}
    </div>

    <div
      className={styles.right}
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <p className={styles.discount}>
        NEVER LATE to find out <span>what you need</span> 
      </p>
    </div>
  </section>
);

export default Banner;
