import "./Boxs.css";
import React from 'react'

function Boxs() {
  return (
    <>
    <div className="articles">
        <form className="form">
            <label className="label">
                Full Name
                <input type="text" required placeholder="Enter your  name ..." />
            </label>
        </form>
    </div>
    </>
  )
}

export default Boxs