import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import logCloud1 from "../images/logCloud1.svg";
import logCloud2 from "../images/logCloud2.svg";
import circleUsr from "../images/circle_and_Usr.svg";


function Signin() {
    return (
        <div id="signin">
            <Header/>
            <div className="mainLog">
                <div className="formLog">
                    <div className="formBlock">
                        <div className="logUsr">
                            <img src={logCloud1} className="cloud logCloud1" alt="logCloud1-morphee" />
                            <img src={logCloud2} className="cloud logCloud2" alt="logCloud2-morphee" />
                            <div className="usr">
                                <img src={circleUsr} className="usricon circleUsr" alt="circleUsr-morphee" />
                            </div>
                        </div>
                        <form action="">
                            <div className="form-group">
                                <div className="form-row">
                                    <label htmlFor="nickname">Identifiant :</label>
                                    <input type="text" id="nickname" name="nickname" placeholder="John Doe"/>
                                </div>
                                <div className="form-row">
                                    <label htmlFor="email">Email :</label>
                                    <input type="email" id="email" name="email" placeholder="mymail@mail.com"/>
                                </div>
                                <div className="form-row">
                                    <label htmlFor="password">Mot de passe :</label>
                                    <input type="password" id="password" name="password" placeholder="•••••••"/>
                                </div>
                                <div className="form-row">
                                    <label htmlFor="password">Confirmez le mot de passe :</label>
                                    <input type="password" id="password" name="password" placeholder="•••••••"/>
                                </div>
                                <input type="submit" id="submit" value="M'inscrire"/>
                            </div>
                        </form>
                    </div>
                </div>
                <p>Vous possédez déja un compte sur ce site ? <a href="/login">Se Connecter</a></p>
            </div>
            <Footer/>
        </div>
    );
}

export default Signin;