import React from 'react';
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom'
import Category from './Category';
import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import './node_modules/bootstrap/dist/js/bootstrap.min.js';


const Gallery = () => {
    const images = {
        "Now": [

            {

                "canada": "https://www.flickr.com/photos/tags",
                "woodland": "https://www.flickr.com/photos/tags"
            }
        ],


        "This week": [
            {
                "color": "https://www.flickr.com/photos/tags",

                "dawn": "https://www.flickr.com/photos/tags"
            }

        ]

    }
    return <div>
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><NavLink className="nav-item nav-link" exact to="/gallery/category">Now</NavLink></li>
                    <li><NavLink  className="nav-item nav-link" to="/gallery/category">Thisweek</NavLink></li>
                </ul>
            </nav>
            <Routes>
                <Route exact path="/gallery/category" component={Category} />
            </Routes>
        </Router>
    </div>;
};

export default Gallery;
