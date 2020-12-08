import React from 'react';
import './App.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Users from './components/user/Users';
import UserDetails from './components/user/UserDetails'

let App = () => {

    return(
        <React.Fragment>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Users}/>      
                    <Route exact path="/users" component={Users}/>
                    <Route exact path="/users/:id" component={UserDetails}/>
               
                </Switch>
            </Router>

        </React.Fragment>
    );
};
export default App;
