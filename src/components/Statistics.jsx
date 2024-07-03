import React from "react"
import '/src/components/styles.css';
import propTypes from "prop-types";

export default function Statistics({good, neutral, bad, total, positivePercentage }){
    
    return(
        <div style={{display : total === 0 ? "none" : "block"}}>
            <p>Good : {good}</p>
            <p>Neutral : {neutral}</p>
            <p>Bad : {bad}</p>
            <p>Positive Feedback : {positivePercentage}%</p>
        </div>
    )   
}

Statistics.propTypes = {
    good : propTypes.number,
    neutral : propTypes.number,
    bad : propTypes.number,
    total : propTypes.number,
    positivePercentage : propTypes.number.isRequired
}
