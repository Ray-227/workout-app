import React from 'react';
import cn from 'classnames';

import styles from './Alert.module.scss';


const Alert = ({ type, text }) => {
  return (
    <div
      className={cn(styles.alert, {
        [styles.error]: type === 'error',
        [styles.warring]: type === 'warring',
        [styles.info]: type === 'info',
      })}
    >
      {text}
    </div>
  );
};

export default Alert;