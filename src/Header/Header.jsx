import React from 'react';
import styles from './header.module.css';
import logo from '../assets/Ellipse2.svg'

const Header = () => {
    return (
        <>
        <div className={styles.counterlogobox}>
            <div className={styles.logoText}>ounter</div>
            <img className={styles.logoC} alt='logoC' src={logo}></img>
        </div>
        <div className={styles.main}>Главная</div>
        <div className={styles.we}>О нас</div>
        <div className={styles.contacts}>Контакты</div>
        <hr className={styles.line}/>
        </>
    );
};

export default Header;