import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion"
import {animationOne ,transition} from "./animation"
import image1 from "../Components/bodyimage.svg"
import "./AfterLoginPage.css"
import Note from "./Note"


function AfterLogin(){
    const [addrtype] = useState(["Problem Type" ,"Genral Problem", "Academics Problem", "Coding Problem"])
    const Add = addrtype.map(Add => Add
  )
    const [open, setOpen] = useState(false)

    const [note, setNote] = useState({
        Topic_tag: "",
        content: ""
      });

      function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevNote => {
            return {
              ...prevNote,
              [name]: value
            };
          });
    }

    const [items, setItems] = useState([])

    const addItem = (event) =>{
        if (!(note.content)){

        }else{
        setItems([...items, note])
        setNote({
            Topic_tag: "",
            content: ""
          })}
    event.preventDefault();
    };

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
   <div className = "questionarie">
   <div className = "ProblemDiv">
        <h1 className = "ProblemsHeading">PROBLEMS</h1>
        <hr className = "ProblemsHorizontal"></hr>
        
        
        {items.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            Topic_tag={noteItem.Topic_tag}
            content={noteItem.content}
          />
        );
      })}
      </div>
    <div className = "AskProblem">
      
    
        <form className="questionInput">
            <h1 className = "AskProblemHeading" >Ask Your Question here</h1>
            <select className="listBoxInput">{
            Add.map((address, key) => <option key={key}value={key}>{address}</option>)}
            </select>
            <input name = "Topic_tag" value = {note.Topic_tag} onChange= {handleChange} className = "TopicInput"  placeholder = "Topic Tag..." />
            <div className="form-group">
            <textarea name = "content" value = {note.content} onChange= {handleChange} className = "questioAreaInput" placeholder = "Ask your Question or add a attachment..." />
            <span className = "attachmentIcon"><lable>add attachment</lable><i class="fa fa-paperclip" aria-hidden="true"></i></span>
            </div>
            
            <button className = "questionSubmit" onClick = {addItem} >Submit</button>
            
        </form>
        </div>
        
      </div>
        
    
    

    </motion.div>
    
}
export default AfterLogin;