import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Input from './Input';

import './style.css';

const Login = () => {

    const dispatch = useDispatch();
    const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'LOGIN',
    });
  };

    return (
        <div className="container">
            <div className="container-login">
                <h1>Connexion</h1>
                    <div className="form">
                        <form onSubmit={handleSubmit} className="login-form">
                            <div className="mail">
                                <h2>Adresse mail</h2>
                                <Input 
                                type="email" 
                                placeholder="Enter your email"
                                inputKey="email"
                                />
                            </div>
                            <div className="password">
                                <h2>Mot de passe</h2>
                                <Input 
                                type="password" 
                                placeholder="Enter your password"
                                inputKey="password" 
                                
                                />
                            </div>
                            <div className="button">
                                <button type="submit" className="connectButton" > <Link to="/list-articles">Se connecter</Link></button>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    )
}
Login.propTypes = {

};

export default Login;
