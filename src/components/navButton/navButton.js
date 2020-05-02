import React from 'react';
import classes from './navButton.css'

const navButton = props => {
    return(
        <button 
            className = {[classes.navButton, props.test === props.expectedTest ? classes.selected : null].join(' ')} 
            onClick = {() => props.clicked(props.expectedTest)}
            children={props.expectedTest.toUpperCase()}
        />
    )   
}

export default navButton