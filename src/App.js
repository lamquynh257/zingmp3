import React, { Component } from "react";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Route from "./Router/route";

class App extends Component {
  render() {
    return (
      <div>
        {/* <ToastContainer position="top-right" /> */}
        <Route />
      </div>
    );
  }
}

export default App;
