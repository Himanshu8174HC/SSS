import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Components/HomeBody.css"; 

function HomeBody(){
    const RightStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "0px",
        fontFamily: "Arial"
      };
    const FormStyle = {
        padding: "150px",
      };
    return(
    <div className = "Bodyrow">
        <div className = "Introbody">
        <h1>Student Support Portal</h1>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Orci a scelerisque purus semper eget duis at tellus at. Scelerisque varius morbi enim nunc faucibus a pellentesque. 
                Accumsan sit amet nulla facilisi morbi tempus. Faucibus ornare suspendisse sed nisi lacus sed. 
            </p>
        </div>

    <div className = "FormControl">
        <div className = "formBody">
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group3">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn  btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#pass">password?</a>
                </p>
            </form>
        </div>
    </div>  

    
    </div>
    )}

export default HomeBody;