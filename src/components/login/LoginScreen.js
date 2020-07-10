import React, { useContext } from 'react'
import { types } from './../../types/types';
import { AuthContext } from './../../auth/AuthContext';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        //history.push('/');

        const lastPath = localStorage.getItem('lastPath') || '/';


        const action = {
            type: types.login,
            payload: {
                name: 'Jose'
            }
        };

        dispatch(action);

        history.replace(lastPath);
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
