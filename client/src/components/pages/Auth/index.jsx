import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

import { $api } from '../../../api/api';

import Layout from '../../common/Layout';

import Button from '../../ui/Button';
import Field from '../../ui/Field';

import bgAuth from './bgAuth.jpg';
import styles from './Auth.module.scss';
import Alert from '../../ui/Alert';
import Loader from '../../ui/Loader';


const NewWorkout = props => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('auth');

  const { mutate: register, isLoading, error } = useMutation(
    'Registration',
    () => {
      $api({
        url: '/users/profile',
        type: 'POST',
        auth: false,
        body: { email, password },
      });
    },
    {
      onSuccess(data) {
        localStorage.setItem('token', data.token);
        // setIsAuth(true)

        setEmail('');
        setPassword('');

        navigate('/');
      }
    }
  );

  const handleSubmit = e => {
    e.preventDefault();

    if (type === 'auth') {
      console.log('AUTH');
    } else {
      register();
    }
  }

  console.log(isLoading);

  return (
    <>
      <Layout bgImage={bgAuth} heading={'Auth'} />
      <div className='wrapper-inner-page'>
        {error && <Alert type={'error'} text={error} />}
        {isLoading
          ? <Loader />
          : (
            <form id="Auth" onSubmit={handleSubmit}>
              <Field
                placeholder="Enter email"
                value={email}
                onChange={({ target: { value }}) => setEmail(value)}
              />
              <Field
                placeholder="Enter password"
                value={password}
                onChange={({ target: { value }}) => setPassword(value)}
              />
              <div className={styles['wrapper-button-auth']}>
                <Button text='Sign In' callback={() => setType('auth')} />
                <Button text='Sign Up' callback={() => setType('reg')} />
              </div>
            </form>
          )
        }
      </div>
    </>
  );
};

export default NewWorkout;