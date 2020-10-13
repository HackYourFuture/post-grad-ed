import React from 'react';

import './LoginButton.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus as faPlus } from '@fortawesome/free-solid-svg-icons';

const LoginButton = () =>{

    const loginHandler = () =>{

    }
    


    return(
        <div classname='loginButtonContainer'>

            <button
                className="loginButton"
                onClick={loginHandler}>
                    Login/Register
            </button>
           
            

        </div>


    )
}

export default LoginButton;