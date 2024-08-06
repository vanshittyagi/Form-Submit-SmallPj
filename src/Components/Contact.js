import React, { useState } from 'react';
import Button from '@mui/material/Button';
import MessageIcon from '@mui/icons-material/Message';
import CallIcon from '@mui/icons-material/Call';
import './Navbar.css'

const Contact = () => {
    const [Name, setName] = useState("DoSomeCoding");
    const [Email, setEMail] = useState("support@gmail.com");
    const [Text, setText] = useState("DoSomeCoding Sherr");
    const clicking = (event) => {
        event.preventDefault();
        setName(event.target[0].value);
        setEMail(event.target[1].value);
        setText(event.target[2].value);
        console.log("Name", event.target[0].value)
        console.log("Mail Id", event.target[1].value)
        console.log("Text", event.target[2].value)
    }
    return (
        <>
            <div className="left">
                <h1>Contact Us</h1>
                <p>Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, non? adipisicing elit. Illum pariatur voluptates modi repudiandae, dignissimos ipsa?</p>
            </div>
            <div className='flexy' >
                <div className="lefty">
                    <div className="twobtn">
                        <Button
                            variant="contained"
                            startIcon={<MessageIcon />}
                            className="Chat btn">
                            Via Chat Support
                        </Button>
                        <Button
                            variant="contained"
                            startIcon={<CallIcon />}
                            className="Chat btn">
                            Via Call
                        </Button>
                    </div>
                    <div className="singlebtn">
                        <Button
                            variant="contained"
                            startIcon={<MessageIcon />}
                            className="Mail btn">via Email Form
                        </Button>
                    </div>
                    <form action="" className='Formsec' onSubmit={clicking} >
                        <div className='Name' >
                            <label htmlFor="Name">Name</label>
                            <input type="text" />
                        </div>
                        <div className='Name' >
                            <label htmlFor="Name">Mail</label>
                            <input type="email" />
                        </div>
                        <div className='Name' >
                            <label htmlFor="Name">Text</label>
                            <textarea name="Text" id="" ></textarea>
                        </div>
                        <button className='Submit btn'>Submit</button>
                    </form>
                    <div>{Name} <br />{Email} <br />{ Text}</div>
                </div>
                <div className="right">
                    <img src="/images/contact.svg" alt="" />
                </div>
            </div>
        </>
    )
}

export default Contact
