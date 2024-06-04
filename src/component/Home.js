import React, { useState } from 'react'

export default function Home(props) {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
  }
  const handleUpClick = () => {
    if(text){
      let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("text converted into upper case", "success")
    }
    else{
      props.showAlert("enter text in textbar to convert into uppercase", "warning")
    }
    
  }
  const handleLowClick = () => {
    if(text){
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("text converted into lower case", "success")
    }
    else{
      props.showAlert("enter text in textbar to convert into lower case", "warning")
    }
  }
  const handleClrClick = () => {
    if(text){
    setText('');
    props.showAlert("text cleared", "success")
    }
    else{
      props.showAlert("enter text in textbar to clear text", "warning")
    }
  }
  const handleCopyClick = () => {
    if(text){
    let ntext = document.getElementById('textconverter')
    ntext.select();
    navigator.clipboard.writeText(ntext.value);
    props.showAlert("text copied into clipboard", "success")
    }
    else{
      props.showAlert("enter text in textbar to copy text", "warning")
    }
  }
  const handleRspcClick = () => {
    if(text){
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(' '));
    props.showAlert("removed extra spaces", "success")
    }
    else{
      props.showAlert("enter text in textbar to remove extra spaces", "warning")
    }
  };

  return (
    <div className='container'  style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <div className='container py-5 '>
        <div className="mb-3">
          <h3 htmlFor="exampleFormControlTextarea1" className="form-label">Enter text TO convet ino nbelow operation</h3>
          <textarea className="form-control border-dark " id='textconverter' value={text} onChange={handleOnChange} rows="10" style={{ backgroundColor: props.mode === 'dark' ? '#808080b5' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
        </div>
        <div className="d-inline">
          <button className="btn btn-primary m-2" onClick={handleUpClick}>Convert to UpperCase</button>
          <button className="btn btn-secondary m-2"  onClick={handleLowClick}>Convert to Lowercase</button>
          <button className="btn btn-success m-2" onClick={handleClrClick}>Clear Text</button>
          <button className="btn btn-danger m-2"  onClick={handleCopyClick}>Copy Text</button>
          <button className="btn btn-warning m-2" onClick={handleRspcClick}>Remove extra Spaces</button>
        </div>
        <div className="container my-3">
          <h1>Your Text Summary</h1>
          <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
          <p>{0.008 * text.split('').length} sec minimum time required</p>
          <h2>preview<br></br></h2>
          <p>{text ? text : "enter text in text bar to see preview"}</p>
        </div>
      </div>


    </div>
  )
}
