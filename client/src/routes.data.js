import Home from './components/pages/Home';
import Auth from './components/pages/Auth';
import NewWorkout from './components/pages/NewWorkout';
import NewExercise from './components/pages/NewExercise';
import Profile from './components/pages/Profile';
import SingleWorkout from './components/pages/SingleWorkout';
import Exercises from './components/pages/Exercises';


const routes = [
  {
    path: '/',
    exact: true,
    element: Home,
    auth: false,
  },
  {
    path: '/auth',
    exact: false,
    element: Auth,
    auth: false,
  },
  {
    path: '/new-workout',
    exact: false,
    element: NewWorkout,
    auth: false,
  },
  {
    path: '/new-exercise',
    exact: false,
    element: NewExercise,
    auth: false,
  },
  {
    path: '/profile',
    exact: false,
    element: Profile,
    auth: false,
  },
  {
    path: '/workouts',
    exact: false,
    element: SingleWorkout,
    auth: false,
  },
  {
    path: '/exercises',
    exact: false,
    element: Exercises,
    auth: false,
  },
];

export default routes;