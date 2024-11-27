import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743'
      showAlert("Dark mode has been enbled",'success');
    }else{
      setMode('light');
       document.body.style.backgroundColor='white'
       showAlert("Light mode has been enbled",'success');
    }
  }

  const showAlert=(message,type)=>{

    setAlert({
      msg:message,
      type:type,
    }

    )
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
   <>
   
<Navbar title="Utiles" aboutText="aboutText" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container">

<TextForm heading="Enter the Text To Below" mode={mode} showAlert={showAlert}/>
{/* <About/> */}

</div>
   </>
  );

}

export default App;
