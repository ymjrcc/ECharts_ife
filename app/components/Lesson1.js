import React,{Component} from 'react'
import echarts from 'echarts'
import style from '../css/home.css'

class Lesson1 extends Component{

    componentDidMount(){
        var myChart = echarts.init(this.refs.lesson1);
        var option = {
            title: {
                text: 'LESSON 1'
            },
            tooltip: {},
            legend: {
                data:['销量','价格']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [
                {
                    name: '销量',
                    type: 'line',
                    data: [287, 144, 120, 366, 93, 200],
                    itemStyle: {
                        normal: {
                            color: '#f66'
                        }
                    }
                },
                {
                    name: '价格',
                    type: 'bar',
                    data: [92, 250, 310, 188, 324, 20],
                    itemStyle: {
                        normal: {
                            color: '#9c6'
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    }

    render(){
        return <div className={style.lesson1} ref="lesson1"></div>
    }
}

export default Lesson1;