import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../common/Layout';

import Button from '../../ui/Button';
import Field from '../../ui/Field';
import Select from '../../ui/Select';

import createWorkoutImage from './bg-create-workout.png';


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


  return (
    <>
      <Layout bgImage={createWorkoutImage} heading={'Create new workout'} />
      <div className='wrapper-inner-page'>
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
          <Button
            text='Create'
            callback={() => {}}
          />
        </form>
      </div>
    </>
  );
};

export default NewWorkout;