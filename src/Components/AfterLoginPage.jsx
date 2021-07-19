import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion"
import {animationOne ,transition} from "./animation"
import image1 from "../Components/bodyimage.svg"
import "./AfterLoginPage.css"
import Select from "react-select";
import Note from "./Note"



function AfterLogin(){

    
    const [open, setOpen] = useState(false)
    const [items, setItems] = useState([])
    const [update, setupdate] = useState(true);
    const [Edited, setEdited] = useState(null);
    const [Type, setType] = useState("ProType");
    

    const [note, setNote] = useState({
        Topic_tag: "",
        content: "",
      });



    

    const addItem = (event) =>{
        if (!(note.content) ||!(note.Topic_tag)) {
          alert("Empty Topic Tag or question field")
        }else if (Type === "ProType"){
           alert("Please select Problem Type")
        }
        else if(note && !update){
          setItems(
            items.map((noteItem) => {
              if (noteItem.id === Edited){
                return{ ...noteItem, name:note}
              }
              return noteItem
              
            })
          )
          
          setupdate(true)
          setNote({
            Topic_tag: "",
            content: ""
          })
          setEdited(null)
        }
        
          else{
          const allNote = {id: new Date().getTime().toString(), name:note}
          setItems([...items, allNote])
          setNote({
            Topic_tag: "",
            content: ""
          })
        setType("ProType")}
    event.preventDefault();
    };

    const deleteNote = (index) => {
      
      const updateItems = items.filter((noteItem) => {
        return index !== noteItem.id;
      });
      setItems(updateItems)
      
    };

    const editNote = (id) =>{
      let newEditItem = items.find((noteItem) =>{
        return (noteItem.id === id)
     
    });

     
    setupdate(false)
    setNote(newEditItem.name)
    setEdited(id)
    
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => {
        return {
         ...prevNote,
          [name]: value,
        };
      })
      
      
}
const options = [
  { value: "ProType",  label: "Select Problem Type",isDisabled: true},
  { value: "GenralPro", label: "Genral Problem" },
  { value: "AcadPro", label: "Academic Problem" },
  { value: "CodingPro", label: "Coding Problem" }
];

const handleChangeAfter = (value) => {
  setType(value);
};
  
  
return <motion.div initial = "out" animate = "in" exit = "out" variants = {animationOne} transition = {transition}>
    <div>
       <nav>
         <Link className = "AfterLoginLogoLink" to = "/"><div className = "Afterloginlogo">SSP</div></Link>
         
         <ul className = "nav-links" style = {{transform:open ?"translateX(0px)" :""}}>
         <li>
         <Link to = "/genralPro"  >
         Genral
         </Link>
         </li>
         <li>
         <Link to = "/academicPro"  >
         Academic
         </Link>
         </li>
         <li>
         <Link to =  "/codingPro" >
         Coding
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
        <h1 className = "ProblemsHeading">How it Works?</h1>
        <hr className = "ProblemsHorizontal"></hr>
        
        
        {/* {items.map((noteItem) => {} )} */}
        
          
          <p className = "ProblemDivPara" >
          You can ask your question in the right box first you hace to select problem type (there are three type problem defined genral, academic, coding) 
          after seleting you have to feel the problem tag like subject name or question related field or DS type or algo type after that you can write your problem or 
          attach a image or file then click on submit button your question add in queue in the diffrent link defined as Genral , Academic and Coding (on the top of page or Below)
          you can go to these link and edit or delete your question or by clicking your question see the answer given by other students.
          </p>
        
        <ul className = "WorkLinks">
        <div className = "WorkLinksDiv" >
        <i className="far fa-dot-circle"></i>
        <li>
         <Link className = "WorkAnchor" to = "/genralPro"  >
         Genral Problems
         </Link>
         </li>
        </div>
        <div className = "WorkLinksDiv">
        <i className="far fa-dot-circle"></i>
         <li>
         <Link className = "WorkAnchor" to = "/academicPro"  >
         Academic Problems
         </Link>
         </li>
        </div>
         <div className = "WorkLinksDiv">
         <i className="far fa-dot-circle"></i>
         <li>
         <Link  className = "WorkAnchor" to =  "/codingPro" >
         Coding Problems
         </Link>
         </li>
         </div>
         </ul>
         
          {/* <Note
            key={noteItem.id}
            id={noteItem.id}
            Topic_tag={noteItem.name.Topic_tag}
            content={(noteItem.name.content.replace(/\s/g,'').substring(0,50) + "...")}
            onDelete={deleteNote}
            onEdit = {editNote}
          /> */}
        
     
      
      </div>
    <div className = "AskProblem">
      
    
        <form className="questionInput"  >
            <h1 className = "AskProblemHeading" >Ask Your Question here</h1>
            <Select
                  minMenuHeight= "300px"
                  isSearchable={false}
                  value={Type}
                  onChange={handleChangeAfter}
                  options={options}
            />
            <input name = "Topic_tag" value = {note.Topic_tag} onChange= {handleChange} className = "TopicInput"  placeholder = "Topic Tag..." />
            <div className="form-group">
            <textarea name = "content" value = {note.content} onChange= {handleChange} className = "questioAreaInput" placeholder = "Ask your Question or add a attachment..." />
            <span className = "attachmentIcon"><span>add attachment</span><i className="fa fa-paperclip" aria-hidden="true"></i></span>
            </div>
            {
              update ? <button className = "questionSubmit" onClick = {addItem}>Submit</button> :
              <button className = "questionSubmit" onClick = {addItem} >Update</button>
            }
            
            
        </form>
        </div>
        
      </div>
        
    
    

    </motion.div>
    
}
export default AfterLogin;