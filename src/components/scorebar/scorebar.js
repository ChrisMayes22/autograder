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
                {Array(36).fill('el').map((el, i) => {
                    console.log('PROPS', props.score)
                    if(Math.round(props.score) === i + 1){
                        return (
                            <div className={classes.arrowContainer}>
                                <img key={uniqid()} className={classes.arrow} src={arrow} alt={'an arrow'}/> 
                                <span className={[classes.scoreLabel, classes.leftFloat].join(' ')}>Score</span>
                                <h3 className={[getColor(props.score, props.goal, classes), classes.scoreNum].join(' ')}>{i+1}</h3>
                            </div>
                        );
                    } else if(Math.round(props.goal) === i+1 && props.goal){
                        return (
                            <div className={classes.arrowContainer}>
                                <img key={uniqid()} className={classes.arrow} src={arrow} alt={'an arrow'}/> 
                                <span className={[classes.scoreLabel, classes.rightFloat].join(' ')}>Goal</span>
                                <h3 className={[classes.green, classes.goalNum].join(' ')}>{i+1}</h3>
                            </div>
                        );
                    } else {
                        return <img key={uniqid()} className={[classes.arrow, classes.transparent].join(' ')} src={arrow} alt={'an arrow'}/>
                    }
                })}
            </div>
        </div>
        
    );
}

export default scoreBar;