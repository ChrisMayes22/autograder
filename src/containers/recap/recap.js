import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './recap.css'
import { connect } from 'react-redux'; 
import SectionSummary from '../../components/sectionSummary/sectionSummary';
import Scorebar from '../../components/scorebar/scorebar';
import findBiggestAttr from '../../utils/findBiggestAttr';
import * as urls from '../../urls/urls';
import logo from '../taclogo.png';

class Recap extends Component{
    
    render(){
        return(
            <section className={classes.gridContainer}>
                <div className={classes.header}>
                    <img src={logo} alt={'TAC Logo'}/>
                    <h1>ACT SIMULATION REPORT</h1>
                </div>
                <div className={classes.composite}>
                    <div className={classes.sectionHeader}>
                        <h1 className={classes.sectionTitle}>
                            COMPOSITE SCORE
                        </h1>
                    </div>
                    <div className={classes.flexContainer}>
                        <Scorebar score={this.props.compositeScore} goal={this.props.compositeGoal}/>
                    </div>     
                </div>
                <div className={classes.buttons}>
                    <Link to={'/'}>
                        <button className={classes.button}>
                            START OVER
                        </button>
                    </Link>
                    <button className={[classes.button, classes.selected].join(' ')}>
                        COMPOSITE SUMMARY
                    </button>
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
                    <Link to={urls.WRONG_ANSWERS}>
                        <button className={classes.button}>
                            ERRORS (coaches)
                        </button>
                    </Link>
                </div>
                <div className={[classes.english, classes.section].join(' ')}>
                    <div className={classes.sectionHeader}>
                        <h1 className={classes.sectionTitle}>
                            ENGLISH
                        </h1>
                    </div>
                    <SectionSummary 
                        score={this.props.english.score} 
                        timing={this.props.timing.english}
                        goal={this.props.goals.english}
                    >
                        {Object.keys(this.props.english.types).length > 0 ? /* Ternary checks if there were any errors */
                            `${findBiggestAttr(this.props.english.types).toUpperCase()} QUESTIONS: 
                            ${this.props.english.types[findBiggestAttr(this.props.english.types)]} Errors!` 
                            : 
                            <span>No errors!</span>
                        } 
                    </SectionSummary>
                </div>
                <div className={[classes.math, classes.section].join(' ')}>
                    <div className={classes.sectionHeader}>
                        <h1 className={classes.sectionTitle}>
                            MATH
                        </h1>
                    </div>
                    <SectionSummary 
                        score={this.props.math.score} 
                        timing={this.props.timing.math}
                        goal={this.props.goals.math}
                    >
                        {Object.keys(this.props.math.types).length > 0 ? /* Ternary checks if there were any errors */
                            `QUESTIONS ${findBiggestAttr(this.props.math.types).toUpperCase()}: 
                            ${this.props.math.types[findBiggestAttr(this.props.math.types)]} Errors!` 
                            : 
                            <span>No errors!</span>
                        } 
                    </SectionSummary>
                </div>
                <div className={[classes.reading, classes.section].join(' ')}>
                    <div className={classes.sectionHeader}>
                        <h1 className={classes.sectionTitle}>
                            READING
                        </h1>
                    </div>
                    <SectionSummary 
                        score={this.props.reading.score} 
                        timing={this.props.timing.reading}
                        goal={this.props.goals.reading}
                    >
                        {Object.keys(this.props.reading.types).length > 0 ? /* Ternary checks if there were any errors */
                            `${findBiggestAttr(this.props.reading.types).toUpperCase()} QUESTIONS: 
                            ${this.props.reading.types[findBiggestAttr(this.props.reading.types)]} Errors!` 
                            : 
                            <span>No errors!</span>
                        } 
                    </SectionSummary>
                </div>
                <div className={[classes.science, classes.section].join(' ')}>
                    <div className={classes.sectionHeader}>
                        <h1 className={classes.sectionTitle}>
                            SCIENCE
                        </h1>
                    </div>
                    <SectionSummary 
                        score={this.props.science.score} 
                        timing={this.props.timing.science}
                        goal={this.props.goals.science}
                    >
                        {Object.keys(this.props.science.types).length > 0 ? /* Ternary checks if there were any errors */
                            `${findBiggestAttr(this.props.science.types).toUpperCase()} QUESTIONS: 
                            ${this.props.science.types[findBiggestAttr(this.props.science.types)]} Errors!` 
                            : 
                            <span>No errors!</span>
                        } 
                    </SectionSummary>
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

export default connect(mapStateToProps, null)(Recap);