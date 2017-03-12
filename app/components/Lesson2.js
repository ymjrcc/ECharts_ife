import React,{Component} from 'react'
import echarts from 'echarts'
import style from '../css/home.css'

class Lesson2 extends Component{

    componentDidMount(){
        var myChart = echarts.init(this.refs.lesson2);
        var option = {
            title: {
                text: '安远一中历年一本率',
                subtext: '数据是我瞎编的'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['文科', '理科']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['2011年','2012年','2013年','2014年','2015年','2016年']
            },
            series: [
                {
                    name: '文科',
                    type: 'bar',
                    data: [0.27, 0.31, 0.29, 0.41, 0.34, 0.37],
                    itemStyle: {
                                normal: {
                                    color: '#ccc'
                                }
                            }
                },
                {
                    name: '理科',
                    type: 'bar',
                    data: [0.31, 0.35, 0.38, 0.45, 0.39, 0.41],
                    itemStyle: {
                                normal: {
                                    color: '#69f'
                                }
                            }
                }
            ]
        };
        myChart.setOption(option);
    }

    render(){
        return <div className={style.lesson2} ref="lesson2"></div>
    }
}

export default Lesson2;