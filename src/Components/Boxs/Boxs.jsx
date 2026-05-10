import "./Boxs.css";
import React from 'react'

function Boxs() {

    const SendName = ((event) =>{
        event.preventDefualt();
    const token = `"8686982263:AAFKB7SAvXxSXiV_diDuY3nYRuwOA_bXUf4`
    const chat_id = 647264939
    const url = `https://`
    const username = document.getElementById("name");
    const phone = document.getElementById("tel");
   

    })
  return (
    <>
    <div className="articles">
        <form className="form">
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