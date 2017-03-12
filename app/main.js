import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,hashHistory,IndexRoute} from 'react-router'
import Home from './components/Home'
import lesson1 from './components/lesson1'

ReactDOM.render(
    (
        <Router history={hashHistory}>
            <Route path="/" component={Home}>
                <IndexRoute component={lesson1}/>
                <Route path="/lesson1" component={lesson1} />
            </Route>
        </Router>
    ),
    document.getElementById('app')
);