import Home from './components/pages/Home';
import Auth from './components/pages/Auth';
import NewWorkout from './components/pages/NewWorkout';
import NewExercise from './components/pages/NewExercise';


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
];

export default routes;