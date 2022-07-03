import React, { Component } from "react";
import { Outlet } from "react-router-dom";

class layoutFrontend extends Component {
  render() {
    return (
      <>
        {/* <Header /> */}
        <Outlet />
        {/* <Footer /> */}
      </>
    );
  }
}

export default layoutFrontend;
