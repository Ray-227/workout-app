import Layout from '../../common/Layout';
import profileBG from './profile-bg.jpg';
import userIcon from '../../../images/user.svg'
import styles from './Profile.module.scss';
import Counters from '../../ui/Counters';
import beforeImage from './before.jpg'
import afterImage from './after.jpg';
import { useQuery } from 'react-query';
import { $api } from '../../../api/api';


const Profile = () => {
  const { data, isSuccess } = useQuery(
    'home page counters',
    () => {
      $api({
        url: '/users/profile',
      });
    },
    {
      refetchOnWindowFocus: false,
    },
  );

  return (
    <>
      <Layout bgImage={profileBG} otherPage>
        <div className={styles.userInfo}>
          <img src={userIcon} alt='user' />
          {false && <h1>{data.email}</h1>}
        </div>
        {false && (
          <Counters
            minutes={data.minutes}
            workout={data.workout}
            kgs={data.kgs}
          />
        )}
      </Layout>
      <div className={styles.wrapper}>
        <div>
          <h2>Before</h2>
          <img src={beforeImage} alt='before'/>
        </div>
        <div>
          <h2>After</h2>
          <img src={afterImage} alt='after' />
        </div>
      </div>
    </>
  );
};

export default Profile;