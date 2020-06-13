import React from 'react';
import classes from './answerRow.css'

const answerRow = props => {

    let lastButton = null;
    if(props.section === 'math'){
        lastButton =    <button 
                            onClick={() => props.clicked('E', props.questionNum)}
                            className={[classes.answerButton, props.selectedAnswer === 'E' ? classes.selected : ''].join(' ')}>
                            {props.questionNum %2 !== 0 ? 'K' : 'E'}
                        </button>;
    }

    return(
        <div className={classes.answers}>
            <button 
                onClick={() => props.clicked('A', props.questionNum)}
                className={[classes.answerButton, props.selectedAnswer === 'A' ? classes.selected : ''].join(' ')}>
                {props.questionNum %2 !== 0 ? 'F' : 'A'}
            </button>
            <button 
                onClick={() => props.clicked('B', props.questionNum)}
                className={[classes.answerButton, props.selectedAnswer === 'B' ? classes.selected : ''].join(' ')}>
                {props.questionNum %2 !== 0 ? 'G' : 'B'}
            </button>
            <button 
                onClick={() => props.clicked('C', props.questionNum)}
                className={[classes.answerButton, props.selectedAnswer === 'C' ? classes.selected : ''].join(' ')}>
                {props.questionNum %2 !== 0 ? 'H' : 'C'}
            </button>
            <button 
                onClick={() => props.clicked('D', props.questionNum)}
                className={[classes.answerButton, props.selectedAnswer === 'D' ? classes.selected : ''].join(' ')}>
                {props.questionNum %2 !== 0 ? 'J' : 'D'}
            </button>
            {lastButton}
            <button 
                onClick={() => props.clicked(null, props.questionNum)}
                className={[classes.answerButton, classes.thin, props.selectedAnswer === null ? classes.wrong : ''].join(' ')}>
                (X)
            </button>
        </div>
    )
}

export default answerRow