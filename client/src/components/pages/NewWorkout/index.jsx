import React, { useState } from 'react';

import Button from '../../ui/Button';
import Field from '../../ui/Field';

import Layout from '../../common/Layout';
import createWorkoutImage from './bg-create-workout.png';

import styles from './NewWorkout.module.scss';

const NewWorkout = props => {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    console.log('handleSubmit');
  }


  return (
    <>
      <Layout bgImage={createWorkoutImage} />
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit}>
          <Field
            placeholder="Enter name"
            value={name}
            onChange={(e => setName(e.target.value))}
          />
        </form>
        <Button
          text='Create'
          callback={() => {}}
        />
      </div>
    </>
  );
};

export default NewWorkout;