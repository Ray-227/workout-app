import React from 'react';
import Layout from '../../common/Layout';
import bg from '../../../images/bg-1.jpg';
import bodyIcon from '../../../images/body-icon.svg';
import styles from './Exercises.module.scss';


const Exercises = () => {
  const handleCheckbox = e => {
    const className = e.target.className;

    const elements = [...document.querySelectorAll(`.${className}`)].slice(0, 2);

    elements.map(elem => elem.classList.toggle(styles.done));
  }


  return (
    <>
      <Layout bgImage={bg} otherPage>
        <div className={styles.heading}>
          <img src={bodyIcon} alt="push-ups"/>
          <h1>Push-ups</h1>
        </div>
      </Layout>
      <div className={styles.wrapper}>
        <div className={styles.grid}>

          <div className={styles.col}>Previous</div>
          <div className={styles.col}>Repeat & weight</div>
          <div className={styles.col}>Completed</div>

          <div className={`${styles.col} row1`}>0kg/0</div>
          <div className={`${styles.col} row1`}>0kg/0</div>
          <div className={styles.col}><input type='checkbox' className='row1' onClick={handleCheckbox} /></div>

          <div className={`${styles.col} row2`}>0kg/0</div>
          <div className={`${styles.col} row2`}>0kg/0</div>
          <div className={styles.col}><input type='checkbox' className='row2' onClick={handleCheckbox} /></div>

          <div className={`${styles.col} row3`}>0kg/0</div>
          <div className={`${styles.col} row3`}>0kg/0</div>
          <div className={styles.col}><input type='checkbox' className='row3' onClick={handleCheckbox} /></div>

          <div className={`${styles.col} row4`}>0kg/0</div>
          <div className={`${styles.col} row4`}>0kg/0</div>
          <div className={styles.col}><input type='checkbox' className='row4' onClick={handleCheckbox} /></div>

        </div>
      </div>
    </>
  );
};

export default Exercises;