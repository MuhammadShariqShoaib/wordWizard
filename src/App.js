import { useState } from "react";
import Navbar1 from "./components/Navbar1";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About1 from "./components/About1";

// import './App.css';
function App() {
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
    msg:message,
    type:type
  })
    setTimeout(() => {
      setAlert(null)
    },2000);
  }
  const [mode, setMode] = useState("light");
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#021121";
      showAlert("Darkmode has been Enable","info");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Darkmode has been Disable","info");

    }
  };
  return (
    <>
      <Navbar1 title="WordWizardry" mode={mode} toggleMode={togglemode} />
        <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter your text below" showAlert={showAlert} mode={mode} />

        {/* <About1/> */}
      </div>
    </>
  );
}

export default App;
