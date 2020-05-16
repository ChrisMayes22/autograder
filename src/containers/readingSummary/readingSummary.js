import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './readingSummary.css'
import { connect } from 'react-redux'; 
import Scorebar from '../../components/scorebar/scorebar';
import Timing from '../../components/timing/timing';
import TypeFeedback from '../../components/typeFeedback/typeFeedback';
import feedback from '../../utils/feedback';
import getTimingFeedback from '../../utils/getTimingFeedback';
import sortObjectAttributes from '../../utils/sortObjectAttributes';
import * as urls from '../../urls/urls';



class ReadingSummary extends Component{

    state = {
        section: 'reading'
    }

    render(){
        return(
            <section className={classes.gridContainer}>
                <div className={classes.composite}>
                    <div className={classes.sectionHeader}>
                        <h1 className={classes.sectionTitle}>
                            READING SCORE
                        </h1>
                    </div>
                    <div className={classes.flexContainer}>
                        <Scorebar score={this.props.reading.score} goal={this.props.goals.reading}/>
                    </div>     
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
                    <button className={[classes.button, classes.selected].join(' ')}>
                        READING SUMMARY
                    </button>
                    <Link to={urls.SCIENCE_SUMMARY}>
                        <button className={classes.button}>
                            SCIENCE SUMMARY
                        </button>
                    </Link>
                    <Link to={urls.WRONG_ANSWERS}>
                        <button className={classes.button}>
                            ERRORS (coaches)
                        </button>
                    </Link>
                </div>
                <div className={[classes.questionTypes, classes.section].join(' ')}>
                    <div className={classes.sectionHeader}>
                        <h1 className={classes.sectionTitle}>
                            ALL ERRORS BY TYPE:
                        </h1>
                    </div>
                    <div className={classes.errorsContainer}>
                        {this.props[this.state.section].wrong.length > 0 
                        ? /* If errors > 0, display list of errors, else display No Errors! */
                            sortObjectAttributes(Object.keys(this.props[this.state.section].types), this.props[this.state.section].types)
                            .map(key => {
                                return(
                                    <div className={classes.errItem}>
                                        <span className={classes.errType}>{`${key.toUpperCase()}:`}</span>  
                                        {this.props[this.state.section].types[key] > 1 ?
                                            `${this.props[this.state.section].types[key]} Errors`
                                        :
                                            `${this.props[this.state.section].types[key]} Error`
                                        }
                                    </div>
                                );
                            }) 
                        :
                            <span className={classes.noErrors}>No Errors!</span>
                        }
                    </div>
                </div>
                <div className={[classes.general, classes.section].join(' ')}>
                    <div className={classes.sectionHeader}>
                        <h1 className={classes.sectionTitle}>
                            TARGETS FOR IMPROVEMENT
                        </h1>
                    </div>
                    <div className={classes.typeFeedback}>
                        {this.props[this.state.section].wrong.length > 0 ?
                            sortObjectAttributes(
                                Object.keys(this.props[this.state.section].types), 
                                this.props[this.state.section].types
                            ).map((key, i, errors) => {
                                if(i < 3){
                                    return(
                                        <TypeFeedback
                                            questionType={
                                                `${sortObjectAttributes( /* Orders question types from most misses to least */
                                                    Object.keys(this.props[this.state.section].types),
                                                    this.props[this.state.section].types
                                                )[i].toUpperCase()} QUESTIONS`
                                            }
                                            feedback={  
                                                feedback.reading[
                                                    sortObjectAttributes(
                                                        Object.keys(this.props[this.state.section].types), 
                                                        this.props[this.state.section].types
                                                    )[i]
                                                ]
                                            }
                                            errors = {errors.length}
                                        />
                                    );
                                } else {
                                    return null;
                                }
                            }) 
                        :
                            <span className={classes.noErrors}>No Errors!</span>
                        }
                    </div>
                </div>
                <div className={[classes.timeManagement, classes.section].join(' ')}>
                    <div className={classes.sectionHeader}>
                        <h1 className={classes.sectionTitle}>
                            TIMING
                        </h1>
                    </div>
                    <div className={classes.errorsContainer}>
                        <Timing time={this.props.timing.reading}/>
                        <div className={this.props.timing.reading === 'onTime' ? classes.medium : null}>
                            {getTimingFeedback('reading', this.props.timing.reading, this.props.guesses.reading)}
                        </div>
                    </div>
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

export default connect(mapStateToProps, null)(ReadingSummary);