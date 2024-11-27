import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {


  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743'
    }else{
      setMode('light');
       document.body.style.backgroundColor='white'
    }
  }

 const [mode, setMode] = useState('light');
  return (
   <>
   
<Navbar title="Utiles" aboutText="aboutText" mode={mode} toggleMode={toggleMode} />
<div className="container">

<TextForm heading="Enter the Text To Below" mode={mode}/>
{/* <About/> */}

</div>
   </>
  );

}

export default App;
