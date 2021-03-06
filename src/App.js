import React, { Fragment, useEffect }  from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import RegisterComplete from './pages/auth/RegisterComplete';
import Header from './components/nav/Header';
import { ToastContainer } from "react-toastify";
import {auth} from './firebase'
import {useDispatch} from 'react-redux'
import { LOGGED_IN_USER } from './actions/Types';

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
     const unsubscribe = auth.onAuthStateChanged(async (user) => {
         if(user){
             const idTokenResult = await user.getIdTokenResult()
             dispatch({
                 type: LOGGED_IN_USER,
                 payload: {
                     email: user.email,
                     token: idTokenResult

                 }
             })
         }
     })
    }, [])


return(
    <Fragment>
        <ToastContainer />
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/register/complete" component={RegisterComplete} />

            
        </Switch>
        </Fragment>
)
}

export default App
