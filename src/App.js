import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home';
import Articles from './Views/Articles';
import Article from './Views/Article';
import Chat from './Views/Chat';
import Register from './Views/Register';
import AboutUs from './Views/AboutUs';
import Page404 from './Views/Page404';



import React, { useEffect } from 'react';
import 'react-chat-widget/lib/styles.css';
import { Widget, addResponseMessage } from 'react-chat-widget';
import logo from './Assets/Images/logo-chat.jpg';


function App() {

    useEffect(() => {
        addResponseMessage('Welcome to this awesome chat!');
      }, []);
    
      const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
        addResponseMessage(`How can I help you?`);
      };
   

    return (
        <div>
            <Router>
                <Header />
                <Switch>

                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/articles">
                        <Articles />
                    </Route>

                    <Route path="/article">
                        <Article />
                    </Route>

                    <Route path="/chat">


                        <div className="App">
                        <Chat />
                        <Widget
                            handleNewUserMessage={handleNewUserMessage}
                            profileAvatar={logo}
                            title="Do you have a question?"
                            subtitle="Leave us a message"
                        />
                        </div>


                    </Route>

                    <Route path="/register">
                        <Register />
                    </Route>

                    <Route path="/aboutus">
                        <AboutUs />
                    </Route>

                    <Route>
                        <Page404 />
                    </Route>

                </Switch>
                <Footer />
            </Router>

        </div>
    );
}

export default App;
