import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App";
import Resume from "./Resume";
import Instructions from "./Instructions";
import registerServiceWorker from "./registerServiceWorker";

console.log(process.env);

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/instructions" component={Instructions} />
      <Route exact path="/resume" component={Resume} />
      <Route component={App} />
    </Switch>
  </Router>
);

ReactDOM.render(<Routes />, document.getElementById("root"));
registerServiceWorker();
