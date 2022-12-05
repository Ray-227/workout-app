import React from 'react';
import cn from 'classnames';

import Header from '../Header';

import styles from './Layout.module.scss';


const Layout = ({ children, bgImage, heading = '' }) => {
  return (
    <div
      className={cn(styles.wrapper, {
        [styles.otherPage]: !!heading,
        [styles.imageShadow]: !!bgImage,
      })}
      style={{backgroundImage: `url(${bgImage})`}}
    >
      <Header />
      <div>
        {children && <div>{children}</div>}
        {heading && <h1 className={styles.heading}>{heading}</h1>}
      </div>
    </div>
  );
};

export default Layout;