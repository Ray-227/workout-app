import React, { useState } from 'react';

import Layout from '../../common/Layout';

import Button from '../../ui/Button';
import Field from '../../ui/Field';

import bgAuth from './bgAuth.jpg';
import styles from './Auth.module.scss';
import Alert from '../../ui/Alert';


const NewWorkout = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('auth');

  const handleSubmit = e => {
    e.preventDefault();

    if (type === 'auth') {
      console.log('AUTH');
    } else {
      console.log('REG');
    }
  }


  return (
    <>
      <Layout bgImage={bgAuth} heading={'Auth'} />
      <div className='wrapper-inner-page'>
        <Alert type={'warring'} text={'fff'} />
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
      </div>
    </>
  );
};

export default NewWorkout;