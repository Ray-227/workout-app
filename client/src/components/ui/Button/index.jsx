import React from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';


const Button = ({text, callback, type}) => {
  return (
    <div className={styles.wrapper}>
      <button
        onClick={callback}
        className={cn(styles.button, {
          [styles.main]: !!type,
        })}>
        {text}
      </button>
    </div>
  );
};

export default Button;