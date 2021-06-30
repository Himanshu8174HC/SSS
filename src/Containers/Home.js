import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from "../Components/TopBar";
import HomeBody from "../Components/HomeBody";
import {motion} from "framer-motion"
import {animationOne, transition} from "../Components/animation"




function Home(){
    return <div>
    <motion.div initial = "out" animate = "in" exit = "out" variants = {animationOne} transition = {transition}>
        <TopBar /> 
        <HomeBody /> 
    </motion.div>
    </div>
}
export default Home;