import React from 'react';
import Header from '../Header';

import styles from './Layout.module.scss';


const Layout = ({ children, height = '350px', bgImage }) => {
  return (
    <div className={styles.wrapper} style={{height, backgroundImage: `url(${bgImage})`}}>
      <Header />
      <div>
        {children}
      </div>
    </div>
  );
};

export default Layout;