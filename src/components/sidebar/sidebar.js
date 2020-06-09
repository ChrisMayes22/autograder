import React from 'react';
import { Link } from 'react-router-dom';
import classes from './sidebar.css';
import updateCSSOffset from '../../utils/updateCSSOffset';
import uniqid from 'uniqid';

const sidebar = props => {

    return(
        <div className={classes.buttons}>
            <Link to={'/'}>
                <button className={classes.button}>
                    START OVER
                </button>
            </Link>
            {['composite', 'english', 'reading', 'math', 'science', 'wrong answers'].map(el => {
                if(props.section === el){
                    return(
                        <button key={uniqid()} className={[classes.button, classes.selected].join(' ')}>
                            {el.toUpperCase()} SUMMARY
                        </button>
                    )
                } else {
                    return(
                        <Link key={uniqid()} to={`/${el}`}>
                            <button className={classes.button}>
                                {el.toUpperCase()} SUMMARY
                            </button>
                        </Link>
                    )
                }
            })}
            <button className={classes.button} onClick={() => updateCSSOffset(props.section, 'goal', 2)}>
                Move Goal Right
            </button>
            <button className={classes.button} onClick={() => updateCSSOffset(props.section, 'goal', -2)}>
                Move Goal Left
            </button>
            <button className={classes.button} onClick={() => updateCSSOffset(props.section, 'score', 2)}>
                Move Score Right
            </button>
            <button className={classes.button} onClick={() => updateCSSOffset(props.section, 'score', -2)}>
                Move Score Left
            </button>
        </div>
    )
}

export default sidebar;