import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("");

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }
    
    const handleOnchange = (event)=>{
        setText(event.target.value);
    }

    const handleCopy = ()=>{
        console.log("i am copy");
        const text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied the text on the clipboard","success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra spaces","success");
    }
    
    // text = "new text";
    // setText("new text");

    return (
        <>
        <div className="container">
            <h3 style={{color: props.mode==="dark"?"white":"black"}}>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode==="dark"?"gray":"white",color:props.mode==="dark"?"white":"black"}} value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Delete extra spaces</button>
        </div>
        <div className="container my-3">
            <h2 style={{color: props.mode==="dark"?"white":"black"}}>Your text Summary</h2>
            <p style={{color: props.mode==="dark"?"white":"black"}}>{text.split(" ").length} words and {text.length} characters</p>
            <p style={{color: props.mode==="dark"?"white":"black"}}>{0.008 * text.split(" ").length} minutes read</p>
            <h2 style={{color: props.mode==="dark"?"white":"black"}}>Preview</h2>
            <p style={{color: props.mode==="dark"?"white":"black"}}>{text.length>0?text:"Enter Something to preview it here"}</p>
        </div>
        </>
    )
}
