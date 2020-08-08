import React from 'react';
import InfectedCard from '../Cards/InfectedCard/InfectedCard';
import RecoveredCard from '../Cards/RecoveredCard/RecoveredCard';
import DeathCard from '../Cards/DeathCard/DeathCard';
import styles from './Cards.module.css';
import {Card,Grid,Typography,CardContent} from '@material-ui/core'
import CountUp from 'react-countup';



const Cards = (props) => {
const {confirmed,recovered,deaths,lastUpdate} = props.cardsData;
console.log(props,'CARDS DTAA')

    return (
        <div className = {styles.container}> 
        <Grid container spacing={3} justify ="center">
        <Grid item xs={12} md ={3} component={Card} className={styles.InfectedCard}>
        <CardContent>
            <Typography color = "textSecondary" gutterBottom>
                Infected
            </Typography>
            {
            confirmed && confirmed.value &&
            <Typography variant = "h5">
            <CountUp  start = {0} end = {confirmed.value} duration = {2} separator = ","/>
                
            </Typography>
            }
            <Typography color = "textSecondary">
                {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
                Number of active cases of COVID-19.
            </Typography>
        </CardContent>

        </Grid>
        <Grid item  xs={12} md ={3} component={Card} className={styles.recoveredCard}>
        <CardContent>
            <Typography color = "textSecondary" gutterBottom>
                Recovered
            </Typography>
            {
                recovered && recovered.value &&
                <Typography variant = "h5">
                 <CountUp  start = {0} end = {recovered.value} duration = {2} separator = ","/>
                </Typography>

            }

            <Typography color = "textSecondary">
            {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
                Number of recovered cases of COVID-19.
            </Typography>
        </CardContent>

        </Grid>
        <Grid item  xs={12} md ={3} component={Card} className={styles.deathsCard}>
        <CardContent>
            <Typography color = "textSecondary" gutterBottom>
                Deaths
            </Typography>
            {
                deaths && deaths.value &&
            
            <Typography variant = "h5">
                 <CountUp  start = {0} end = {deaths.value} duration = {2} separator = ","/>
            </Typography>
            }
            <Typography color = "textSecondary">
            {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
                Number of Death cases due to COVID-19.
            </Typography>
        </CardContent>

        </Grid>

        </Grid>
            {/* {
             // Infected Card   
                 confirmed && confirmed.value &&
                <InfectedCard  infectedPatients = {confirmed.value}/>
                
            }
            {
                // recover card
                recovered && recovered.value &&
                <RecoveredCard recoveredPatients = { recovered.value}/>
            }
            {
                // death card
                deaths && deaths && deaths.value &&
                <DeathCard deathPatients = { deaths.value}/>
            }
            {/* {
                lastUpdate && lastUpdate &&
                <h3>{lastUpdate}
                </h3> 
            } */}
            
            
        </div>
    ) 
}

export default Cards;