import "./Cards.css";
import React, { useState } from 'react'

function Cards() {
  const sendMassage = (event)=>{
    event.preventDefault();
    const token = `8799654997:AAFXbpKmshRxD_WcqAShMxtcHeU-IMsZ2OE`
    const chat_id =  647264939
  const massageContent = 
  }

  return (
    <div className="boxs">
          <h1 className="title">Registration</h1>
          <form className="form">
            <label className="label">
                Full name
                <input className="input"  id="name" type="text"required placeholder="Enter your name ..." />
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