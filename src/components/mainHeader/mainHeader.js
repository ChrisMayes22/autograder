import React from 'react';
import classes from './mainHeader.css';
import NavButton from '../navButton/navButton';
import { Link } from 'react-router-dom'
import * as urls from '../../urls/urls';
import tests from '../../utils/tests';
import uniqid from 'uniqid';

const mainHeader = (props) => {
    return(
        <div className = {classes.headContainer}>
            <div className = {classes.flexContainer}>
                {Object.keys(tests).map(test => {
                    return(
                        <NavButton 
                            test={props.test}
                            expectedTest={tests[test].id}
                            clicked={props.clicked}
                            key ={uniqid()}
                        />
                    )
                })}
            </div>
            <div className = {[classes.flexContainer, classes.flexContainer__flexEnd].join(' ')}>
                <button className = {classes.navButton} onClick={props.wrong}>Fill with Wrong Answers</button>
                <button className = {classes.navButton} onClick={props.fill}>Fill with Right Answers</button>
                <Link to={urls.COMPOSITE} onClick={props.endTest}>
                    <button className = {classes.navButton} >Grade Test</button>
                </Link>
            </div>
        </div>
    );
}

export default mainHeader;