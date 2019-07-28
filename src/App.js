import React, {Component} from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import Header from "./components/Header";
import List from "./components/List";
import TourDetails from "./components/TourDetails";

import './App.css';

class App extends Component {
    render() {

        return (
            <div className="App">
                <Header/>
                <div className="container mb-4">
                    <Switch>
                        <Route path='/list' component={List}/>
                        <Route path='/details/:id' component={TourDetails}/>
                        <Redirect from='/' to='list'/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
