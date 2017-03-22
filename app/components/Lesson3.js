import React,{Component} from 'react'
import echarts from 'echarts'
import style from '../css/home.css'
import mapData from '../data/ne_110m/ne_110m_admin_0_countries.json'

class Lesson3 extends Component{

    componentDidMount(){
        var myChart = echarts.init(this.refs.lesson3);
        echarts.registerMap('lesson3', mapData);
        myChart.setOption({
            series: [{
                type: 'map',
                map: 'lesson3'
            }]
        });
    }

    render(){
        return <div className={style.lesson} ref="lesson3"></div>
    }
}

export default Lesson3;