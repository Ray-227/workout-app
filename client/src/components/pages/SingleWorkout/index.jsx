import { useNavigate } from 'react-router-dom';
import Layout from '../../common/Layout';
import bg from '../../../images/bg-1.jpg';
import bicepsIcon from './biceps.svg';
import styles from './SingleWorkout.module.scss';

const Profile = () => {
  const navigate = useNavigate();


  return (
    <>
      <Layout bgImage={bg} otherPage>
        <div className={styles.heading}>
          <h3>4 min.</h3>
          <h1>EXERCISES FOR THE SHOULDERS</h1>
        </div>
      </Layout>
      <div className={styles.wrapper}>
        <div className={styles.workout} onClick={() => navigate('/exercises')}>
          <span>Biceps curl</span>
          <img src={bicepsIcon} alt='Biceps curl' draggable="false" />
        </div>
        <div className={styles.workout}>
          <span>Biceps curl</span>
          <img src={bicepsIcon} alt='Biceps curl' draggable="false" />
        </div>

        <div className={styles.divider}></div>

        <div className={styles.workout}>
          <span>Biceps curl</span>
          <img src={bicepsIcon} alt='Biceps curl'/>
        </div>
        <div className={styles.workout}>
          <span>Biceps curl</span>
          <img src={bicepsIcon} alt='Biceps curl'/>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.workout}>
          <span>Biceps curl</span>
          <img src={bicepsIcon} alt='Biceps curl'/>
        </div>
        <div className={styles.workout}>
          <span>Biceps curl</span>
          <img src={bicepsIcon} alt='Biceps curl'/>
        </div>
      </div>
    </>
  );
};

export default Profile;