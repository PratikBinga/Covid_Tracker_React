import React, { Component } from 'react';
import {Cards,Chart,CountryPicker} from './components/index';
import styles from  '../src/App.module.css';
import {fetchData} from './api';
import imageCovid from '../src/images/imageCovid.png';

class App extends Component {

    constructor (){
        super();
        this.state = {
            cardsData : {},
            chartData : {},
            country : ''
        }
    }
    onChangeCountryHandler = async(country) => {
        console.log(country,'country--0000--')
        const data = await fetchData(country);
        console.log(data,'FETCH DATA SINGLE COUNTRY--0000--')
        this.setState({
            cardsData:data,
            country:country
        })
    }

    async componentDidMount(){
        const data = await fetchData();
        console.log(data,'BEFORE DID MOUNT');
        console.log(this.state.cardsData,'BEFORE DID MOUNT');
        this.setState({
            cardsData:data
        })
        console.log(data,'DID MOUNT');
        console.log(this.state.cardsData,'DID MOUNT');
    }

    render() {
        if(this.state.cardsData != {})
        return (
            <div className={styles.container}>
                <img src={imageCovid} alt="COVID-19" className={styles.covidImagee}/>
                <Cards cardsData = {this.state.cardsData}/>
                  <CountryPicker onChangeCountryHandler={this.onChangeCountryHandler}/>
                <Chart cardsData = {this.state.cardsData} country = {this.state.country}/>
              
            </div>
        )
    }
}

export default App;