import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import '../styles/Form.css';

const element = <FontAwesomeIcon icon={faEnvelope}/>
const phone = <FontAwesomeIcon icon={faPhone} />
// const whatsapp =<FontAwesomeIcon icon="fa-brands fa-whatsapp" style={{color: "#06cb13",}} />

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or validation here
    console.log('Form submitted:', { firstName, lastName, email, message });
    // Reset form fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="form-container">
      <div className="form-left">
        {/* <h2>Contact Us</h2> */}
        <form onSubmit={handleSubmit}>
          <div className="names">
            <div className="form-group-firstname">
              {/* <label htmlFor="firstName">First Name</label> */}
              <input
              placeholder='First Name'
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group-lastname">
              {/* <label htmlFor="lastName">Last Name</label> */}
              <input
              placeholder='Last Name'
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group-email">
            {/* <label htmlFor="email">Email</label> */}
            <input
            placeholder='Email'
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group-message">
            {/* <label htmlFor="message">Message</label> */}
            <textarea
            rows='10'
            col = '10'
            //   id="message"
            placeholder='Message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      {/* ---------------------- the right------------------------ */}
      <div className="form-right">
        <h2>School Email/Phone</h2>
        <div className="contact-info">
            <div className='email-one'>
           <h5> <a href="/">enquiry@thecradleschool.ng  </a></h5>
            <h5> {element}</h5>
            </div>
            <div className='email-one'>
            <h5><a href="/">support@thecradleschool.ng  </a></h5>
               <h5> {element}</h5>
            </div>
          <hr></hr>
          <div className='phone'>
          <h5>Phone: +234 8023383830</h5> <h5>{phone}</h5>
          </div>
          <div className='phone'>
          <h5>Phone: +2348038624666</h5> <h5>{phone}</h5>
          </div>
          
          <hr></hr>
          <div className='whatsapp  '>
          {/* <h5>+2348138189279</h5> <h5>{whatsapp}</h5> */}
          </div>
        </div>
      </div>
      
    </div>
    
  );
};

export default Form;
