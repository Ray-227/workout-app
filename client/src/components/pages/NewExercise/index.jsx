import { useState } from 'react';
import cn from 'classnames';
import { useMutation } from 'react-query';
import { $api } from '../../../api/api';

import Layout from '../../common/Layout';

import Button from '../../ui/Button';
import Field from '../../ui/Field';
import Alert from '../../ui/Alert';
import Loader from '../../ui/Loader';

import createExerciseImage from './images/bg-create-exercise.jpg';
import chest from './images/chest.svg';
import shoulders from './images/shoulders.svg';
import biceps from './images/biceps.svg';
import legs from './images/legs.svg';
import hit from './images/hit.svg';

import styles from './NewExercise.module.scss';


const NewExercise = props => {
  const [name, setName] = useState('');
  const [time, setTime] = useState(0);
  const [imageName, setImageName] = useState('chest');

  const { mutate: newExercise, isSuccess, isLoading, error } = useMutation(
    'Create new exercise',
    () => {
      $api({
        url: '/exercises',
        type: 'POST',
        body: { name, time, imageName },
      });
    },
    {
      onSuccess(data) {
        setName('');
        setTime(0);
        setImageName('chest');
      }
    }
  );

  const handleSubmit = e => {
    e.preventDefault();
    if (name && time && imageName) newExercise();
  }


  return (
    <>
      <Layout bgImage={createExerciseImage} heading={'Create new exercise'} />
      <div className='wrapper-inner-page'>
        {isSuccess && <Alert text='Exercise created' />}
        {error && <Alert type='error' text={error} />}
        {isLoading && <Loader />}
        <form onSubmit={handleSubmit} id="newWorkoutForm">
          <Field
            placeholder="Enter name"
            value={name}
            onChange={(e => setName(e.target.value))}
          />
          <Field
            placeholder="Enter time"
            value={time}
            onChange={(e => setTime(e.target.value))}
          />
          <div className={styles.images}>
            <img
              src={chest}
              className={cn({ [styles.active]: 'chest' === imageName })}
              onClick={() => setImageName('chest')}
              alt='chest'
            />
            <img
              src={shoulders}
              className={cn({ [styles.active]: 'shoulders' === imageName })}
              onClick={() => setImageName('shoulders')}
              alt='shoulders'
            />
            <img
              src={biceps}
              className={cn({ [styles.active]: 'biceps' === imageName })}
              onClick={() => setImageName('biceps')}
              alt='biceps'
            />
            <img
              src={legs}
              className={cn({ [styles.active]: 'legs' === imageName })}
              onClick={() => setImageName('legs')}
              alt='legs'
            />
            <img
              src={hit}
              className={cn({ [styles.active]: 'hit' === imageName })}
              onClick={() => setImageName('hit')}
              alt='hit'
            />
          </div>
          <Button
            text='Create'
            callback={() => {}}
          />
        </form>
      </div>
    </>
  );
};

export default NewExercise;