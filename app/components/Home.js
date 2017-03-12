import React,{Component} from 'react'
import {Link} from 'react-router'
import style from '../css/home.css'

class Home extends Component{
    render(){
        return (
            <div className={style.home}>
                <div className={style.menu}>
                    <Link to="/lesson1">lesson1</Link>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default Home;