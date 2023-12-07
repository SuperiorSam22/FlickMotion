import React from "react";
import {
    FaGithub,
    FaInstagram,
    FaVoicemail,
    FaLinkedin,
} from "react-icons/fa/index";
import {
    MdAlternateEmail,
} from "react-icons/md/index";

import ContentWrapper from "../contenetWrapper/ContentWrapper";

import "./style.scss";


const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                Welcome to our FlickMotion web application platform! Explore diverse genres effortlessly with our user-friendly interface. Seamlessly navigate trending, popular, and top-rated content on any device thanks to our fully responsive design and intuitive search bar.
                Immerse yourself in an infinite stream of entertainment on the explore page, and dive deep into each title with comprehensive details, 
                including cast information and trailers. 
                Elevate your experience with our recommendation section, which tailors suggestions to your preferences. 
                Start your journey today, and let the magic of movies and TV shows informations unfold at your fingertips.
                </div>
                <div className="socialIcons">
                    <a href="https://github.com/SuperiorSam22">
                        <span className="icon">
                        <FaGithub />
                    </span>
                    </a>
                    <a href="https://www.linkedin.com/in/sandeep-lal-03669b1b8">
                        <span className="icon">
                        <FaLinkedin />
                    </span>
                    </a>
                    <a href="mailto:sandeep221102@gmail.com">
                        <span className="icon">
                        <MdAlternateEmail />
                    </span>
                    </a>
                    <a href="https://www.instagram.com/sandeep2_211/">
                    {/* use this for redirecting it to google's gmail 
                     <a href="https://mail.google.com/mail/?view=cm&fs=1&to=your.email@example.com"></a> */}
                        <span className="icon">
                        <FaInstagram />
                    </span>
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;