import slowSrc from './slow_down.png';
import onTimeSrc from './right_on_time.png';
import timeOutSrc from './out_of_time.png';
import React from 'react';
import classes from './timing.css';

const timing = props => {

    const options = {
        fast:{
            img: slowSrc,
            str: 'SLOW DOWN!',
            class: classes.red
        },
        onTime:{
            img: onTimeSrc,
            str: 'RIGHT ON TIME!',
            class: classes.green
        },
        slow:{
            img: timeOutSrc,
            str: 'RAN OUT OF TIME!',
            class: classes.red
        }
    }

    return(
        <div className={classes.flexContainer}>
            <img src={options[props.time].img} alt="clock showing how your timing was!"/>
            <div className={[classes.onTime, options[props.time].class].join(' ')}>{options[props.time].str}</div>
        </div>
    )
}

export default timing;