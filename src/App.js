import React, { Component } from 'react';
import './App.css';
import questionTypes from './utils/questionTypes';
import AnswerRow from './components/answerRow/answerRow'
import MainHeader from './components/mainHeader/mainHeader'
import tests from './utils/tests';
import classes from './App.css';
import uniqid from 'uniqid';


class App extends Component {

  constructor(props){
    super(props)

    this.answerChoiceHandler = this.answerChoiceHandler.bind(this);
    this.testSelectionHandler = this.testSelectionHandler.bind(this);

  }

  state = {
    points: 0,
    section: 'english',
    question: 1,
    test: tests.a11,
    answers: {
      english: Array(75).fill('a'),
      math: Array(60).fill('a'),
      reading: Array(40).fill('a'),
      science: Array(40).fill('a')
    }
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

  
  answerChoiceHandler(choice, index){
    const answersCopy = {...this.state.answers};
    answersCopy[this.state.section][index] = choice;
    console.log('index', index, 'choice', choice)
    console.log('ANSWERS COPY', answersCopy);
    this.setState({ answers: answersCopy });
  }

  testSelectionHandler(test){
    let target;
    Object.keys(tests).forEach(el =>{
      if(el === test){
        target = tests[el]
      }
    })
    this.setState({ test: target });
  }

  render(){
    return (
      <div>
        <MainHeader clicked={this.testSelectionHandler} test={this.state.test.id} />
        <div className={classes.flexContainer}>
          <div className={classes.sections}>
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
          </div>
          <div className={classes.questionNumber}>
            {`Question #${this.state.question}`}
          </div>
          <div className={classes.questionNumber}>
            {this.state.score}
          </div>
        </div>
        <div className={classes.flexContainer}>
          {this.state.test[this.state.section].questions.map((el,i) => {
            return (
              <span>{i+1}) <AnswerRow 
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
        <div>
          <button onClick={() => this.testSelectionHandler('e73')}>
            e73
          </button>
          <button onClick={() => this.testSelectionHandler('a11')}>
            a11
          </button>
        </div>
      </div>
    );
  }
}

export default App;
