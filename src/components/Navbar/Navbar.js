import React from 'react';
import "./Navbar.css";
import ALink from "../ALink";
// assets
import MyImage from "../../assets/images/Me.jpg";
import Resume from "../../assets/other/Resume.pdf";
export default () => {
    return (
        <nav>
            <ul className="left">
                <li><ALink href="#">Source</ALink></li>
                <li><ALink href={Resume}>Resume</ALink></li>
            </ul>
            <img src={MyImage} alt="Matthew Bertrandt" className="nav__icon" />
            <ul className="right">
                <li><ALink href="https://www.linkedin.com/in/matthew-bertrandt/">LinkedIn</ALink></li>
                <li><ALink href="https://github.com/JMatt21">GitHub</ALink></li>
            </ul>
        </nav>
    );
};