import axios from "axios";
import "./Cards.css";
import React, { useState } from 'react'

function Cards() {
  const sendMessage = (event)=>{
    event.preventDefault();
    const token = `8799654997:AAFXbpKmshRxD_WcqAShMxtcHeU-IMsZ2OE`
    const chat_id =  647264939
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("username").value
    const phone = document.getElementById("phone").value

  const messageContent = `Name : ${name}\n Phone number: ${phone}`;
  axios({
    url:url,
    method:"POST",
    data :{
        chat_id:chat_id,
        text:messageContent,
    }
  })
  .then(()=>{
    alert("Successfully sent!✅");
  }).catch((error)=>{
    console.log(error);
    
  })
  
  }

  return (
    <div className="boxs">
          <h1 className="title">Registration</h1>
          <form className="form" onSubmit={sendMessage} >
            <label className="label">
                Full name
                <input className="input"  id="username" type="text"required placeholder="Enter your name ..." />
                </label>
            <label className="label">
                Phone number
                <input className="input"  id="phone" type="number"required placeholder="+ 998 97 890 02 01" />
                </label>
                <button className="btn" type="Submit">Submit</button>
                
          </form>

    </div>
  )
}

export default Cards