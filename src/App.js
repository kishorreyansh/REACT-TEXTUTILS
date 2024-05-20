import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import AboutUs from './components/AboutUs';
//import FunctionComponent from './components/FunctionComponentExample';
//Named Export Function
//import {FunctionComponent} from './components/FunctionComponentExample'
//import JSXExample from './components/JSXExample';
import {
  BrowserRouter as Router,
  Switch,Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');

  const [alert,setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
      showAlert('Dark Mode Enabled', 'success');
      document.title = 'TextUtils - Dark Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode Enabled','success');
      document.title = 'TextUtils - Light Mode'
    }
  }

  const [modeblue,setBlueMode] = useState('light');

  const toggleBlueMode = () => {
    if(modeblue === 'light'){
      setBlueMode('dark');
      document.body.style.backgroundColor = 'rgb(113 44 249)'
      showAlert('Blue Mode Enabled', 'success');
    }
    else{
      setBlueMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode Enabled','success');
    }
  }

  const [modeyellow, setYellowMode] = useState('yellow');  
  const clickYellowMode = () => {
      setYellowMode('dark');
      document.body.style.backgroundColor = 'rgb(255 193 7)'
      showAlert('Yellow Mode Enabled', 'success');
  }

  return (
    <>
      <Router>
      <Navbar title="My Portfolio" aboutUs="About US" modeyellow={modeyellow} clickYellowMode={clickYellowMode} mode={mode} toggleMode={toggleMode} modeblue = {modeblue} toggleBlueMode={toggleBlueMode}/>
      {/* <FunctionComponent />
      <JSXExample /> */}
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text To Analysis" mode={mode} textsummary="Your Text Summary"/>}>
          {/* <TextForm showAlert={showAlert} heading="Enter the Text To Analysis" mode={mode} textsummary="Your Text Summary"/> */}
        </Route>
        <Route exact path="/aboutus" element={<AboutUs/>}>
        </Route>
      </Routes>
      </div> 
      </Router>
      {/* <div className="container">
        <AboutUs enabledarkbutton="Enable Dark Mode" />
      </div> */}
    </>
    
  );
}

export default App;
