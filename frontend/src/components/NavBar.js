import React from "react";
import logo from '../assets/logo.png'


class NavBar extends React.Component {

    render() {
    
        return(
            <div className='navBar'>
                <img src={logo} alt='SportSee' className='logo' />
                <div className='nav_container'>
                    <a href='/' className="nav home"><span>Accueil</span></a>
                    <a href='/' className="nav home"><span>Profil</span></a>
                    <a href='/' className="nav home"><span>Réglage</span></a>
                    <a href='/' className="nav home"><span>Communauté</span></a>
                </div>
            </div>
        );
    }
}

export default NavBar;