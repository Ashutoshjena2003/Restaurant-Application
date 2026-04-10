import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import toast from 'react-hot-toast';
import axios from 'axios'


const CustomerService = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // send data to backend...
    try {

            await axios.post("http://localhost:4000/api/v1/contact", {

                        name,
                        email,
                        message
            });
            toast.success("✅ Your message has been sent!")

            setName('');
            setEmail('');
            setMessage('');
         } 
         catch (error) {
            console.error(error);
            toast.error(" Failed to send message. Please try again later.")
         }
  };

  return (
            
    <section className="notFound">
            <div className='contact-form'>
      <h2>📩 Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Send Message</button>
      </form>

      <br />

       
       <div className="container">
      <Link to={'/'}>Back to Home Page{" "}
        <span>
          <HiOutlineArrowNarrowRight />
          
          </span></Link>
          </div>
          </div>
          

    </section>
  );
};

export default CustomerService;
