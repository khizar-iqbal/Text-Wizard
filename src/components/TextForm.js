import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    setText("")
  }

  const handleOnChange = (event) => {
    let newText = event.target.value;
    setText(newText);
  };

  const handleCopyClick = (event) => {
    let copiedText = document.getElementById("myBox")
    // copiedText.select()
    navigator.clipboard.writeText(copiedText.value)
  }

  const handleExtraSpacesClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '))
  }

  let trimmedText = text.trim()
  let wordsCount = trimmedText.length == 0 ? 0 : trimmedText.split(/\s+/).length;

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
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
        <button className="btn btn-primary mx-2" onClick={handleExtraSpacesClick}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Test Summary</h2>
        <p>
          {wordsCount} Words and {text.length} Characters
        </p>
        <p>{(wordsCount * 0.008).toFixed(2)} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
