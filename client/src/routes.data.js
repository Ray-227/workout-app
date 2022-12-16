import Home from './components/pages/Home';
import Auth from './components/pages/Auth';
import NewWorkout from './components/pages/NewWorkout';


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
    auth: true,
  },
];

export default routes;