import React, { Component } from 'react';
import questionTypes from '../../utils/questionTypes'
import AnswerRow from '../../components/answerRow/answerRow'
import MainHeader from '../../components/mainHeader/mainHeader'
import { connect } from 'react-redux';
import { recordStudentRes } from '../../actions/actions';
import tests from '../../utils/tests';
import classes from './homepage.css';
import uniqid from 'uniqid';


class Homepage extends Component {

  constructor(props){
    super(props)

    this.answerChoiceHandler = this.answerChoiceHandler.bind(this);
    this.testSelectionHandler = this.testSelectionHandler.bind(this);

  }

  state = {
    section: 'english',
    test: tests.a11,
    answers: {
      english: Array(75).fill(null),
      math: Array(60).fill(null),
      reading: Array(40).fill(null),
      science: Array(40).fill(null)
    },
    timing: {
      english: 'onTime',
      math: 'onTime',
      reading: 'onTime',
      science: 'onTime'
    }, 
    goals: {
      english: 25,
      math: 25,
      reading: 25,
      science: 25
    },
    guesses: {
      english: 0,
      math: 0,
      reading: 0,
      science: 0
    },
    err: []
  }


  chooseSection(section){
    /* Accepts a string indicating section
    and updates state with indicated section and its
    associated answer types
    */

    let wrongAnswers;
    let points;
    switch(section){
      case 'english':
        wrongAnswers = questionTypes.english;
        points = 75; // Max of 75 questions right on the English
        break;
      case 'math':
        wrongAnswers = questionTypes.math;
        points = 60;
        break;
      case 'reading':
        wrongAnswers = questionTypes.reading;
        points = 40;
        break;
      case 'science':
        wrongAnswers = questionTypes.science;
        points = 40;
        break;
      default:
        console.log('ERR! input was not section')
    }

    const stateCopy = {...this.state,
                  wrongAnswers,
                  section,
                  points
                };

    this.setState(stateCopy)
  }

  updateTimingHandler(timing){
    const timingCopy = {...this.state.timing}
    timingCopy[this.state.section] = timing;
    this.setState({ timing: timingCopy });
  }

  updateGoalsHandler(e){
    let err = [...this.state.err];
    if(err.includes('goals')){
      const target = err.indexOf('goals')
      err.splice(target, 1)
    }
    const goal = parseInt(e.target.value)
    const goalsCopy = {...this.state.goals};
    if(isNaN(goal)){
      goalsCopy[this.state.section] = 0;
    } else {
      goalsCopy[this.state.section] = goal;
    }
    if(goal > 36 || goal < 11){
      err.push('goals');
    }
    this.setState({ goals: goalsCopy, err });
  }

  updateGuessesHandler(e){
    let err = [...this.state.err];
    if(err.includes('guesses')){
      const target = err.indexOf('guesses')
      err.splice(target, 1)
    }
    const guess = parseInt(e.target.value)
    const guessesCopy = {...this.state.guesses};
    if(isNaN(guess)){
      guessesCopy[this.state.section] = 0
    } else {
      guessesCopy[this.state.section] = guess
    }
    if(guess > this.state.answers[this.state.section].length){
      err.push('guesses');
    }
    this.setState({ guesses: guessesCopy, err });
  }
  
  answerChoiceHandler(choice, index){
    const answersCopy = {...this.state.answers};
    answersCopy[this.state.section][index] = choice;
    this.setState({ answers: answersCopy });
  }

  testSelectionHandler(test){
    let target;
    if(!isNaN(parseInt(test[0]))){
      switch(test){
        case '67f':
          test = 'f67';
          break;
        case '61c':
          test = 'c61';
          break;
        case '72F':
          test = 'f72'
          break;
        case '70G':
          test = 'g70'
          break;
        case '63f':
          test = 'f63'
          break;
        default:
          test = 'e73';
      }
    }
    Object.keys(tests).forEach(el =>{
      if(el === test){
        target = tests[el]
      }
    })
    this.setState({ test: target });
  }

