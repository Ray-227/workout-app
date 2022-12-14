import { createContext } from 'react';


const AuthContext = createContext({
  isAuth: false,
  setIsAuth: auth => {},
});

export default AuthContext;