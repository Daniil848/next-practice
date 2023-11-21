'use client'

import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.content1}></div>
          <div className={styles.content2}></div>
          <div className={styles.content3}></div>
          <div className={styles.content4}></div>
          <div className={styles.content4}></div>
        </div>
        <div className={styles.content}>
          <div className={styles.content1}></div>
          <div className={styles.content2}></div>
          <div className={styles.content3}></div>
          <div className={styles.content4}></div>
          <div className={styles.content4}></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;