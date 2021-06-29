import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Components/HomeBody.css"; 
import image1 from "../Components/bodyimage.svg"

function HomeBody(){
    
    return(
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

    
    
    )}

export default HomeBody;