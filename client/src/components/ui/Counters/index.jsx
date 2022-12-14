import styles from './Counter.module.scss';


const counters = {
  minutes: 1,
  workout: 'hard',
  kgs: 45,
}

const Counters = props => {
  return (
    <div className={styles.wrapper}>
      {Object.entries(counters).map(item => (
        <div className={styles.item} key={item[0]}>
          <div className={styles.heading}>{item[0]}</div>
          <div className={styles.number}>{item[1]}</div>
        </div>
      ))}
    </div>
  );
};

export default Counters;