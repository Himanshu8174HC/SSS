import React from "react";
import {motion} from "framer-motion"
import {animationTwo ,transition} from "./animation"


function Problems(){
    return <div>
    <motion.div initial = "out" animate = "end" exit = "out" variants = {animationTwo} transition = {transition}>
        <h1>All Problems</h1>
    </motion.div>
    </div>
}
export default Problems;