import axios from "axios";
import "./Boxs.css";
import React from 'react'

function Boxs() {

    const sendMessage = ((event) =>{
        event.preventDefault();
    const token = `8686982263:AAFKB7SAvXxSXiV_diDuY3nYRuwOA_bXUf4`;
    const chat_id = 647264939 ;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const username = document.getElementById("name").value
    const phone = document.getElementById("tel").value
    const SendContent = `Name : ${username}\n Phone: ${phone}`;
     axios({
        url:url,
        method:"POST",
        data :{
            chat_id:chat_id,
            text:SendContent,
            
        }

     })
      .then(()=>{
        alert("Hammasi zor");
      }).catch((error)=>{
        console.log(error);
        
      })
    })
  return (
    <>
    <div className="articles">
        <h1 className="title">Registration</h1>
        <form className="form" onSubmit={sendMessage}>
            <label className="label">
                Full Name
                <input className="input" id="name" type="text" required placeholder="Enter your  name ..." />
            </label>
            <label className="label">
                Phone Number
                <input className="input" id="tel" type="number" required placeholder="+ 99897 987 65 43" />
            </label>
            <button type="Submit" className="btn">Submit</button>
        </form>
    </div>
    </>
  )
}

export default Boxs