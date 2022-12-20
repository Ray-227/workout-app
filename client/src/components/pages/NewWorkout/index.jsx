import { useState } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../common/Layout';

import Button from '../../ui/Button';
import Field from '../../ui/Field';
import Select from '../../ui/Select';

import createWorkoutImage from './bg-create-workout.png';
import { useMutation, useQuery } from 'react-query';
import { $api } from '../../../api/api';
import Alert from '../../ui/Alert';
import Loader from '../../ui/Loader';


const NewWorkout = props => {
  const [name, setName] = useState('');
  const [exercisesCurrent, setExercisesCurrent] = useState([]);

  const { data, isSuccess } = useQuery(
    'list exercise',
    () => {
      $api({
        url: '/exercises',
      });
    },
    {
      refetchOnWindowFocus: false,
    },
  );

  const { mutate, isLoading, isSuccess: isSuccessMutate, error } = useMutation(
    'Create new workout',
    ({ exIDs }) => {
      $api({
        url: '/workouts',
        type: 'POST',
        body: { name, exerciseIds: exIDs },
      });
    },
    {
      onSuccess() {
        setName('');
        setExercisesCurrent([]);
      }
    }
  );

  const handleSubmit = e => {
    e.preventDefault();

    const exIDs = exercisesCurrent.map(ex => ex.value);

    mutate({
      exIDs,
    });
  }


  return (
    <>
      <Layout bgImage={createWorkoutImage} heading={'Create new workout'} />
      <div className='wrapper-inner-page'>
        {isSuccessMutate && <Alert text='Workout created' />}
        {error && <Alert type='error' text={error} />}
        {isLoading && <Loader />}
        <form onSubmit={handleSubmit} id="newWorkoutForm">
          <Field
            placeholder="Enter name"
            value={name}
            onChange={(e => setName(e.target.value))}
          />
          <Link to={'/new-exercise'} className={'dark-link'}>Add new exercise</Link>
          {isSuccess && data && (
            <Select
              placeholder={'Exercises'}
              options={data.map(ex => ({
                value: ex._id,
                label: ex.name,
              }))}
              value={exercisesCurrent}
              onChange={setExercisesCurrent}
              isMulti
            />
          )}
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