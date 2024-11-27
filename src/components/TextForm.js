import React, { useState } from 'react'

export default function TextForm(props) {
    
    const handleupClick=()=>{
        
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text is UpperCased Successsully!",'success');
    }
    const handleloClick=()=>{
        
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Text is LowerCased Successsully!",'success');

    }
    const handleChange=(event)=>{
        setText(event.target.value);
    }
    const handleClear=()=>{
        setText("");
        props.showAlert("Textbox is Cleared Successsully!",'success');

    }
    const handleCopy=()=>{
        var text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is copied Successsully!",'success');


    }
    const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra-Spaces From Text Successsully!",'success');

    }


    const [text,setText]=useState("");


  return (<>    <div className='conatainer'style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 >{props.heading}</h1>
      <div className="mb-3 my-3">
        <textarea className="form-control" id="myBox" rows="8" onChange={handleChange} style={{backgroundColor: props.mode==='light'?'white':'grey',color: props.mode==='dark'?'white':'#042743'}} value={text}placeholder='Enter your text here'></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleupClick}>ConvertToUppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleloClick}>ConvertToLowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClear}>ClearText</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>CopyText</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
    </div>   
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}     >
            <h2>Your Text Summary</h2>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h3>TEXT PREVIEW</h3>
            <p>{text.length>0?text:"Enter some text in Above box to Preview Here"}</p>
    </div> 
    </>

  )
}
