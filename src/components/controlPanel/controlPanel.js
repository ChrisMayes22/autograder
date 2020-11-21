import React from 'react';
import classes from './controlPanel.css';
import updateCSSOffset from '../../utils/CSShandlers/updateCSSOffset';
import updateCSSColors from '../../utils/CSShandlers/updateCSSColors';

const controlPanel = props => {
    return(
        <div className={classes.controlPanel}>
            <div className={classes.panelRow}>
                {props.type.toUpperCase()} CONTROLS
            </div>
            <div className={classes.panelRow}>
            <button className={classes.horizontalArrow} onClick={() => updateCSSOffset(props.section, props.type, -(props.value))}>
                    ←
                </button>
                <button className={classes.horizontalArrow} onClick={() => updateCSSOffset(props.section, props.type, props.value)}>
                    →
                </button>   
            </div>
            <div className={classes.panelRow}>
                <button className={classes.greenButton} onClick={() => updateCSSColors(props.section, props.type, '#04B14D')}>
                </button>
                <button className={classes.yellowButton} onClick={() => updateCSSColors(props.section, props.type, 'rgb(208, 134, 22)')}>
                </button>
                <button className={classes.redButton} onClick={() => updateCSSColors(props.section, props.type, '#D0161E')}>
                </button>
            </div>
        </div>
    )
}

export default controlPanel;