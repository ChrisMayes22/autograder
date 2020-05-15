import React from 'react';
import classes from './typeFeedback.css'

const typeFeedback = props => {
    return(
        <div className={classes.container}>
            <div className={classes.questionType}>
                <div>{props.questionType}</div>
            </div>
            <div className={classes.feedback}>
                {props.feedback}
            </div>
        </div>
    )
}

export default typeFeedback