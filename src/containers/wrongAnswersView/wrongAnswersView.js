import React, { Component } from 'react';
import classes from './wrongAnswersView.css'
import { connect } from 'react-redux'; 
import PrintRawData from '../../components/printRawData/printRawData'
import Sidebar from '../../components/sidebar/sidebar';



class WrongAnswersView extends Component{

    render(){
        console.log('AVAILABLE SECTIONS:', this.props.availableSections)
        return(
            <section className={classes.gridContainer}>
                {this.props.availableSections.map(section => {
                    return (
                        <div className={[classes[section], classes.col].join(' ')}>
                            {section.toUpperCase()}
                            <PrintRawData data={this.props[section].wrong}/>
                        </div>
                    )
                })}
                <Sidebar section={'wrong answers'} availableSections={this.props.availableSections}/>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
};

export default connect(mapStateToProps, null)(WrongAnswersView);