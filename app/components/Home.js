import React,{Component} from 'react'
import {Link} from 'react-router'
import style from '../css/home.css'

class Home extends Component{
    render(){
        return (
            <div className={style.home}>
                <div className={style.menu}>
                    <Link to="/lesson1">lesson 1</Link>
                    <Link to="/lesson2">lesson 2</Link>
                    <Link to="/lesson3">lesson 3</Link>
                    <Link to="/lesson4">lesson 4</Link>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default Home;