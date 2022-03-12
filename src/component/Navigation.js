import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="id-content">
                    <div className="image-circle">
                        <img src="./media/profile-photo.jpg" alt="profil"/>
                    </div>
                    <h3>Oubri Daouda</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competence" activeClassName="navActive">
                            <i className="fas fa-lightbulb-on"></i>
                            <span>Compétence</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                            <i className="fas fa-book"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.google.com" target="_black" rel="noopener nooreferrer"><i
                            className="fab fa-linkedin"></i> </a>
                    </li>
                    <li>
                        <a href="https://www.google.com" target="_black" rel="noopener nooreferrer"><i
                            className="fab fa-github"></i> </a>
                    </li>
                    <li>
                        <a href="https://www.google.com" target="_black" rel="noopener nooreferrer"><i
                            className="fab fa-twitter"></i> </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;