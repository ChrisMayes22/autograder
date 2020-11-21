import React, { Component } from 'react';
import questionTypes from '../../utils/questionTypes'
import AnswerRow from '../../components/answerRow/answerRow'
import MainHeader from '../../components/mainHeader/mainHeader'
import { connect } from 'react-redux';
import { recordStudentRes } from '../../actions/actions';
import tests from '../../utils/tests';
import classes from './homepage.css';
import uniqid from 'uniqid';
import sectionLabelMap from '../../utils/sectionLabelMap';


class Homepage extends Component {

  constructor(props){
    super(props)

    this.answerChoiceHandler = this.answerChoiceHandler.bind(this);
    this.testSelectionHandler = this.testSelectionHandler.bind(this);

  }

  state = {
    section: 'english',
    test: tests.a11,
    availableSections: ['english', 'math', 'reading', 'science'],
    answers: {
      english: Array(75).fill(null),
      math: Array(60).fill(null),
      reading: Array(40).fill(null),
      science: Array(40).fill(null),
    },
    timing: {
      english: 'onTime',
      math: 'onTime',
      reading: 'onTime',
      science: 'onTime',
    }, 
    goals: {
      english: 25,
      math: 25,
      reading: 25,
      science: 25,
    },
    guesses: {
      english: 0,
      math: 0,
      reading: 0,
      science: 0,
    },
    upperLimit: 36,
    lowerLimit: 10,
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
      case 'satWriting':
        wrongAnswers = questionTypes.english;
        points = 44; 
        break;
      case 'satReading':
        wrongAnswers = questionTypes.reading;
        points = 52;
        break;
      case 'satMath1':
        wrongAnswers = questionTypes.satMath1;
        points = 20;
        break;
      case 'satMath2':
        wrongAnswers = questionTypes.satMath2;
        points = 38;
        break;
      default:
        console.log('ERR! input was not section')
    }

    const stateCopy = {...this.state,
                  wrongAnswers,
                  points,
                  section
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
    if(goal > this.state.upperLimit || goal < this.state.lowerLimit){
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
    let newState = {
      section: 'english',
      test: target,
      availableSections: ['english', 'math', 'reading', 'science'],
      answers: {
        english: Array(75).fill(null),
        math: Array(60).fill(null),
        reading: Array(40).fill(null),
        science: Array(40).fill(null),
      },
      timing: {
        english: 'onTime',
        math: 'onTime',
        reading: 'onTime',
        science: 'onTime',

      }, 
      goals: {
        english: 25,
        math: 25,
        reading: 25,
        science: 25,

      },
      guesses: {
        english: 0,
        math: 0,
        reading: 0,
        science: 0,
      },
      upperLimit: 36,
      lowerLimit: 10,
      err: []
    }
    if(test.toLowerCase().includes('sat')){
      newState = {
        section: 'satReading',
        test: target,
        availableSections: ['satReading', 'satWriting', 'satMath1', 'satMath2'],
        answers: {
          satReading: Array(52).fill(null),
          satWriting: Array(44).fill(null),
          satMath1: Array(20).fill(null),
          satMath2: Array(38).fill(null)
        },
        timing: {
          satReading: 'onTime',
          satWriting: 'onTime',
          satMath1: 'onTime',
          satMath2: 'onTime'
        }, 
        goals: {
          satReading: 400,
          satWriting: 400,
          satMath1: 800,
          satMath2: 800
        },
        guesses: {
          satReading: 0,
          satWriting: 0,
          satMath1: 0,
          satMath2: 0
        },
        upperLimit: 800,
        lowerLimit: 100,
        err: []
      }
    }
    this.setState(newState);
  }

  insertCorrectAnswers(){
    const answers = {...this.state.answers};
    const correctAnswers = [...this.state.test[this.state.section].questions.map(el => {
      if(Array.isArray(el)){
        return el[0]
      } else {
        return el
      }
    })];
    answers[this.state.section] = correctAnswers;
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
            {this.state.availableSections.map((section, i) => {
              return(
                <button 
                  className={[classes.sectionButton, this.state.section === `${section}` ? classes.selected : null].join(' ')}
                  onClick={() => this.chooseSection(`${section}`)} key={uniqid()}>
                  {`${sectionLabelMap[section]}`}
                </button>
              )
            })}
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
                {this.state.err.includes('goals') ? `Goals must be between ${this.state.lowerLimit} and ${this.state.upperLimit}.` : null}
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
            if(['A', 'B', 'C', 'D', 'E'].includes(el[0])){
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
            } else {
              return(
                <span key={uniqid()}>
                  <span className={classes.questionNum}>{i+1}) </span>
                  <select value={this.state.answers[this.state.section][i] === el[0] ? el[0] : 'wrong'} onChange={(e) => this.answerChoiceHandler(e.target.value, i) }>
                    <option>
                      {el[0]}
                    </option>
                    <option value={null}>
                      wrong
                    </option>
                  </select>
                </span> 
              )
            }
            
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
