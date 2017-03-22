import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,hashHistory,IndexRoute} from 'react-router'
import Home from './components/Home'
import Lesson1 from './components/Lesson1'
import Lesson2 from './components/Lesson2'
import Lesson3 from './components/Lesson3'
import Lesson4 from './components/Lesson4'

ReactDOM.render(
    (
        <Router history={hashHistory}>
            <Route path="/" component={Home}>
                <IndexRoute component={Lesson1}/>
                <Route path="/lesson1" component={Lesson1} />
                <Route path="/lesson2" component={Lesson2} />
                <Route path="/lesson3" component={Lesson3} />
                <Route path="/lesson4" component={Lesson4} />
            </Route>
        </Router>
    ),
    document.getElementById('app')
);