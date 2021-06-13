import React from 'react';
import { Modal, Form, Input, Button, Checkbox } from 'antd';

import SignUpForm from './SignUpForm';

class TopBar extends React.Component {
  state = {
    modal1Visible: false,
    modal2Visible: false,
  };

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }

  render() {
    return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand">STUDENT SUPPORT PORTAL</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#genralPro">Genral Problem </a>
      <a class="nav-item nav-link" href="#acedemicPro">Academic Problem</a>
      <a class="nav-item nav-link" href="#codingPro">Coding Problem</a>
      <button type="button" class="btn btn-link">Log In</button> 
      <>
        <Button type="primary" onClick={() => this.setModal1Visible(true)}>
          SignUp
        </Button>
        <Modal
          title="20px to Top"
          style={{ top: 20 }}
          visible={this.state.modal1Visible}
          onOk={() => this.setModal1Visible(false)}
          onCancel={() => this.setModal1Visible(false)}
        >
        <SignUpForm />
        </Modal>
      </>
    </div>
  </div>
       </nav>
    );
  }
}
export default TopBar;