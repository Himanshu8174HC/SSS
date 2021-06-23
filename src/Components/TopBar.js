import React, { useState } from 'react';

import SignUpForm from './SignUpForm';
import "./TopBar.css"


 function TopBar(){

  
  
  const [open, setOpen] = useState(false)
  const [page, setPage] = useState("");
  

   return (
     <div>
       <nav>
         <div className = "logo">STUDENT SUPPORT PORTAL</div>
         <ul className = "nav-links" style = {{transform:open ?"translateX(0px)" :""}}>
         <li>
         <a>Genral Problems</a>
         </li>
         <li>
         <a>Academic Problems</a>
         </li>
         <li>
         <a>Coding Problems</a>
         </li>
         <li>
         <button onClick={() => setPage("./SignUpForm")}>Sign Up</button>
         </li>
         {page === "./SignUpForm" ? <SignUpForm/> : null}

         </ul>
         <i onClick ={() => setOpen(!open) } className="fas fa-bars burger"></i>
       </nav>
     </div>
   )
 }
    
export default TopBar;