import React from 'react';
import '../styles/nav.css'
import {
    Navbar,
    Nav,
    NavItem,
    Glyphicon,
    Container,
    Modal,
    Tab,
} from "react-bootstrap";
import { Link } from "react-router-dom";
// import FunctionClick from './FunctionClick'



// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case

// In Navbar, we can assign a style from an object by using curly braces
function Bar() {


    return (

        <div className="navbar-default" >
            <Nav>
                <button type="button" class="btn btn-default" id="home">Home</button>

                <button type="button" class="btn btn-default" id="projects">Projects</button>

                <button type="button" class="btn btn-default" id="DU">Apps</button>



            </Nav></div>

    );
}

export default Bar;