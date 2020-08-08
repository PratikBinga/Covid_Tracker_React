import axios from 'axios';

const API_URL = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    console.log(country,'FETCHDATA COUTRY ---')
    try {
        let changedURL = API_URL;
        if(country){
            changedURL =  `${API_URL}/countries/${country}`
        }
        const {data} = await axios.get(changedURL)
            
        const modifiedData = {
            confirmed:data.confirmed,
            recovered:data.recovered,
            deaths:data.deaths,
            lastUpdate:data.lastUpdate
        }
        return modifiedData;
    }
    catch (error) {
        console.log(error, 'error');
    }

}

export const fetchDailyData = async () => {
    try{
        const {data} = await axios.get(`${API_URL}/daily`)
        const dailyModifiedData = data.map((dailyData) => ({
            confirmed : dailyData.confirmed.total,
            deaths : dailyData.deaths.total,
            date: dailyData.reportDate

        }))
        return dailyModifiedData;
        console.log(dailyModifiedData,'DATA daily API')
    }
    catch(error){
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try{
        const {data} = await axios.get(`${API_URL}/countries`);
       return data.countries.map((country,index)=> country.name)
        console.log(data,'countries api data-->')
    }
    catch(error){
        console.log(error,'ERRO fetch countries')
    }

}