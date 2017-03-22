import React,{Component} from 'react'
import echarts from 'echarts'
import style from '../css/home.css'
import jsonData from '../data/sp500hst/sp500hst.json'

class Lesson4 extends Component{

    componentDidMount(){
        var myChart = echarts.init(this.refs.lesson4);
    }

    render(){
        return <div className={style.lesson} ref="lesson4"></div>
    }
}

export default Lesson4;