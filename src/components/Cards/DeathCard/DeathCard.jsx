import React from 'react';
import styles from './DeathCard.module.css'

export  const DeathCard  = (props) => {

    console.log(props.deathPatients,'death card patients')
    return (
        <div className = { styles.deathCard}>
           <h3> Death Patients</h3>
           <h3>{props.deathPatients}</h3>
           <h3>Sat Apr 04 2020</h3>
           <h3>Number of death cases of Covid-19 cases.</h3>
        </div>
    )
}
export default DeathCard;
