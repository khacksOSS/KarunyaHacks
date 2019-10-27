// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom';
import './form.css';
import styled from 'styled-components';
import axios from 'axios';

const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 0 0.6em;
  display:block;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

class Welcome extends React.Component {
  resetForm(){
    document.getElementById('contact-form').reset();
  }
  handleSubmit(e){
    e.preventDefault();
    const subject = document.getElementById('subject').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    axios({
        method: "POST", 
        url:"http://localhost:3002/send", 
        data: {
            subject: subject,   
            email: email,  
            messsage: message
        }
    }).then((response)=>{
        if (response.data.msg === 'success'){
            alert("Message Sent."); 
            this.resetForm()
        }else if(response.data.msg === 'fail'){
            alert("Message failed to send.")
        }
    })
}
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)} method="POST" id="contact-form">
          <div id='contact_form'>
            <div id='top_menu'>
              <div id='new_message'>New Message</div>
              <img id ='wrong' src={require('./images/menu.png')}></img>
            </div>
            <div id="sub_part">
            <div id='details'>
              <div id='to'>From : </div>
              <input type="email" className="form-option" id="email" placeholder="Your mail address" />
              <hr></hr>
              <div id='from'>Subject : </div>
              <input type="text" className="form-option1" id="subject" placeholder="Subject" />
              <hr></hr>
            </div>
            <div id='body_part'>            
              <textarea className="form-option2" rows="5" id="message" placeholder="Drop your Message ...!!!"></textarea>
            </div>
            <img id ='bottom_image' src={require('./images/bottom.png')}></img>
            <Button type='submit'>Send ➡️</Button> 
            </div>
          </div>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<Welcome />, document.getElementById('root'));
