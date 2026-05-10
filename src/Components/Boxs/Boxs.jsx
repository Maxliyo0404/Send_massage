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
            <label className="label">
                Phone Number
                <input type="number" required placeholder="+ 99897 987 65 43" />
            </label>
        </form>
    </div>
    </>
  )
}

export default Boxs