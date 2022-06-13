import React from 'react';
import styles from './footer.module.css'
import logo1 from '../assets/C.svg'
import logo2 from '../assets/ounter.svg'

const Footer = () => {
    return (
        <>
        <div className={styles.imgBox}>
            <img className={styles.logo1} src={logo1} alt="C" />
            <img className={styles.logo2} src={logo2} alt="outer" />
        </div>
        <div className={styles.partner}>Партнерам</div>
        <div className={styles.developers}>Разработчикам</div>
        <div className={styles.work}>Вакансии</div>
        <div className={styles.intocode}>ООО “интукод”, 2020г.</div>
        </>
    );
};

export default Footer;