import styles from './Counter.module.scss';


const Counters = ({ minutes, workout, kgs }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <div className={styles.heading}>Minutes</div>
        <div className={styles.number}>{minutes}</div>
      </div>
      <div className={styles.item}>
        <div className={styles.heading}>Workout</div>
        <div className={styles.number}>{workout}</div>
      </div>
      <div className={styles.item}>
        <div className={styles.heading}>Kgs</div>
        <div className={styles.number}>{kgs}</div>
      </div>
    </div>
  );
};

export default Counters;