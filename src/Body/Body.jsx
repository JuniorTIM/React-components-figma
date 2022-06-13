import React from 'react';
import styles from './body.module.css';

const Body = () => {
    return (
        <>
        <div className={styles.noll}>0</div>
        <div className={styles.buttonsBox}>
            <button className={styles.buttonPlus}>Увеличить</button>
            <button className={styles.buttonMinus}>Уменьшить</button>
            <button className={styles.buttonReset}>Сбросить</button>
        </div>
        </>
    );
};

export default Body;