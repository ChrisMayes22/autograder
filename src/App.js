import React, { Component } from 'react';
import './App.css';
import testGrader from './utils/gradeTest';
import tests from './utils/tests';
import classes from './App.css';
import uniqid from 'uniqid';


class App extends Component {

  state = {
    points: 0,
    wrongAnswers: {},
    section: '',
    question: 1,
    mistakes: [],
    score: 'Scaled Score: unknown',
    test: {id: 'select test'}
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
        wrongAnswers = {
          'conciseness': 0,
          'inference': 0,
          'punctuation': 0,
          'placement': 0,
          'yes/no': 0,
          'modifying clauses': 0,
          'subject/verb agreement': 0,
          'verb tense': 0,
          'omit/delete': 0,
          'possessives': 0,
          'parallelism':0,
          'transitions':0,
          'pronouns':0,
          'vocab in context':0,
          'adjectives/adverbs':0,
          'passive voice':0,
          'ambiguity/vagueness':0,
          'comparisons':0,
          'fixed expressions':0,
          'prepositions':0
        };
        points = 75; // Max of 75 questions right on the English
        break;
      case 'math':
        wrongAnswers = {
          '1-20':0,
          '21-40':0,
          '41-60':0
        };
        points = 60;
        break;
      case 'reading':
        wrongAnswers = {
          'detail':0,
          'inference':0,
          'purpose':0,
          'vocab in context':0,
          'big picture':0
        };
        points = 40;
        break;
      case 'science':
        wrongAnswers = {
          'detail':0,
          'trend':0,
          'method':0,
          'outside information':0,
          'new information':0,
          'inference':0
        };
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

  
  answerChoiceHandler(choice){
    /*Accepts a string indicating the letter chosen for a given question.
    If the chosen answer is wrong, then finds the type of question missed
    and increments the count on that type in state.wrongAnswers
    */
   let answers = [];
    if(this.state.section === 'english'){
      answers = this.state.test.english.questions
    } else if (this.state.section === 'math'){
      answers = this.state.test.math.questions
    } else if (this.state.section === 'reading'){
      answers = this.state.test.reading.questions
    } else if (this.state.section === 'science'){
      answers = this.state.test.science.questions
    }

    const answer = answers[this.state.question-1]
    const question = this.state.question + 1

    if(answer[0] !== choice){ // Structure of answers is [['a', 'question-type'], ['b', 'question-type]...etc]
      const wrongAnswers = {...this.state.wrongAnswers};
      wrongAnswers[answer[1]] = wrongAnswers[answer[1]] + 1 // ex. increment wrongAnswersCopy['inference']
      const points = this.state.points - 1
      const mistakes = [...this.state.mistakes];
      mistakes.push(`#${this.state.question}`)

      this.setState({...this.state,
        wrongAnswers,
        question,
        points,
        mistakes
      })
    } else {
      this.setState({...this.state,
        question
      })
    }
  }

  getScore(){
    let scorescale = [];
    let points
    if(this.state.section === 'english'){
      scorescale = this.state.test.english.scorescale
      points = 75;
    } else if (this.state.section === 'math'){
      scorescale = this.state.test.math.scorescale
      points = 60;
    } else if (this.state.section === 'reading'){
      scorescale = this.state.test.reading.scorescale
      points = 40;
    } else if (this.state.section === 'science'){
      scorescale = this.state.test.science.scorescale
      points = 40;
    }
    const errors = Object.keys(this.state.wrongAnswers).reduce((accumulator, currentValue) => {
      return accumulator += this.state.wrongAnswers[currentValue]
    }, 0)

    const score = scorescale[points - errors]
    this.setState({ score: `Scaled Score: ${score}` })
  }

  testSelectionHandler(test){
    let target;
    Object.keys(tests).forEach(el =>{
      if(el === test){
        target = tests[el]
      }
    })
    console.log(target);
    this.setState({ test: target });
  }

  render(){
    return (
      <div>
        <div className={classes.flexContainer}>
          <div>
            {`${this.state.test.id}`}
          </div>
          <div className={classes.sections}>
            <button 
              className={classes.sectionButton}
              onClick={() => this.chooseSection('english')}>
              English
            </button>
            <button 
              className={classes.sectionButton}
              onClick={() => this.chooseSection('math')}>
              Math
            </button>
            <button 
              className={classes.sectionButton}
              onClick={() => this.chooseSection('reading')}>
              Reading
            </button>
            <button 
              className={classes.sectionButton}
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
          <div className={classes.answers}>
            <button 
              onClick={() => this.answerChoiceHandler('a')}
              className={classes.answerButton}>
              A
            </button>
            <button 
              onClick={() => this.answerChoiceHandler('b')}
              className={classes.answerButton}>
              B
            </button>
            <button 
              onClick={() => this.answerChoiceHandler('c')}
              className={classes.answerButton}>
              C
            </button>
            <button 
              onClick={() => this.answerChoiceHandler('d')}
              className={classes.answerButton}>
              D
            </button>
            <button 
              onClick={() => this.answerChoiceHandler('e')}
              className={classes.answerButton}>
              E
            </button>
          </div>
        </div>
        <div className={classes.flexContainer}>
          {Object.keys(this.state.wrongAnswers).map(el => {
            if(this.state.wrongAnswers[el] !== 0){
              return(
                <span 
                  id={uniqid('span-')} 
                  key={uniqid('span-')}
                  className={classes.wrongAnswerType}>
                    {`${el}: ${this.state.wrongAnswers[el]}`}
                </span>
              )
            } else {
              return null
            }
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
        <div>
          <button onClick = {() => this.getScore()}>
            Get Score
          </button>
        </div>
        <div>
          {this.state.mistakes.map(el => {
            return(<span key={uniqid('key-')}>
              {` - ${el} - `}
            </span>)
          })}
        </div>
      </div>
    );
  }
}

export default App;
