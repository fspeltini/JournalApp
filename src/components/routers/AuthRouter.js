import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginScreen } from '../auth/LoginScreen';
import { RegisterScreen } from '../auth/RegisterScreen';

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                        <Route exact path="/auth/login" component= { LoginScreen }></Route>

                        <Route exact path="/auth/register" component= { RegisterScreen }></Route>

                        <Redirect to="/auth/login"></Redirect>
                </Switch>
            </div>

        </div>
    )
}