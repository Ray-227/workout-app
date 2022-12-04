import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../common/Layout';

import Button from '../../ui/Button';
import Field from '../../ui/Field';
import Select from '../../ui/Select';

import createWorkoutImage from './bg-create-workout.png';

import styles from './NewWorkout.module.scss';


const options = [
  { value: 'rerserse', label: 'Push-ups' },
  { value: 'fasfsaf', label: 'Pull-ups' },
];

const NewWorkout = props => {
  const [name, setName] = useState('');
  const [selectValue, setSelectValue] = useState([]);

  const handleSubmit = () => {
    console.log('handleSubmit');
  }

  const handleChangeSelect = () => {
    console.log('handleChangeSelect');
  };


  return (
    <>
      <Layout bgImage={createWorkoutImage} heading={'Create new workout'} />
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit} id="newWorkoutForm">
          <Field
            placeholder="Enter name"
            value={name}
            onChange={(e => setName(e.target.value))}
          />
          <Link to={'/new-exercise'} className={'dark-link'}>Add new exercise</Link>
          <Select
            placeholder={'Exercises'}
            options={options}
            value={selectValue}
            onChange={setSelectValue}
            isMulti
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