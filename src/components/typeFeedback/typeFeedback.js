import React from 'react';
import classes from './typeFeedback.css'

const typeFeedback = props => {
    
    let size = null

    if(props.errors === 1){
        size = classes.big
    }else if(props.errors === 2){
        size = classes.medium
    } 

    return(
        <div className={classes.container}>
            <div className={classes.questionType}>
                <div>{props.questionType}</div>
            </div>
            <div className={[classes.feedback, size].join(' ')}>
                <span className={classes.feedbackText}>{props.feedback}</span>
            </div>
        </div>
    )
}

export default typeFeedback