import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import "./TopBar.css"


 function TopBar(){

  
  
  const [open, setOpen] = useState(false)
  

   return (
     <div>
       <nav>
         <div className = "logo">STUDENT SUPPORT PORTAL</div>
         <ul className = "nav-links" style = {{transform:open ?"translateX(0px)" :""}}>
         <li>
         <Link to = "/genralPro" >
         <a >Genral Problems</a>
         </Link>
         </li>
         <li>
         <Link to = "/academicPro" >
         <a >Academic Problems</a>
         </Link>
         </li>
         <li>
         <Link to =  "/codingPro">
         <a  >Coding Problems</a>
         </Link>
         </li>
         <li>
         <Link  to = "/signUp" >
         <button>Sign Up</button>
         </Link>
         </li>
         

         </ul>
         <i onClick ={() => setOpen(!open) } className="fas fa-bars burger"></i>
       </nav>
     </div>
   )
 }
    
export default TopBar;