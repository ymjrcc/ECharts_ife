import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,hashHistory,IndexRoute} from 'react-router'
import Home from './components/Home'
import Lesson1 from './components/Lesson1'
import Lesson2 from './components/Lesson2'

ReactDOM.render(
    (
        <Router history={hashHistory}>
            <Route path="/" component={Home}>
                <IndexRoute component={Lesson1}/>
                <Route path="/lesson1" component={Lesson1} />
                <Route path="/lesson2" component={Lesson2} />
            </Route>
        </Router>
    ),
    document.getElementById('app')
);