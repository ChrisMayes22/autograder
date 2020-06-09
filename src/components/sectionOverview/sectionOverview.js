import React from 'react';
import classes from './sectionOverview.css';
import Timing from '../timing/timing';
import getColor from '../../utils/getColor';



const sectionOverview = props => {
    /*  Displays a summary of the student's score, timing, 
        and most-missed question type.

        Uses props.timing, props.goal, and props.score
    */

    return(
        <div className={classes.flexContainer}>
            <div className={classes.score}>
                <div className={[classes.sectionScore, getColor(props.score, props.goal, classes)].join(' ')}>
                    {props.score}
                </div>
            </div>
            <div className={classes.timing}>
                <div>
                    <Timing time={props.timing}/>
                </div>
            </div>
            <div className={classes.mostMissed}>
                <h2>
                    LARGEST SOURCE OF ERRORS:   
                </h2>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default sectionOverview