import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react';

function App() {
  const [color, setColor] = useState('light')
  const [mode, setMode] = useState(color);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert("Dark Mode Applied", "success");
      document.title = 'TextUtils - Dark Mode'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Applied", "success");
      document.title = 'TextUtils'
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} color={setColor}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter the text" mode={mode} alert={showAlert}/>
      </div>
    </>
  );
}

export default App;
