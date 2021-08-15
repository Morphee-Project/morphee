import React, {Component} from 'react';
import logo from "../logo_morphee.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";

class Footer extends React.Component {

    render() {
        return(
            <footer id="footer">
                <div className="social-icons">
                    <a href="#"><img src={facebook} alt="facebook-morphee" title="Facebook Morphee"/></a>
                    <a href="#"><img src={twitter} alt="twitter-morphee" title="Twitter Morphee"/></a>
                    <a href="#"><img src={instagram} alt="instagram-morphee" title="Instagram Morphee"/></a>
                </div>
                <div className="footer-morphee">
                    <p>©MORPHEE 2021</p>
                </div>
            </footer>
        )
    }

}

export default Footer;