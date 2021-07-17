import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import NewTaskForm from '../Components/NewTaskForm';
import TasksList from '../Components/TasksList';
import "../css/Chat.css";

function Chat() {
    const [counter, setCounter] = useState(0);

    const reloadTaskList = () => {
        setCounter(counter + 1);
    }

    


    return (
        <div className="agenda-background" > 
        <div className="chat-container" >
            <div >
                <div className="col agenda-wrapper">
                    <h1>My Agenda</h1>
                </div>
            </div>
            <div className="row ">
                <div className="col">
                     <TasksList reloadTaskList={reloadTaskList} counter={counter} />
                </div>
            </div>
            <NewTaskForm reloadTaskList={reloadTaskList} />
        </div>
        </div>
    );
}

export default Chat;