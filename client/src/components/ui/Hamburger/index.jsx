import { Link } from 'react-router-dom';

import useOutsideAlerter from '../../../hooks/useOutsideAlerter';
import useAuth from '../../../hooks/useAuth';

import menu from './entities/menu'

import styles from './Hamburger.module.scss';
import hamburgerIcon from './images/hamburger.svg';
import hamburgerCloseIcon from './images/hamburger-close.svg';


const Hamburger = props => {
  const { setIsAuth } = useAuth();
  const { ref, isComponentVisible, setIsComponentVisible  } = useOutsideAlerter(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuth(false);
    setIsComponentVisible(false);
  }


  return (
    <div className={styles.wrapper} ref={ref}>
      <button onClick={() => setIsComponentVisible(!isComponentVisible)}>
        <img src={isComponentVisible ? hamburgerCloseIcon : hamburgerIcon} alt="Menu" height='24'/>
      </button>
      <nav className={`${styles.menu} ${isComponentVisible && styles.show}`}>
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