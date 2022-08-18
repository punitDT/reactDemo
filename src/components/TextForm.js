import React, { useState } from 'react'


function TextForm(props) {
    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value)
    }
    const handleUpClick = () => {
        console.log("uppercase was clicked");
        setText(text.toUpperCase())
    }
    const [text, setText] = useState("Enter Text Here");
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Covert to Uppercase</button>
        </>
    )
}

export default TextForm
