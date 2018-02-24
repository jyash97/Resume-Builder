import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import App from './App';
import Resume from './Resume';
import registerServiceWorker from './registerServiceWorker';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/resume' component={Resume} />
      <Route component={App} />
    </Switch>
  </Router>
)

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
