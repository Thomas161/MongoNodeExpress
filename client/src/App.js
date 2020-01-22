import React from "react";
import Form from "./components/Form";
import "./App.css";
class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>React Form</h1>
          <Form />
        </div>
      </div>
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
