import React, { useState } from "react";


import Note from "../Components/Note";
import CreateArea from "../Components/CreateArea";
import '../css/Note.css'


function Chat() {
  const [notes, setNotes] = useState([]);
// 
  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default Chat;











// import React, { useEffect } from 'react';
// import 'react-chat-widget/lib/styles.css';
// import { Widget, addResponseMessage } from 'react-chat-widget';
// import logo from '../Assets/Images/logo-chat.jpg';
// // import { response } from 'express';




// function Chat() {

//     useEffect(() => {
//         addResponseMessage('Welcome to this awesome chat!');
//     }, []);

//     const handleNewUserMessage = (newMessage) => {
//         console.log(`New message incoming!  ${newMessage}`);
//         // Now send the message throught the backend API
//         // addResponseMessage(response);

//     };

//     return (

//         <div>
//             <Widget
//                 handleNewUserMessage={handleNewUserMessage}
//                 profileAvatar={logo}
//                 title="Do you have a question?"
//                 subtitle="We'll replay within a few minutes!"

//             />
//         </div>
//     )
// }

// export default Chat;