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
        <div className="chat-container" >
            <div>
                <div className="col">
                    <h1>My agenda</h1>
                </div>
            </div>
            <div className="row ">
                <div className="col">
                     <TasksList reloadTaskList={reloadTaskList} counter={counter} />
                </div>
            </div>
            <NewTaskForm reloadTaskList={reloadTaskList} />
        </div>
    );
}

export default Chat;