  insertCorrectAnswers(){
    console.log(this.state);
    const answers = {...this.state.answers};
    const correctAnswers = [...this.state.test[this.state.section].questions.map(el => el[0])];
    answers[this.state.section] = correctAnswers;
    console.log('ANSWERS', answers)
    this.setState({ answers });
  }

  insertWrongAnswers(){
    const answers = {...this.state.answers};
    const wrongAnswers = [...this.state.test[this.state.section].questions.map(el => null)];
    answers[this.state.section] = wrongAnswers;
    this.setState({ answers });
  }

  
  render(){
    return (
      <div>
        <MainHeader 
          clicked={this.testSelectionHandler}  
          test={this.state.test.id} 
          fill={() => this.insertCorrectAnswers()}
          wrong = {() => this.insertWrongAnswers()}
          endTest={() => this.props.onRecordStudentRes({
            studentAnswers: this.state.answers, 
            test: this.state.test, 
            timing: this.state.timing,
            goals: this.state.goals,
            guesses: this.state.guesses
          })}
        />
        <div className={classes.inlineFlexContainer}>
          <div className={[classes.inlineFlexContainer, classes.short].join(' ')}>
            <button 
              className={[classes.sectionButton, this.state.section === 'english' ? classes.selected : null].join(' ')}
              onClick={() => this.chooseSection('english')}>
              English
            </button>
            <button 
              className={[classes.sectionButton, this.state.section === 'math' ? classes.selected : null].join(' ')}
              onClick={() => this.chooseSection('math')}>
              Math
            </button>
            <button 
              className={[classes.sectionButton, this.state.section === 'reading' ? classes.selected : null].join(' ')}
              onClick={() => this.chooseSection('reading')}>
              Reading
            </button>
            <button 
              className={[classes.sectionButton, this.state.section === 'science' ? classes.selected : null].join(' ')}
              onClick={() => this.chooseSection('science')}>
              Science
            </button>
            <div className={classes.inlineFlexContainer}>
              <button className={[
                  classes.sectionButton, 
                  classes.small,
                  this.state.timing[this.state.section] === 'onTime' ? classes.selected : null].join(' ')}
                  onClick = {() => this.updateTimingHandler('onTime')}>
                ON TIME
              </button>
              <button className={[
                  classes.sectionButton, 
                  classes.small,
                  this.state.timing[this.state.section] === 'fast' ? classes.selected : null].join(' ')}
                  onClick = {() => this.updateTimingHandler('fast')}>
                TOO FAST
              </button>
              <button className={[
                  classes.sectionButton, 
                  classes.small,
                  this.state.timing[this.state.section] === 'slow' ? classes.selected : null].join(' ')}
                  onClick = {() => this.updateTimingHandler('slow')}>
                TOO SLOW
              </button>
            </div>
          </div>
          <div className={classes.goals}>
            SECTION GOAL:
            <div>
              <input onChange={ (e) => this.updateGoalsHandler(e)} type='text' value={this.state.goals[this.state.section]}/>
              <div className={classes.red}>
                {this.state.err.includes('goals') ? `Goals must be between 11 and 36.` : null}
              </div>
            </div>
            GUESSES:
            <div>
              <input onChange={ (e) => this.updateGuessesHandler(e)} type='text' value={this.state.guesses[this.state.section]}/>
              <div className={classes.red}>
                {this.state.err.includes('guesses') ? `Guesses must be less than ${this.state.answers[this.state.section].length}.` : null}
              </div>
            </div>
          </div>
        </div>
        <div className={[classes.flexContainer, classes.tall].join(' ')}>
          {this.state.test[this.state.section].questions.map((el,i) => {
            return (
                <span key={uniqid()}>
                  <span className={classes.questionNum}>{i+1}) </span>
                  <AnswerRow 
                    clicked = {this.answerChoiceHandler} 
                    selectedAnswer={this.state.answers[this.state.section][i] /* Determines which answer is highlighted */}
                    questionNum={i}
                    section = {this.state.section}
                    key = {uniqid()}
                  />
                </span> 
            )
          })}
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
      onRecordStudentRes: (arr) => dispatch(recordStudentRes(arr))
  }
}

export default connect(null, mapDispatchToProps)(Homepage);
