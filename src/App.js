import React from 'react';
import Homepage from './containers/homepage/homepage';
import Recap from './containers/recap/recap';
import SectionSummary from'./containers/sectionSummary/sectionSummary'
import WrongAnswers from './containers/wrongAnswersView/wrongAnswersView'
import { Switch, Route } from 'react-router-dom';
import * as urls from './urls/urls'

const App = () => {
  return (
    <Switch>
      <Route path={urls.RECAP} component={Recap}/>
      <Route path={urls.WRONG_ANSWERS} component={WrongAnswers}/>
      <Route path={'/:section'} component={SectionSummary}/>
      <Route path={'/'} component={Homepage}/>
    </Switch>
  );
}

export default App;
