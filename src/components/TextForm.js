import React, {useState} from 'react'

export default function TextForm(props) {

    const onHandleChange = (event) => {
        setText(event.target.value);
    }

    const onUpperCaseClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext); 
        props.showAlert("Converted to UpperCase","success");
    }

    const onLowerCaseClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to LowerCase","success");
    }

    const onClearClick = () => {
        let newText = '';
        setText(newText);
    }

    const onTitleCaseClick = () => {
        let newText = text.toLowerCase();
        newText = newText.split(' ');
        for(var i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1); 
        }
        return setText(newText.join(' '));
        props.showAlert("Converted to TileCase","success");
    }

    const onRemoveExtraSpacesClick = () => {
        let newText = text.split(/[ ] +/);
        setText(newText.join(" "));

    }

    const onCopyClick = () => {
        var newText = document.getElementById("mytext");
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }

    const [text, setText] = useState("");
  return (
    <>
    <div style={{color: props.mode=== 'light'?'black':'white'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" onChange={onHandleChange} value={text} id="mytext" rows="8" style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode=== 'light'?'black':'white'}}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={onUpperCaseClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={onLowerCaseClick}> Convert to LowerCase</button>
        <button className='btn btn-primary mx-2' onClick={onClearClick}> CLEAR</button>
        <button className='btn btn-primary mx-2' onClick={onTitleCaseClick}> Title Case</button>
        <button className='btn btn-primary mx-2' onClick={onRemoveExtraSpacesClick}> Remove Extra Spaces</button>
        <button className='btn btn-primary' onClick={onCopyClick}> Copy</button>
        
    </div>
    <div className="container my-3" style={{color: props.mode=== 'light'?'black':'white'}}>
        <h2>{props.textsummary}</h2>
        <p>Total Words {text.split(" ").length} | Total Characters {text.length}</p>
        <p>{0.008 * text.length} Minutes to Read The Text</p>
        <h3>Preview:</h3>
        <p>{text.length > 0 ? text: 'Enter Text In above Text Area to Get Preview'}</p>
    </div>
    </> 
  )
}
