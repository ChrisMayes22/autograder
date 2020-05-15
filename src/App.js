import React from 'react';
import Homepage from './containers/homepage/homepage';
import Recap from './containers/recap/recap';
import EnglishSummary from'./containers/englishSummary/englishSummary'
import MathSummary from'./containers/mathSummary/mathSummary'
import ReadingSummary from'./containers/readingSummary/readingSummary'
import ScienceSummary from'./containers/scienceSummary/scienceSummary'
import WrongAnswers from './containers/wrongAnswersView/wrongAnswersView'
import { Switch, Route } from 'react-router-dom';
import * as urls from './urls/urls'

const App = () => {
  return (
    <Switch>
      <Route path={urls.RECAP} component={Recap}/>
      <Route path={urls.ENGLISH_SUMMARY} component={EnglishSummary}/>
      <Route path={urls.MATH_SUMMARY} component={MathSummary}/>
      <Route path={urls.READING_SUMMARY} component={ReadingSummary}/>
      <Route path={urls.SCIENCE_SUMMARY} component={ScienceSummary}/>
      <Route path={urls.WRONG_ANSWERS} component={WrongAnswers}/>
      <Route path={'/'} component={Homepage}/>
    </Switch>
  );
}

export default App;
