import React, {Component} from 'react';
import logo from "../logo.svg";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";

class Footer extends React.Component {

    render() {
        return(
            <footer id="footer">
                <div className="footer-morphee">
                    <img src={logo} className="logo" alt="logo-morphee" />
                    <h2>MORPHEE</h2>
                </div>
                <div className="social-icons">
                    <a href="#"><img src={facebook} alt="facebook-morphee" title="Facebook Morphee"/></a>
                    <a href="#"><img src={twitter} alt="twitter-morphee" title="Twitter Morphee"/></a>
                    <a href="#"><img src={instagram} alt="instagram-morphee" title="Instagram Morphee"/></a>
                </div>
            </footer>
        )
    }

}

export default Footer;