import React from "react";
import Home from "./Containers/Home";
import  SignUpForm from "./Components/SignUpForm";
import GenralPro from "./Components/GenralPro";
import AcademicPro from "./Components/AcademicPro";
import CodingPro from "./Components/CodingPro";
import {Switch, Route, Redirect} from "react-router-dom";
import Login from "./Components/Login"


function App() {
  return (
    <div>
    <Switch>
      <Route exact path = "/" component = {Home} />
      <Route exact path = "/signUp" component = {SignUpForm} />
      <Route exact path = "/Login" component = {Login} />
      <Route exact path = "/genralPro" component = {GenralPro} />
      <Route exact path = "/academicPro" component = {AcademicPro} />
      <Route exact path = "/codingPro" component = {CodingPro} />
      <Redirect to = "/" />
    </Switch>
    </div>
  );
}

export default App;