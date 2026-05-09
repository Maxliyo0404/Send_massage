import "./Cards.css";
import React from 'react'

function Cards() {
  return (
    <div className="boxs">
          <h1 className="title">Registration</h1>
          <form className="form">
            <label className="label">
                Full name
                <input className="input"  id="username" type="text"required placeholder="Enter your name ..." />
                </label>
            <label className="label">
                Phone number
                <input className="input"  id="name" type="number"required placeholder="Enter your name ..." />
                </label>
                
          </form>

    </div>
  )
}

export default Cards