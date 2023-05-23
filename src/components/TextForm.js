import React, { useState } from "react";

export default function TextArea(props) {
  const [text, setText] = useState("Enter text here");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submit logic here
    console.log("Submitted:", text);
  };

  const handleReset = () => {
    setText("");
  };

  const handleOnChange=(event)=>{
   
    setText(event.target.value)
  }

  const handleUpClick=(e)=>{
    
    setText(text.toUpperCase());
  }

  return (
    <div className="container">
      <h2>{props.heading}</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={handleOnChange}
          rows={4}
          cols={50}
        />
        <br />
        <button className="btn btn-outline-success" type="submit">Submit</button>
        <button className="btn btn-outline-warning m-2" type="button" onClick={handleReset}>Reset</button>
        <button className="btn btn-outline-primary" type="button" onClick={handleUpClick}>Convert to UpperCase </button>
      </form>
    </div>
  );
}
