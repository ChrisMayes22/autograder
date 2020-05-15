import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './wrongAnswersView.css'
import { connect } from 'react-redux'; 
import PrintRawData from '../../components/printRawData/printRawData'
import * as urls from '../../urls/urls';



class WrongAnswersView extends Component{

    state = {
        section: 'science'
    }

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
                    <Link to={urls.ENGLISH_SUMMARY}>
                        <button className={classes.button}>
                            ENGLISH SUMMARY
                        </button>
                    </Link>
                    <Link to={urls.MATH_SUMMARY}>
                        <button className={classes.button}>
                            MATH SUMMARY
                        </button>
                    </Link>
                    <Link to={urls.READING_SUMMARY}>
                        <button className={classes.button}>
                            READING SUMMARY
                        </button>
                    </Link>
                    <Link to={urls.SCIENCE_SUMMARY}>
                        <button className={classes.button}>
                            SCIENCE SUMMARY
                        </button>
                    </Link>
                    <button className={[classes.button, classes.selected].join(' ')}>
                        ERRORS (coaches)
                    </button>
                </div>
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