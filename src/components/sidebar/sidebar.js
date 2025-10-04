import React from 'react';
import { Link } from 'react-router-dom';
import classes from './sidebar.css';
import uniqid from 'uniqid';
import ControlPanel from '../controlPanel/controlPanel';
import sectionLabelMap from '../../utils/sectionLabelMap';

const sidebar = props => {
    console.log('AVAILABLE SECTIONS:', props.availableSections)
    return(
        <div className={classes.buttons}>
            <Link to={'/'}>
                <button className={classes.button}>
                    START OVER
                </button>
            </Link>
            {['composite', ...props.availableSections, 'wrong answers'].map(el => {
                if(props.section === el){
                    return(
                        <button key={uniqid()} className={[classes.button, classes.selected].join(' ')}>
                            {sectionLabelMap[el].toUpperCase()} SUMMARY
                        </button>
                    )
                } else {
                    return(
                        <Link key={uniqid()} to={`/${el}`}>
                            <button className={classes.button}>
                                {sectionLabelMap[el].toUpperCase()} SUMMARY
                            </button>
                        </Link>
                    )
                }
            })}
            <ControlPanel
                section={props.section}
                type='goal'
                value={2}
            />
            <ControlPanel
                section={props.section}
                type='score'
                value={2}
            />
            <button className={classes.button}>
                UPDATED 10/25
            </button>
        </div>
    )
}

export default sidebar;