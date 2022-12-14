import { useNavigate } from 'react-router-dom';

import Button from '../../ui/Button';
import Counters from '../../ui/Counters';

import styles from './Home.module.scss';
import Layout from '../../common/Layout';
import bgImage from '../../../images/bg-1.jpg'


const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout bgImage={bgImage}>
      <Button text={'New'} type='main' callback={() => navigate('/new-workout')}/>
      <h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
      <Counters />
    </Layout>
  )
}

export default Home;