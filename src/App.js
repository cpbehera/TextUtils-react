import { useState } from 'react';
import './App.css';
import Mynav from './Components/Navbar.js'
import TextForm from './Components/textForm.js'
// import About from './Components/About.js'
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light'); // whether dark mode is enabled or not
  const [textColor,setTextColor] = useState('text-dark'); 
  const [alert,setAlert] = useState(null);
  

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      setTextColor("text-light");
      document.body.style.backgroundColor = "gray";
      showAlert("Dark Mode has enabled","success");
      document.title = "TextUtils - Dark Mode";
      
    }
    else{
      setMode("light");
      setTextColor("text-dark")
      document.body.style.backgroundColor = "white";
        showAlert("Light Mode has enabled","success");
        document.title = "TextUtils - Home";
    }
  }

  const changeToOrangeMode = ()=>{
   document.body.style.backgroundColor = "orange";
  }
  const changeToGreenMode = ()=>{
    document.body.style.backgroundColor = "green";
  }
  const changeToOrangeredMode = ()=>{
   document.body.style.backgroundColor = "orangered";
  }

  return (
      <>
        <Mynav title="TextUtils" mode={mode} togglemode={toggleMode} changetoorangemode={changeToOrangeMode} changetogreenmode={changeToGreenMode} changetoorangeredmode={changeToOrangeredMode} textcolor={textColor} />
        <Alert alert={alert}/>
        <div className="container my-3">
     
          {/* <Route path="/" element={ />} />
          <Route path="/about" element={<About />} /> */}

          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        </div>
      </>
  );
}

export default App;
