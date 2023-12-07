import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa/index";

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
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;