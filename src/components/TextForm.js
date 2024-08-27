import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.alert("Converted to Upper Case", 'success')
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.alert("Converted to Lower Case", 'success')
  };

  const handleClearClick = () => {
    setText("");
    props.alert("Text Cleared", 'success')
  };

  const handleOnChange = (event) => {
    let newText = event.target.value;
    setText(newText);
  };

  const handleCopyClick = (event) => {
    let copiedText = document.getElementById("myBox");
    // copiedText.select()
    navigator.clipboard.writeText(copiedText.value);
    props.alert("Text Copied", 'success')
  };

  const handleExtraSpacesClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.alert("Extra Spaces Removed", 'success')
  };

  let trimmedText = text.trim();
  let wordsCount =
    trimmedText.length == 0 ? 0 : trimmedText.split(/\s+/).length;

  return (
    <>
      <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#212529" : "white",
              color: props.mode === "dark" ? "white" : "black",
              ...(props.mode === 'dark') && {
                borderColor: "#212529"
              }
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleExtraSpacesClick}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>Your Test Summary</h2>
        <p>
          {wordsCount} Words and {text.length} Characters
        </p>
        <p>{(wordsCount * 0.008).toFixed(2)} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter Test To Preview Here'}</p>
      </div>
    </>
  );
}
