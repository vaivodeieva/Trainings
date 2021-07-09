import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
                        <Article />
                    </Route>

                    <Route path="/article">
                        <Tags />
                    </Route>

                    <Route path="/chat">
                        <Tags />
                    </Route>

                    <Route path="/register">
                        <Tags />
                    </Route>

                    <Route path="/aboutus">
                        <Tags />
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
