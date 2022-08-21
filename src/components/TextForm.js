import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState("");
    // setText('we have changed the value');
    // text="newText";//wrong way to change the state
    // setText("newText");//correct way
    const handleUpClick=()=>{
        // console.log('uppercase was clicked');
        let newText=text.toUpperCase();
        setText(newText);
        props.showalert('Converted to upperCase','success');
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showalert('Converted to LowerCase','success');
    }
    const clearText=()=>{
        setText('');
        props.showalert('Text cleared','success');
    }
    const copy=()=>{
        var text=document.getElementById('myBox');
        console.log(text.value);
        navigator.clipboard.writeText(text.value);
        props.showalert('Copy to clickboard','success');
    }
    const removeSpaces=()=>{
        let newText=text.split(/[ ]+/);
        console.log(newText);
        setText(newText.join(' '));
        props.showalert('Extra spaces removed','success');
    }
    const handleOnChange=(event)=>{
        // console.log('on change');
        setText(event.target.value);
    }
    const count=(text)=>{
        if(text==="")
            return 0;
        let count=0;
        for(let i=0;i<text.length;i++){
            if(text.charAt(i)===' '){
                count++;
            }
        }
        return count+1;
    }
  return (
    <>
    <div className="container" style={{color:props.mode==='light'? 'black':'white'}}>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea style={{backgroundColor:props.mode==='light'? 'white':'grey',color:props.mode==='light'? 'black':'white'}} className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={copy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={removeSpaces}>Remove</button>
        </div>
        <div className="container my-2"  style={{color:props.mode==='light'? 'black':'white'}} >
            <h2>Your text summary</h2>
            <p>{count(text)}words,{text.length}characters</p>
            <p>{0.008 * text.split(" ").length}Mintues read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"enter something in the textbox to preview here"}</p>
        </div>
    </div>

    </>
  )
}
