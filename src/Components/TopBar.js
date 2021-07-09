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
         
         <li >
         <Link  to = "/Login"  className = 'Login'>
         Log In
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