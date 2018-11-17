import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { Home, Resume } from './pages';

const App = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/resume" component={Resume} />
			<Route component={Home} />
		</Switch>
	</Router>
);

export default App;
