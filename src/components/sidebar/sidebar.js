import React from 'react';
import { Link } from 'react-router-dom';
import * as urls from '../../urls/urls';
import classes from './sidebar.css';

const sidebar = props => {
    return(
        <div className={classes.buttons}>
            <Link to={'/'}>
                <button className={classes.button}>
                    START OVER
                </button>
            </Link>
            <Link to={urls.RECAP}>
                <button className={classes.button}>
                    COMPOSITE SUMMARY
                </button>
            </Link>
            {['english', 'reading', 'math', 'science'].map(el => {
                if(props.section === el){
                    return(
                        <button className={[classes.button, classes.selected].join(' ')}>
                            {el.toUpperCase()} SUMMARY
                        </button>
                    )
                } else {
                    return(
                        <Link to={`/${el}`}>
                            <button className={classes.button}>
                                {el.toUpperCase()} SUMMARY
                            </button>
                        </Link>
                    )
                }
            })}
            <Link to={urls.WRONG_ANSWERS}>
                <button className={classes.button}>
                    ERRORS (coaches)
                </button>
            </Link>
        </div>
    )
}

export default sidebar;