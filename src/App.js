import React from 'react';
import Homepage from './containers/homepage/homepage';
import CompositeSummary from './containers/composite/composite';
import SectionSummary from'./containers/sectionSummary/sectionSummary'
import WrongAnswers from './containers/wrongAnswersView/wrongAnswersView'
import { Switch, Route } from 'react-router-dom';
import * as urls from './urls/urls'

const App = () => {
  return (
    <Switch>
      <Route path={urls.COMPOSITE} component={CompositeSummary}/>
      <Route path={urls.WRONG_ANSWERS} component={WrongAnswers}/>
      <Route path={'/:section'} component={SectionSummary}/>
      <Route path={'/'} component={Homepage}/>
    </Switch>
  );
}

export default App;
