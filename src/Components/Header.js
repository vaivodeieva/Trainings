import { NavLink } from 'react-router-dom';
import {useState} from 'react';

function Header() {
    const [mainMenueCollapsed, setMainMenuCollapsed] = useState(true);

    const toggleMainMenu = () => {
        setMainMenuCollapsed(!mainMenueCollapsed);
    }

    let mainMenuClasses= 'collapse navbar-collapse';
    if (!mainMenueCollapsed){
        mainMenuClasses+= ' show';
    }

    let menuTogglerButtonClasses = 'navbar-toggler';
    if (!mainMenueCollapsed){
        menuTogglerButtonClasses += ' collapsed';
    }


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    
                    <button onClick={toggleMainMenu} className={menuTogglerButtonClasses} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={mainMenuClasses} id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" exact to="/" style={{fontFamily: 'cursive'}}>Home</NavLink>
                            <NavLink className="nav-link" to="/articles" style={{fontFamily: 'cursive'}}>Articles</NavLink>
                            <NavLink className="nav-link" to="/chat" style={{fontFamily: 'cursive'}}>Chat</NavLink>
                            <NavLink className="nav-link" to="/register" style={{fontFamily: 'cursive'}}>Register</NavLink>
                            <NavLink className="nav-link" to="/aboutus" style={{fontFamily: 'cursive'}}>About Us</NavLink>
                          
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Header;