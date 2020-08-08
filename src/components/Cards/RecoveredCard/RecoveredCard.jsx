import React from 'react';
import styles from './RecoveredCard.module.css'

export  const RecoveredCard  = (props) => {

    console.log(props.recoveredPatients,'RecoveredCard card patients')
    return (
        <div className = { styles.recoveredCard}>
           <h3> RecoveredCard Patients</h3>
           <h3>{props.recoveredPatients}</h3>
           <h3>Sat Apr 04 2020</h3>
           <h3>Number of recovered cases of Covid-19 cases.</h3>
        </div>
    )
}
export default RecoveredCard;