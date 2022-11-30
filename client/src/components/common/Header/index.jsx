import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Hamburger from '../../ui/Hamburger';

import styles from './Header.module.scss';
import authIcon from './images/user.svg';
import backIcon from './images/back.svg';


const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();


  return (
    <header className={styles.header}>
      {location.pathname === '/' ? (
        <button>
          <img src={authIcon} alt="Auth"/>
        </button>
      ) : (
        <button onClick={() => navigate(-1)}>
          <img src={backIcon} alt="back"/>
        </button>
      )}
      <Hamburger />
    </header>
  );
}

export default Header;