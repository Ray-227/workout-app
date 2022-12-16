import Layout from '../../common/Layout';
import createWorkoutImage from '../NewWorkout/bg-create-workout.png';


const NotFound404 = () => {
  return (
    <>
      <Layout bgImage={createWorkoutImage} heading={'Page not found'} />
      <div className='wrapper-inner-page'>
        <h1>404 page not found</h1>
      </div>
    </>
  );
};

export default NotFound404;