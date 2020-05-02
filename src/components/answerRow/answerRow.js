import React from 'react';
import classes from './answerRow.css'

const answerRow = props => {

    let lastButton = null;
    if(props.section === 'math'){
        lastButton =    <button 
                            onClick={() => props.clicked('e', props.questionNum)}
                            className={[classes.answerButton, props.selectedAnswer === 'e' ? classes.selected : ''].join(' ')}>
                            E
                        </button>;
    }

    return(
        <div className={classes.answers}>
            <button 
                onClick={() => props.clicked('a', props.questionNum)}
                className={[classes.answerButton, props.selectedAnswer === 'a' ? classes.selected : ''].join(' ')}>
                A
            </button>
            <button 
                onClick={() => props.clicked('b', props.questionNum)}
                className={[classes.answerButton, props.selectedAnswer === 'b' ? classes.selected : ''].join(' ')}>
                B
            </button>
            <button 
                onClick={() => props.clicked('c', props.questionNum)}
                className={[classes.answerButton, props.selectedAnswer === 'c' ? classes.selected : ''].join(' ')}>
                C
            </button>
            <button 
                onClick={() => props.clicked('d', props.questionNum)}
                className={[classes.answerButton, props.selectedAnswer === 'd' ? classes.selected : ''].join(' ')}>
                D
            </button>
            {lastButton}
        </div>
    )
}

export default answerRow