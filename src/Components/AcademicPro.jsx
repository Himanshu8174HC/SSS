import React from "react";
import {motion} from "framer-motion"
import {animationTwo ,transition} from "./animation"

function AcademicPro(){
    return <div>
    <motion.div initial = "out" animate = "end" exit = "out" variants = {animationTwo} transition = {transition}>  
    
        <h1>AcademicPro</h1>
        
    </motion.div>
    </div>
    

}
export default AcademicPro;