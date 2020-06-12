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
                            score={this.props.composite.score} 
                            goal={this.props.composite.goal} 
                            section="composite"
                        />
                    </div>     
                </div>
                <Sidebar section={'composite'}/>
                    {['english', 'math', 'reading', 'science'].map(section => {
                        return(
                        <div className={[classes[section], classes.section].join(' ')}>
                            <SectionOverview 
                                score={this.props[section].score} 
                                timing={this.props[section].timing} 
                                goal={this.props[section].goal} 
                                section={section}
                            >
                                {
                                    Object.keys(this.props[section].types).length === 1 ? /* Ternary checks if there was one error */
                                    `${findBiggestAttr(this.props[section].types).toUpperCase()} QUESTIONS: 
                                    ${this.props[section].types[findBiggestAttr(this.props[section].types)]} Error` 
                                    : 
                                    Object.keys(this.props[section].types).length > 0 ? /* Ternary checks if there was more than one error */
                                    `${findBiggestAttr(this.props[section].types).toUpperCase()} QUESTIONS: 
                                    ${this.props[section].types[findBiggestAttr(this.props[section].types)]} Errors` 
                                    :
                                    <span>No errors</span>
                                } 
                            </SectionOverview>
                        </div>
                        )
                    })}
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