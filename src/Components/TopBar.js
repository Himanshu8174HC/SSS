import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import "./TopBar.css"


 function TopBar(){

  
  
  const [open, setOpen] = useState(false)
  

   return (
     <div>
       <nav>
         <div className = "logo">SSP</div>
         
         <ul className = "nav-links" style = {{transform:open ?"translateX(0px)" :""}}>
         <li>
         <Link to = "/genralPro" >
         <a >Genral</a>
         </Link>
         </li>
         <li>
         <Link to = "/academicPro" >
         <a >Academic</a>
         </Link>
         </li>
         <li>
         <Link to =  "/codingPro">
         <a  >Coding</a>
         </Link>
         </li>
         
         <li >
         <Link  to = "/Login" >
         <a className = 'Login'>Log In</a>
         </Link>
         <Link  to = "/signUp" >
         <button >Sign Up</button>
         </Link>
         </li>
         
         

         </ul>
         <i onClick ={() => setOpen(!open) } className="fas fa-bars burger"></i>
        
       </nav>
     </div>
   )
 }
    
export default TopBar;