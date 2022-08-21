import React,{useState} from 'react';
import './App.css';
import About from './components/About';
// import About1 from './components/About1';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NumberTest from './components/NumberTest';
function App() {
  const [mode, setMode] = useState('light');//wehether dark mode is enabled or not
 const [alert, setalert] = useState(null);
 const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout((()=>{
      setalert(null);
    }),1500)
 }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showalert("Dark mode has been enabled",'success');
      document.title='TextUtils - Dark Mode';
      // setInterval(()=>{
      //   document.title='TextUtils is Amazing Mode'
      // },2000)
      // setInterval(()=>{
      //   document.title='Install TextUtils Now'
      // },1500)
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showalert('Dark mode has been disabled','success');
      document.title='TextUtils - Light Mode';
    }
  }
  return (
    <>
   {/* <Navbar title="TextUtils" aboutText='About us'/> */}
   {/* <Navbar/> */}
   <Router>
    <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} text={mode==='light'?'enable dark mode':'disable dark mode'}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
            <Route exact path="/" element={<TextForm showalert={showalert} heading='Enter the text to analyze below' mode={mode}/>}>
            </Route>
            <Route exact path="/about" element={<About />}>
            </Route>
          <Route exact path="/numberTest" element={<NumberTest/>}>

          </Route>
    </Routes>
          {/* <NumberTest/> */}      

    </div>
   </Router>

    </>
  )
}

export default App;
