import React, { Component } from 'react';
import classes from './composite.css'
import { connect } from 'react-redux'; 
import SectionOverview from '../../components/sectionOverview/sectionOverview';
import Scorebar from '../../components/scorebar/scorebar';
import findBiggestAttr from '../../utils/findBiggestAttr';
import logo from '../taclogo.png';
import Sidebar from '../../components/sidebar/sidebar';

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
                        <Scorebar 
                            score={this.props.compositeScore} 
                            goal={this.props.compositeGoal} 
                            section="composite"
                        />
                    </div>     
                </div>
                <Sidebar section={'composite'}/>
                <div className={[classes.english, classes.section].join(' ')}>
                    <div className={classes.sectionHeader}>
                        <h1 className={classes.sectionTitle}>
                            ENGLISH
                        </h1>
                    </div>
                    <SectionOverview 
                        score={this.props.english.score} 
                        timing={this.props.timing.english}
                        goal={this.props.goals.english}
                    >
                        {Object.keys(this.props.english.types).length === 1 ? /* Ternary checks if there was one error */
                            `${findBiggestAttr(this.props.english.types).toUpperCase()} QUESTIONS: 
                            ${this.props.english.types[findBiggestAttr(this.props.english.types)]} Error` 
                            : 
                            Object.keys(this.props.english.types).length > 0 ? /* Ternary checks if there was more than one error */
                            `${findBiggestAttr(this.props.english.types).toUpperCase()} QUESTIONS: 
                            ${this.props.english.types[findBiggestAttr(this.props.english.types)]} Errors` 
                            :
                            <span>No errors</span>
                        } 
                    </SectionOverview>
                </div>
                <div className={[classes.math, classes.section].join(' ')}>
                    <div className={classes.sectionHeader}>
                        <h1 className={classes.sectionTitle}>
                            MATH
                        </h1>
                    </div>
                    <SectionOverview 
                        score={this.props.math.score} 
                        timing={this.props.timing.math}
                        goal={this.props.goals.math}
                    >
                        {Object.keys(this.props.math.types).length > 0 ? /* Ternary checks if there were any errors */
                            `QUESTIONS ${findBiggestAttr(this.props.math.types).toUpperCase()}: 
                            ${this.props.math.types[findBiggestAttr(this.props.math.types)]} Errors` 
                            : 
                            <span>No errors</span>
                        } 
                    </SectionOverview>
                </div>
                <div className={[classes.reading, classes.section].join(' ')}>
                    <div className={classes.sectionHeader}>
                        <h1 className={classes.sectionTitle}>
                            READING
                        </h1>
                    </div>
                    <SectionOverview 
                        score={this.props.reading.score} 
                        timing={this.props.timing.reading}
                        goal={this.props.goals.reading}
                    >
                        {Object.keys(this.props.reading.types).length > 0 ? /* Ternary checks if there were any errors */
                            `${findBiggestAttr(this.props.reading.types).toUpperCase()} QUESTIONS: 
                            ${this.props.reading.types[findBiggestAttr(this.props.reading.types)]} Errors` 
                            : 
                            <span>No errors</span>
                        } 
                    </SectionOverview>
                </div>
                <div className={[classes.science, classes.section].join(' ')}>
                    <div className={classes.sectionHeader}>
                        <h1 className={classes.sectionTitle}>
                            SCIENCE
                        </h1>
                    </div>
                    <SectionOverview 
                        score={this.props.science.score} 
                        timing={this.props.timing.science}
                        goal={this.props.goals.science}
                    >
                        {Object.keys(this.props.science.types).length > 0 ? /* Ternary checks if there were any errors */
                            `${findBiggestAttr(this.props.science.types).toUpperCase()} QUESTIONS: 
                            ${this.props.science.types[findBiggestAttr(this.props.science.types)]} Errors` 
                            : 
                            <span>No errors</span>
                        } 
                    </SectionOverview>
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