import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="colorful-background">
    
    <div className="note" contentEditable={true}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>🗑️</button>
    </div>
    </div>
   
  );
}

export default Note;
