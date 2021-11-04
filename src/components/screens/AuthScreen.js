import { useState } from 'react';
import { Link } from 'react-router-dom';
// import '../css/AuthScreen.css';
// import '../css/utils.css';

// Components
import Register from '../Register';
import Login from '../Login';

const AuthScreen = ({ history }) => {
  const [isLogin, setIsLogin] = useState(true);


  return ( 
  <div className={isLogin ? `auth-container` : `auth-container flip`}>
    <div className="auth-container__symbol"></div>
    { isLogin ? 
      <Login history={history} isLogin={isLogin} setIsLogin={setIsLogin} /> : <Register history={history} isLogin={isLogin} setIsLogin={setIsLogin} /> }
  </div> );
}
 
export default AuthScreen;