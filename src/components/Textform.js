import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function Textform(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase Was Clicked");
        let newtext=text.toUpperCase();
        setText(newtext)
    }
    const handleloClick=()=>{
        // console.log("Lowercase Was Clicked");
        let newtext=text.toLowerCase();
        setText(newtext)
    }
    const handleblankClick=()=>{
        // console.log("Text blanked");
        let newtext='';
        setText(newtext)
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }


    const [text, setText] = useState('');
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3 my-1">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-danger mx-1" onClick={handleloClick} >Convert to Lowercase</button>
            <button className="btn btn-dark mx-1" onClick={handleblankClick} >Clear</button>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>
                {text.split(" ").length} Words<br/>
                {text.length} Characters<br/>
                {0.008 * text.split(" ").length} Minutes Read<br/>
            </p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}


Textform.propTypes={
    heading:PropTypes.string
}