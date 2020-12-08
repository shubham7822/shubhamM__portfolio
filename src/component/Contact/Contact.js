import React, { useState } from "react";
import db from "../../firebase";
import "./Contact.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import ReactFloaterJs from "react-floaterjs";

function Contact() {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (e) => {
    if (Name && email && subject !== null) {
      db.collection("contacts")
        .add({
          name: Name,
          email: email,
          subject: subject,
        })
        .then(() => {
          return alert("thankyou for your response");
        })
        .catch((error) => {
          return alert(error.message);
        });
    } else {
      alert("please enter all the details");
    }

    setName("");
    setEmail("");
    setSubject("");
    e.preventDefault();
  };

  return (
    <Fade bottom cascade>
      <div className='contact'>
        <Flip left cascade>
          <h1 className='contact-headline'>Contact-Me</h1>
        </Flip>
        <div className='contact-border'></div>
        <div className='contact-form-section'>
          <form className='contact-form'>
            <label is='name' className='contact-lable'>
              Name
            </label>
            <input
              type='text'
              value={Name}
              onChange={(e) => setName(e.target.value)}
              className='contact-Input'
            />
            <lable is='email' className='contact-lable'>
              Email
            </lable>
            <input
              type='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='contact-Input'
            />
            <lable is='subject' className='contact-lable'>
              Subject
            </lable>
            <textarea
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <button onClick={handleSubmit} className='contact-submit'>
              Submit
            </button>
          </form>
          <div className='email-section'>
            <h3 className='send-mail'>Send me a mail</h3>
            <ReactFloaterJs>
              <a
                target='_blank'
                href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=shubhammansute7822@gmail.com'
                rel='noreferrer'
              >
                <img
                  className='contact-email'
                  src='https://i.pinimg.com/originals/8f/c3/7b/8fc37b74b608a622588fbaa361485f32.png'
                  alt='email-contact-img'
                />
              </a>
            </ReactFloaterJs>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Contact;
