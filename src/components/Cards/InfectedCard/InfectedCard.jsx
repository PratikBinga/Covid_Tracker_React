import React from 'react';
import styles from './InfectedCard.module.css'

export  const InfectedCard  = (props) => {

    console.log(props.infectedPatients,'INfected card patients')
    return (
        <div className = {styles.infectedCard}>
           <h3> Infected Patients</h3>
           <h3>{props.infectedPatients}</h3>
           <h3>Sat Apr 04 2020</h3>
           <h3>Number of active cases of Covid-19 cases.</h3>
        </div>
    )
}
export default InfectedCard;