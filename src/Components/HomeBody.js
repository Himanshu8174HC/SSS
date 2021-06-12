import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form,Navbar,FormControl,Nav,NavDropdown } from 'react-bootstrap';


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
    return <div>
        <div className = "row">
            <div className = "col-lg-6" style = {RightStyle}>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Orci a scelerisque purus semper eget duis at tellus at. Scelerisque varius morbi enim nunc faucibus a pellentesque. 
                Accumsan sit amet nulla facilisi morbi tempus. Faucibus ornare suspendisse sed nisi lacus sed. 
                Sit amet consectetur adipiscing elit duis tristique sollicitudin. Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. 
                Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Diam quam nulla porttitor massa id neque aliquam vestibulum. Est ante in nibh mauris cursus mattis molestie. 
                Quis eleifend quam adipiscing vitae proin sagittis nisl. Curabitur gravida arcu ac tortor dignissim convallis.
                In tellus integer feugiat scelerisque varius. Fusce ut placerat orci nulla.</p>
            </div>
            <div className = "col-lg-6" style = {FormStyle}>
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

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            </div>  
        </div>
    </div>
}

export default HomeBody;