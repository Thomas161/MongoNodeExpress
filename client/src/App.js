import React from "react";
import Form from "./components/Form";
import { Error } from "./components/Error";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Form} exact />
          {/* Add additional front end component routes */}
          <Route component={Error} />
        </Switch>
      </Router>
    );
  }
}
export default App;
