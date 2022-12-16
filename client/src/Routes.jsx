import { BrowserRouter as Router, Routes as RoutesDOM, Route } from "react-router-dom";

import useAuth from './hooks/useAuth';

import routes from './routes.data';
import NotFound404 from './components/pages/NotFound404';


const Routes = () => {
  const { isAuth } = useAuth();


  return (
    <Router>
      <RoutesDOM>
        {routes.map(route => {
          if (route.auth && !isAuth) {
            return false;
          }

          return (
            <Route exact={route.exact} path={route.path} element={<route.element />} key={`route ${route.path}`}/>
          )
        })}
        <Route path='*' element={<NotFound404 />} />
      </RoutesDOM>
    </Router>
  );
};

export default Routes;