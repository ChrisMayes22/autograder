import React from 'react';
import classes from './mainHeader.css';
import NavButton from '../navButton/navButton';
import { Link } from 'react-router-dom'
import * as urls from '../../urls/urls';

const mainHeader = (props) => {
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
                    expectedTest={'73e'}
                    clicked={props.clicked}
                />
            </div>
            <div className = {[classes.flexContainer, classes.flexContainer__flexEnd].join(' ')}>
                <button className = {classes.navButton} onClick={props.wrong}>Fill with Wrong Answers</button>
                <button className = {classes.navButton} onClick={props.fill}>Fill with Right Answers</button>
                <Link to={urls.RECAP} onClick={props.endTest}>
                    <button className = {classes.navButton} >Grade Test</button>
                </Link>
            </div>
        </div>
    );
}

export default mainHeader;