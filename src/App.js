import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

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

export default DragDropContext(HTML5Backend)(App);
