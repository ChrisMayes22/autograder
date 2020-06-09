import React, { Component } from 'react';
import classes from './wrongAnswersView.css'
import { connect } from 'react-redux'; 
import PrintRawData from '../../components/printRawData/printRawData'
import Sidebar from '../../components/sidebar/sidebar';



class WrongAnswersView extends Component{

    render(){
        return(
            <section className={classes.gridContainer}>
                <div className={classes.english}>
                    ENGLISH
                    <PrintRawData data={this.props.english.wrong}/>
                </div>
                <div className={classes.math}>
                    MATH
                    <PrintRawData data={this.props.math.wrong}/>
                </div>
                <div className={classes.reading}>
                    READING
                    <PrintRawData data={this.props.reading.wrong}/>
                </div>
                <div className={classes.science}>
                    SCIENCE
                    <PrintRawData data={this.props.science.wrong}/>
                </div>
                <Sidebar section={'wrong answers'}/>
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