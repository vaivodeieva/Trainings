import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
      <div className="colorful-background">

        
    <div className="note-container">
        <div className="row">
            <div className="col">
            
            </div>

            <div className="col">

            </div>
        </div>
    </div>

    
        
      <form className="add-note">
        <input className="note-form-input"
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea className="note-textarea"
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button className="note-btn" onClick={submitNote}>Add</button>
      </form>

      </div>
  );
}

export default CreateArea;
