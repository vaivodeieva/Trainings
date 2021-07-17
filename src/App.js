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



function App() {

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
                    
                        <Chat className="colorful-background" />
                        
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
