import React, { useState } from 'react'

import Gallery from './Gallery'
import Students from './Students'
import { BrowserRouter as Router, NavLink, Routes, Route,useHistory } from 'react-router-dom'
import imgpath from 'https://www.flickr.com/photos/tags/canada/'
import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import './node_modules/bootstrap/dist/js/bootstrap.min.js';


const Registration = () => {
    let history = useHistory();
    let error = {}
    const [data, setData] = useState({
        username: "",
        password: "",
        designation: ""
    })
    const submitHandler = (e) => {
        e.preventDefault();

    }

    const changeHandler = (e) => {
        setData({ [e.target.name]: e.target.value })
        if (!data.username)
            error.username = "Please enter your username"
        if (!data.password)
            error.password = "Please enter your password"
        else if (data.password.length < 8)
            error.password = "password should not be less than 8 characters "

        if (!data.designation)
            error.designation = "Please enter your designation"



    }
    const handleClick = () => {
        history.push("/gallery");
    }
    return (
        <>

            <div className="main_container">
                <Router>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul>
                            <li>
                                <NavLink className="nav-item nav-link" to="/gallery">Gallery</NavLink>
                                
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><NavLink class="dropdown-item" href="#">New</NavLink></li>
                                    <li><NavLink class="dropdown-item" href="#">This Week</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink className="nav-item nav-link" to="/students">Students</NavLink></li>
                        </ul>
                    </nav>
                    <h2>Sign In</h2>
                    <div className="form_container">
                        <form onSubmit={submitHandler}>
                            <label>Email Address</label><br />
                            <input type="text" name="username" value={data.username} onChange={changeHandler} />
                            {error.username && <span>{error.username}</span>}

                            <br /><label>Password</label><span><NavLink exact to="/">Forgot Password?</NavLink></span><br />
                            <input type="password" name="password" value={data.password} onChange={changeHandler} />
                            <i class="far fa-eye" id="togglePassword" style={{ marginLeft: "-30px", cursor: "pointer" }}></i>
                            {error.password && <span>{error.password}</span>}


                            <br />
                            <button type="button" className="btn btn-primary btn-lg" onClick={handleClick}>Sign In</button>
                            <br />


                            <span>Don't have an Account?</span><NavLink to="/login">Sign Up</NavLink>
                            <Routes>
                            
                                <Route exact path="/gallery" component={Gallery} />
                                <Route exact path="/students" component={Students} />

                            </Routes>

                        </form>
                    </div>
                    <div className="sub_container">
                        <img src={imgpath} alt="" style={{width:"60%"}}/>
                    </div>
                </Router>
            </div>
        </>
    )
}

export default Registration
