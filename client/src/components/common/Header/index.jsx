import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import Hamburger from '../../ui/Hamburger';

import styles from './Header.module.scss';
import authIcon from './images/user.svg';
import bodyIcon from '../../../images/body-icon.svg';
import backIcon from './images/back.svg';


const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuth } = useAuth();


  return (
    <header className={styles.header}>
      {location.pathname === '/' ? (
        <button onClick={() => navigate('/auth')}>
          <img src={isAuth ? bodyIcon : authIcon} alt={isAuth ? 'body' : 'icon'} />
        </button>
      ) : (
        <button onClick={() => navigate(-1)}>
          <img src={backIcon} alt="back" />
        </button>
      )}
      <Hamburger />
    </header>
  );
}

export default Header;