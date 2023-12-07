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



    const handleTermsOfUseClick = (linkType) => {
        if(linkType === "termsOfUse"){
            window.location.href = 'https://www.themoviedb.org/api-terms-of-use';
        } else if( linkType === "priavcyPolicy"){
            window.location.href = 'https://www.themoviedb.org/privacy-policy';
        } else if( linkType === "about"){
            window.location.href = "https://github.com/SuperiorSam22";
        } else if( linkType === "faq"){
            window.location.href = "https://www.themoviedb.org/faq/website";
        } else if (linkType === "gitHub"){
            window.location.href = "https://github.com/SuperiorSam22";
        } else if (linkType === "linkedIn"){
            window.location.href = "https://www.linkedin.com/in/sandeep-lal-03669b1b8";
        } else if (linkType === "email"){
            window.location.href = "mailto:sandeep221102@gmail.com";
        } else if (linkType === "instagram"){
            window.location.href = "https://www.instagram.com/sandeep2_211";
        }
    };



const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem" 
                        onClick={()=> handleTermsOfUseClick('termsOfUse')}>Terms Of Use</li>
                    <li className="menuItem" 
                        onClick={()=> handleTermsOfUseClick('priavcyPolicy')}>Privacy-Policy</li>
                    <li className="menuItem" 
                        onClick={()=> handleTermsOfUseClick('about')}>About</li>
                    <li className="menuItem" 
                        onClick={()=> handleTermsOfUseClick('faq')}>FAQ</li>
                </ul>
                <div className="infoText">
                Welcome to our FlickMotion web application platform! Explore diverse genres effortlessly with our user-friendly interface. Seamlessly navigate trending, popular, and top-rated content on any device thanks to our fully responsive design and intuitive search bar.
                Immerse yourself in an infinite stream of entertainment on the explore page, and dive deep into each title with comprehensive details, 
                including cast information and trailers. 
                Elevate your experience with our recommendation section, which tailors suggestions to your preferences. 
                Start your journey today, and let the magic of movies and TV shows informations unfold at your fingertips.
                </div>
                <div className="socialIcons">
                    <span className="icon" 
                        onClick={()=> handleTermsOfUseClick('gitHub')}>
                        <FaGithub />
                    </span>

                    <span className="icon"
                        onClick={()=> handleTermsOfUseClick('linkedIn')} >
                        <FaLinkedin />
                    </span>

                    <span className="icon"
                        onClick={()=> handleTermsOfUseClick('email')}>
                        <MdAlternateEmail />
                    </span>

                    <span className="icon"
                        onClick={()=> handleTermsOfUseClick('instagram')}>
                        <FaInstagram />
                    </span>
                    
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;