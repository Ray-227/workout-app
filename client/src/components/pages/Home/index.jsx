import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

import { $api } from '../../../api/api';

import useAuth from '../../../hooks/useAuth';

import Button from '../../ui/Button';
import Counters from '../../ui/Counters';

import styles from './Home.module.scss';
import Layout from '../../common/Layout';
import bgImage from '../../../images/bg-1.jpg'


const Home = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  const { data, isSuccess } = useQuery(
    'home page counters',
    () => {
      $api({
        url: '/users/profile',
      });
    },
    {
      refetchOnWindowFocus: false,
      enabled: isAuth,
    },
  );

  return (
    <Layout bgImage={bgImage}>
      <Button text={'New'} type='main' callback={() => navigate('/new-workout')}/>
      <h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
      {(isSuccess && isAuth) && (
        <Counters
          minutes={data.minutes}
          workout={data.workout}
          kgs={data.kgs}
        />
      )}
    </Layout>
  )
}

export default Home;