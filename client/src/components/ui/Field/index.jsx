import styles from './Field.module.scss';


const Field = ({ placeholder, value, onChange, type = 'text' }) => {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
    />
  );
};


export default Field;