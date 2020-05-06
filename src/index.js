import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/about" component={About}/>
            <Route exact path="/" component={App}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
