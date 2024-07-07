import React from 'react'
import  { Link } from 'react-router-dom'
export default function Navbar(props) {
    return (
      <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} py-2`}>
    <div></div>
    <a className="navbar-brand" href="/">Text Transformer</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/Text-Transformer">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
      <div className="d-inline sham ">
          <button className="btn btn-primary m-1" onClick={()=>{props.toggleModem('primary')}} ></button>
          <button className="btn btn-primary m-1" onClick={()=>{props.toggleModem('secondary')}}></button>
          <button className="btn btn-success m-1" onClick={()=>{props.toggleModem('success')}} ></button>
          <button className="btn btn-danger m-1" onClick={()=>{props.toggleModem('danger')}}></button>
          <button className="btn btn-warning m-1" onClick={()=>{props.toggleModem('warning')}}></button>
        </div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-5`}>
        <input className='form-check-input' onClick={()=>{props.toggleMode(props.mode==='light'?'dark':'light')}} type='checkbox'/>
        <label className='form-check-label'>Enable darn mode</label>
   </div>
    </div>
  </nav>
  </>
  )
}
