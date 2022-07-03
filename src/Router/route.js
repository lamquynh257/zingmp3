import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import LayoutFrontend from "../Compunent/Frontend/layoutFrontend";
import HomeFrontend from "../Compunent/Frontend/home";
import Test from "../Compunent/ntl/index";
import LoginFrontend from "../Compunent/Frontend/login";

class route extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<LayoutFrontend />}>
          <Route index element={<HomeFrontend />} />
          <Route path="login" element={<LoginFrontend />} />
          <Route path="*" element={<HomeFrontend />} />
        </Route>
        <Route path="/ntl" element={<Test />}>
          <Route index element={<Test />} />
          <Route path="*" element={<HomeFrontend />} />
        </Route>
      </Routes>
    );
  }
}

export default route;
