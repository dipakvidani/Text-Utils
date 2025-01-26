import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to uppercase successfully!", 'success');
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to lowercase successfully!", 'success');
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Textbox cleared successfully!", 'success');
  };

  const handleCopy = () => {
    const textArea = document.getElementById('myBox');
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
    props.showAlert("Text copied to clipboard successfully!", 'success');
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("Extra spaces removed successfully!", 'success');
  };

  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            onChange={handleChange}
            style={{ backgroundColor: props.mode === 'light' ? 'white' : '#2e2e2e', color: props.mode === 'dark' ? 'white' : '#042743' }}
            value={text}
            placeholder='Enter your text here'
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
      </div>

      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>Your Text Summary</h2>
        <p>{text.trim().split(/\s+/).length} words and {text.length} characters</p>
        <p>{(0.008 * text.trim().split(/\s+/).length).toFixed(2)} minutes to read</p>
        <h3>TEXT PREVIEW</h3>
        <p>{text.length > 0 ? text : "Enter some text in the above box to preview here"}</p>
      </div>
    </>
  );
}
