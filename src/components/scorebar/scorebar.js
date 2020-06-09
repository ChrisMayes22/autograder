import React from 'react';
import classes from './scorebar.css';
import arrow from './arrow.png';
import getColor from '../../utils/getColor'
import uniqid from 'uniqid';

const scoreBar = props => {
    return(
        <div className={classes.componentContainer}>
            <div className={classes.scoreBar}>
                <div className={classes.left}/>
                <div className={classes.middle}/>
                <div className={classes.right}/>
            </div>
            <div className={classes.arrowsContainer}>
                <div className={[classes.arrowContainer, classes[`${props.section}ScoreContainer`]].join(' ')}>
                    <img key={uniqid()} className={classes.arrow} src={arrow} alt={'an arrow'}/> 
                    <span className={[classes.scoreLabel, classes.leftFloat].join(' ')}>Score</span>
                    <h3 className={[getColor(props.score, props.goal, classes), classes.scoreNum].join(' ')}>{props.score}</h3>
                </div>
                <div className={[classes.arrowContainer, classes[`${props.section}GoalContainer`]].join(' ')}>
                    <img key={uniqid()} className={classes.arrow} src={arrow} alt={'an arrow'}/> 
                    <span className={[classes.scoreLabel, classes.rightFloat].join(' ')}>Goal</span>
                    <h3 className={[classes.green, classes.goalNum].join(' ')}>{props.goal}</h3>
                </div>
            </div>
        </div>
        
    );
}

export default scoreBar;