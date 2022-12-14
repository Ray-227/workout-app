import { useState } from 'react';
import { Link } from 'react-router-dom';

import menu from './entities/menu'

import styles from './Hamburger.module.scss';
import hamburgerIcon from './images/hamburger.svg';
import hamburgerCloseIcon from './images/hamburger-close.svg';


const Hamburger = props => {
  const [show, setShow] = useState(false);

  const handleLogout = () => {
    console.log('handleLogout');
  }


  return (
    <div className={styles.wrapper}>
      <button onClick={() => setShow(!show)}>
        <img src={show ? hamburgerCloseIcon : hamburgerIcon} alt="Menu" height='24'/>
      </button>
      <nav className={`${styles.menu} ${show && styles.show}`}>
        <ul>
          {menu.map(item => (
            <li key={item.link}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
          <li>
            <button href="#" onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Hamburger;