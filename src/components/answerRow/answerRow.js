import React from 'react';
import classes from './answerRow.css'

const answerRow = props => {

    let lastButton = null;
    if(props.section === 'math'){
        lastButton =    <button 
                            onClick={() => props.clicked('e', props.questionNum)}
                            className={[classes.answerButton, props.selectedAnswer === 'e' ? classes.selected : ''].join(' ')}>
                            {props.questionNum %2 !== 0 ? 'K' : 'E'}
                        </button>;
    }

    return(
        <div className={classes.answers}>
            <button 
                onClick={() => props.clicked('a', props.questionNum)}
                className={[classes.answerButton, props.selectedAnswer === 'a' ? classes.selected : ''].join(' ')}>
                {props.questionNum %2 !== 0 ? 'F' : 'A'}
            </button>
            <button 
                onClick={() => props.clicked('b', props.questionNum)}
                className={[classes.answerButton, props.selectedAnswer === 'b' ? classes.selected : ''].join(' ')}>
                {props.questionNum %2 !== 0 ? 'G' : 'B'}
            </button>
            <button 
                onClick={() => props.clicked('c', props.questionNum)}
                className={[classes.answerButton, props.selectedAnswer === 'c' ? classes.selected : ''].join(' ')}>
                {props.questionNum %2 !== 0 ? 'H' : 'C'}
            </button>
            <button 
                onClick={() => props.clicked('d', props.questionNum)}
                className={[classes.answerButton, props.selectedAnswer === 'd' ? classes.selected : ''].join(' ')}>
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