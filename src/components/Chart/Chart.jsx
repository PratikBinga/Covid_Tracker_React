import React,{useState,useEffect} from 'react';
import {fetchDailyData} from '../../api/index'
import {Line,Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({cardsData,country}) => {

    const [dailyData, setDailyData] = useState([]);

    const fetchDailyDataResult = async () => {
       // const dailyFecthData = await fetchDailyData();
       // setDailyData(dailyFecthData);
        setDailyData(await fetchDailyData());
    }
    useEffect(() => {
        // const fetchDailyDataResult = async () => {
        //     // const dailyFecthData = await fetchDailyData();
        //     // setDailyData(dailyFecthData);
        //      setDailyData(await fetchDailyData());
        //  }
        fetchDailyDataResult();
    },[])
    //console.log(dailyData,'dailyData CHART DATA ---')


    const lineChart = (
        dailyData.length > 0 ? (
            <Line
            data = {{
                labels :dailyData.map(({date})=> date),
                datasets: [{
                    data:dailyData.map(({confirmed}) => confirmed),
                    label : 'Infected',
                    borderColor:'#333ff',
                    fill:true
                },
                {
                    data:dailyData.map(({deaths}) => deaths),
                    label : 'Deaths',
                    borderColor:'red',
                    backgroundColor:'rgba(255,0,0,0.5)',
                    fill:true
                    
                }],
            }}
            />) : null
    )

    const barChart = (
     cardsData.confirmed  ?
        (
            <Bar
            data={{
                labels:['Infected','Recovered','Deaths'],
                datasets:[{
                    label:'People',
                    backgroundColor:[
                        'rgba(0,0,255,0.5)',
                        'rgba(0,255,0,0.5)',
                        'rgba(255,0,0,0.5)'
                    ],
                    data:[cardsData.confirmed.value,cardsData.recovered.value,cardsData.deaths.value]
                }]
            }}
            options = {
                {
                    legend:{display:false},
                    title: {display:true,text:`Current state in ${country}`}
                }
            }
            />
        ) : 'BAR CHART'
    );
    console.log(country,'country-------------000000')
    console.log(cardsData,'country-------------000000')
    
    return ( 
        <div className = {styles.Chart}>
            {
                country ? barChart :lineChart
            }
        </div>
    )
}
export default React.memo(Chart);