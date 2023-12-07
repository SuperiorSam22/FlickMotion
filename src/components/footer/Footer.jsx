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
            window.open('https://www.themoviedb.org/api-terms-of-use', '_blank');
        } else if( linkType === "priavcyPolicy"){
            window.open('https://www.themoviedb.org/privacy-policy' ,'_blank');
        } else if( linkType === "about"){
            window.open('https://github.com/SuperiorSam22' ,'_blank');
        } else if( linkType === "faq"){
            window.open("https://www.themoviedb.org/faq/website" ,'_blank');
        } else if (linkType === "gitHub"){
            window.open( "https://github.com/SuperiorSam22" ,'_blank');
        } else if (linkType === "linkedIn"){
            window.open("https://www.linkedin.com/in/sandeep-lal-03669b1b8" ,'_blank');
        } else if (linkType === "email"){
            window.open("mailto:sandeep221102@gmail.com" ,'_blank');
        } else if (linkType === "instagram"){
            window.open("https://www.instagram.com/sandeep2_211" ,'_blank');
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
                Welcome to my FlickMotion web application platform! Explore diverse genres effortlessly with our user-friendly interface. Seamlessly navigate trending, popular, and top-rated content on any device thanks to our fully responsive design and intuitive search bar.
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