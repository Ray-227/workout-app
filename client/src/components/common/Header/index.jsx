import React from 'react';
import styles from './Header.module.scss';

import authIcon from './images/user.svg';
import hamburgerIcon from './images/hamburger.svg';


const Header = () => {
  return (
    <header className={styles.header}>
      <button>
        <img src={authIcon} alt="Auth"/>
      </button>
      <button>
        <img src={hamburgerIcon} alt="Menu"/>
      </button>
    </header>
  );
}

export default Header;