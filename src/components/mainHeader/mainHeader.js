import React from 'react';
import classes from './mainHeader.css';
import NavButton from '../navButton/navButton';
import { Link } from 'react-router-dom'

const mainHeader = (props) => {
    console.log('SECTION', props.test)
    return(
        <div className = {classes.headContainer}>
            <div className = {classes.flexContainer}>
                <NavButton 
                    test={props.test}
                    expectedTest={'a11'}
                    clicked={props.clicked}
                />
                <NavButton 
                    test={props.test}
                    expectedTest={'e73'}
                    clicked={props.clicked}
                />
            </div>
            <div className = {[classes.flexContainer, classes.flexContainer__flexEnd].join(' ')}>
                {props.testActive ?
                    <React.Fragment>
                        <button className = {classes.navButton}>Tools</button>
                        <button className = {classes.navButton} onClick={props.clearHighlight}>Clear Highlight</button>
                        <Link to=''>
                            <button className = {classes.navButton} >End Section</button>
                        </Link>
                    </React.Fragment>
                 : null }    
            </div>
        </div>
    );
}

export default mainHeader;