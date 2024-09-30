import React,{useState} from 'react'


 
export default function TextForm(props) {
  const handleUpClick =()=> {
    console.log("uppercase was clicked"+ text);
    let newText =text.toUpperCase();

    setText(newText)

  }

  const handleloClick =()=> {
   // console.log("uppercase was clicked"+ text);
    let newText =text.toLowerCase();
    setText(newText)
  }

  const handleclearClick =()=> {
    
     let newText ='';
     setText(newText)
   }
  const handleOnChange =(event)=>{
    console.log("On change");
    setText(event.target.value);
  }
  const [text,setText] =useState('enter text here');

  return (
    <>
    <div className="container">
        <h1>{props.heading} </h1>
      <div className="mb-3">
  
  <textarea className="form-control"  value={text} onChange ={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary  mx-2" onClick ={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary  mx-2" onClick ={handleloClick}>Convert to lowercase</button>
<button className="btn btn-primary  mx-2" onClick ={handleclearClick}>Clear text</button>
</div>
<div className="container">
  <h1> your text summary</h1>
  <p>{text.split (" ").length } words and {text .length } charecters </p>
  <p>{0.008 *text.split (" ").length } </p>
  <h3> preview</h3>
  <p>{text}</p>
</div>
</>
  )
}
