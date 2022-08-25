import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from "react"; //imrs

function App() {

  const [mode, setMode] = useState('dark');

  const toggleMode = ()=>{
    if(mode=='dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }else{
      setMode('dark');
      document.body.style.backgroundColor = '#19165a'
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <div className="container my-3"><TextForm heading="Enter the text to analyze"/></div> */}
      <About></About>
    </>
  );
}

export default App;
