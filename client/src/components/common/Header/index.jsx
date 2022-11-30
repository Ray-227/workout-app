import React from 'react';

import Hamburger from '../../ui/Hamburger';

import styles from './Header.module.scss';
import authIcon from './images/user.svg';


const Header = () => {
  return (
    <header className={styles.header}>
      <button>
        <img src={authIcon} alt="Auth"/>
      </button>
      <Hamburger />
    </header>
  );
}

export default Header;