import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion"
import {animationOne ,transition} from "./animation"
import image1 from "../Components/bodyimage.svg"
import "./AfterLoginPage.css"


function AfterLogin(){
    const [addrtype] = useState(["Problem Type" ,"Genral Problem", "Academics Problem", "Coding Problem"])
    const Add = addrtype.map(Add => Add
  )
 
    const [open, setOpen] = useState(false)

    return <motion.div initial = "out" animate = "in" exit = "out" variants = {animationOne} transition = {transition}>
    <div>
       <nav>
         <div className = "logo">SSP</div>
         
         <ul className = "nav-links" style = {{transform:open ?"translateX(0px)" :""}}>
         <li>
         <Link to = "/genralPro" activeClassName="active" >
         <a >Genral</a>
         </Link>
         </li>
         <li>
         <Link to = "/academicPro" activeClassName="active" >
         <a >Academic</a>
         </Link>
         </li>
         <li>
         <Link to =  "/codingPro" activeClassName="active">
         <a  >Coding</a>
         </Link>
         </li>
         </ul>
         <i onClick ={() => setOpen(!open) } className="fas fa-bars burger"></i>
        </nav>
         </div>

         <div className = "Bodyrow">
        <div className = "Introbody">
        <h1>Student Support Portal</h1>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Orci a scelerisque purus semper eget duis at tellus at. Scelerisque varius morbi enim nunc faucibus a pellentesque. 
                Accumsan sit amet nulla facilisi morbi tempus. Faucibus ornare suspendisse sed nisi lacus sed. 
            </p>
        </div>

     <div>
    <img  className="bodyimg" src={image1} alt="bodyImg"></img>
    </div>
    
    </div> 
    <div className = "horizontalLineDiv">
    <hr className = "horizontalLine"></hr>
    <hr className = "horizontalLine" ></hr>
    <hr className = "horizontalLine" ></hr>
    </div>
   
    <div className = "AskProblem">
      
    
        <form className="questionInput">
            <h1 className = "AskProblemHeading" >Ask Your Question here</h1>
            <select className="listBoxInput">{
            Add.map((address, key) => <option key={key}value={key}>{address}</option>)}
            </select>
            <input className = "TopicInput"  placeholder = "Topic Tag" />
            <div className="form-group">
            <textarea className = "questioAreaInput" placeholder = "Ask your Question or add a attachment..." />
            <span className = "attachmentIcon"><lable>add attachment</lable><i class="fa fa-paperclip" aria-hidden="true"></i></span>
            </div>
            
            <button className = "questionSubmit">Submit</button>
            

    
        </form>
    
    </div>

    </motion.div>
    
}
export default AfterLogin;