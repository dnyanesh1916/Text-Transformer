
import './App.css';
import Navbar from './component/Navbar'
import Alert from './component/Alert'
import Home from './component/Home'
import About from './component/About'
import React,{ useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
}from 'react-router-dom'

function App() {
  const [alert,setAlert]=useState(null)
  const [mode,setMode]=useState('light')
  
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type}
    )
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-secondary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
  }

  const toggleModem=(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
  }
  const toggleMode=(cls)=>{
    removeBodyClasses();
    if(mode==='dark'){
      setMode('light');
      showAlert('Light Mode enabled',"success")
     document.body.style.backgroundColor="white"
    }
    else{setMode('dark');
    showAlert('Dark Mode enabled',"success")
    document.body.style.backgroundColor="rgb(6, 63, 108)"
    }
  }

  return (
    <>
    {/* <Navbar mode={mode} toggleMode={toggleMode} toggleModem={toggleModem}/>
    <Alert alert={alert}/>

    <Home showAlert={showAlert} mode={mode}/> */}
        <>
        <Router>
      <Navbar mode={mode} toggleMode={toggleMode} toggleModem={toggleModem} />
      <Alert alert={alert} />
      
        <Routes>
          <Route exact path='/' element={<Home showAlert={showAlert} mode={mode} />} />
          <Route exact path='/about' element={<About showAlert={showAlert} mode={mode}/>} />
        </Routes>
      </Router>
    </>
    </>
  );
}

export default App;
