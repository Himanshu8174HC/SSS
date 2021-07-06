import React from "react";
import Home from "./Containers/Home";
import  SignUpForm from "./Components/form/SignUpForm";
import GenralPro from "./Components/GenralPro";
import AcademicPro from "./Components/AcademicPro";
import CodingPro from "./Components/CodingPro";
import {Switch, Route, Redirect} from "react-router-dom";
import Login from "./Components/form/Login";
import Sucess from "../src/Components/form/Sucess"
import AfterLogin from "./Components/AfterLoginPage";
import {AnimatePresence} from "framer-motion";
import styled from "styled-components";

const Section = styled.section`
    overflow-x :hidden
`




function App() {
 
  return (
    
    <Section>
    <AnimatePresence>
        <Switch >
          <Route exact path = "/" component = {Home} />
          <Route exact path = "/signUp" component = {SignUpForm} />
          <Route exact path = "/Login" component = {Login} />
          <Route exact path = "/genralPro" component = {GenralPro} />
          <Route exact path = "/academicPro" component = {AcademicPro} />
          <Route exact path = "/codingPro" component = {CodingPro} />
          <Route exact path = "/Sucess" component = {Sucess} />
          <Route exact path = "/AfterLogin" component = {AfterLogin} />
          <Redirect to = "/" />
     
        </Switch>
    </AnimatePresence>
    </Section>
    
  );
}

export default App;