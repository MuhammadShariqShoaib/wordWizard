import React, { useState } from "react";
export default function TextForm(props) {
  const [text, settext] = useState("");
  // const [button, setbutton] = useState("Enable Dark Mode");
  // const [style, setstyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  //   border: "2px solid black",
  // });
  const handleUpclick = () => {
    let newText = text.toUpperCase();
    settext(newText);
  }
  const handleFirstCapital=()=>{
    const arr = text.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      const str2 = arr.join(" ");
      settext(str2);
  }
  };
  const handleLowerclick = () => {
    let newText = text.toLowerCase();
    settext(newText);
    
  };  
  const handleClear = () => {
    let newText = "";
    settext(newText);
  };
  const handlecopyToClipboard = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard","success")
  };
  const handleonchange = (event) => {
    settext(event.target.value);
  };
  // const handlemode = (event) => {
  //   if (button === "Enable Dark Mode") {
  //     setbutton("Disable Dark Mode");
  //     setstyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "2px solid black",
  //     });
  //   } else {
  //     setbutton("Enable Dark Mode");
  //     setstyle({
  //       color: "black",
  //       backgroundColor: "white",
  //       border: "2px solid",
  //     });
  //   }
  // };
  return (
    <div>
      <div className="container">
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h1>
        {/* <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={handlemode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {button}
          </label>
        </div> */}
        <div className="mb-3">
          {/* <label for="myBox" class="form-label">Example textarea</label> */}
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#030f21" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
            id="myBox"
            onChange={handleonchange}
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpclick}>
          Convert to upper case
        </button>
        <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleFirstCapital}>
        Capitalize the first letter of each word 
        </button>
        <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleLowerclick}>
          Convert to lower case
        </button>
        <button
        disabled={text.length===0} 
          className="btn btn-primary mx-1"
          onClick={handlecopyToClipboard}
        >
          Copy text
        </button>
        <button disabled={text.length===0}  className="btn btn-primary mx-1" onClick={handleClear}>
          Clear text
        </button>
      </div>
      <div
        className="container pt-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words,{text.length} characters
        </p>
        <p>{0.008 * (text.split(" ").filter((element)=>{return element.length!==0}).length)} Minute read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in textbox to preview here"}</p>
      </div>
    </div>
  );
}
