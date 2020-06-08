import React, { Component } from 'react';
import classes from './sectionSummary.css'
import { connect } from 'react-redux'; 
import Scorebar from '../../components/scorebar/scorebar';
import Sidebar from '../../components/sidebar/sidebar';
import Timing from '../../components/timing/timing';
import TypeFeedback from '../../components/typeFeedback/typeFeedback';
import feedback from '../../utils/feedback';
import getTimingFeedback from '../../utils/getTimingFeedback';
import sortObjectAttributes from '../../utils/sortObjectAttributes';

class SectionSummary extends Component{

    render(){
        console.log('PARAMS', this.props.match.params.section)
        return(
            <section className={classes.gridContainer}>
                <div className={classes.composite}>
                    <div className={classes.sectionHeader}>
                        <h1 className={classes.sectionTitle}>
                            {this.props.match.params.section.toUpperCase()} SCORE
                        </h1>
                    </div>
                    <div className={classes.flexContainer}>
                        <Scorebar 
                            score={this.props[this.props.match.params.section].score} 
                            goal={this.props.goals[this.props.match.params.section]}
                        />
                    </div>     
                </div>
                <Sidebar section={this.props.match.params.section}/>
                <div className={[classes.questionTypes, classes.section].join(' ')}>
                    <div className={classes.sectionHeader}>
                        <h1 className={classes.sectionTitle}>
                            ALL ERRORS BY TYPE:
                        </h1>
                    </div>
                    <div className={classes.errorsContainer}>
                        {this.props[this.props.match.params.section].wrong.length > 0 
                        ? /* If errors > 0, display list of errors, else display No Errors! */
                            sortObjectAttributes(Object.keys(this.props[this.props.match.params.section].types), 
                            this.props[this.props.match.params.section].types).map(key => {
                                return(
                                    <div className={classes.errItem}>
                                        <span className={classes.errType}>{`${key.toUpperCase()}:`}</span>  
                                        {this.props[this.props.match.params.section].types[key] > 1 ?
                                            `${this.props[this.props.match.params.section].types[key]} Errors`
                                        :
                                            `${this.props[this.props.match.params.section].types[key]} Error`
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
                        {this.props[this.props.match.params.section].wrong.length > 0 ?
                            sortObjectAttributes(
                                Object.keys(this.props[this.props.match.params.section].types), 
                                this.props[this.props.match.params.section].types
                            ).map((key, i, errors) => {
                                if(i < 3){
                                    return(
                                        <TypeFeedback
                                            questionType={
                                                `${sortObjectAttributes( /* Orders question types from most misses to least */
                                                    Object.keys(this.props[this.props.match.params.section].types),
                                                    this.props[this.props.match.params.section].types
                                                )[i].toUpperCase()} QUESTIONS`
                                            }
                                            feedback={  
                                                feedback[this.props.match.params.section][
                                                    sortObjectAttributes(
                                                        Object.keys(this.props[this.props.match.params.section].types), 
                                                        this.props[this.props.match.params.section].types
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
                        <Timing time={this.props.timing[this.props.match.params.section]}/>
                        <div className={this.props.timing[this.props.match.params.section] === 'onTime' ? classes.medium : null}>
                            {getTimingFeedback(
                                this.props.match.params.section, 
                                this.props.timing[this.props.match.params.section], 
                                this.props.guesses[this.props.match.params.section]
                            )}
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

export default connect(mapStateToProps, null)(SectionSummary);