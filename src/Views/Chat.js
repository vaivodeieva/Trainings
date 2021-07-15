// function Chat() {

//     return (
//         <div>

//         </div>
//     )
// }

// export default Chat;



























import React, { useEffect } from 'react';
import 'react-chat-widget/lib/styles.css';
import { Widget, addResponseMessage } from 'react-chat-widget';
import logo from '../Assets/Images/logo-chat.jpg';
import NoteApp from '../Components/NoteApp';
// import { response } from 'express';




function Chat() {

    useEffect(() => {
        addResponseMessage('Welcome to this awesome chat!');
    }, []);

    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming!  ${newMessage}`);
        // Now send the message throught the backend API
        // addResponseMessage(response);

    };

    return (

        <div>
            <NoteApp />


            <Widget
                handleNewUserMessage={handleNewUserMessage}
                profileAvatar={logo}
                title="Do you have a question?"
                subtitle="We'll replay within a few minutes!"

            />
        </div>
    )
}

export default Chat;