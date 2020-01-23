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
          <Route component={Error} />
        </Switch>
      </Router>
    );
  }
}
export default App;

// componentDidMount() {
//   this.callBackendAPI()
//     .then(res =>
//       this.setState({ data: res.express, customers: customers.firstname })
//     )
//     .catch(err => console.log(err));
// }
// callBackendAPI = async () => {
//   const response = await fetch("/backend");
//   const body = await response.json();

//   if (response.status !== 200) {
//     throw Error(body.message);
//   }
//   return body;
// };
