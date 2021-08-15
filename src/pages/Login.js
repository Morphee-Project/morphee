import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import logCloud1 from "../images/logCloud1.svg";
import logCloud2 from "../images/logCloud2.svg";
import circleUsr from "../images/circle_and_Usr.svg";


function Login() {
    return (
        <div id="login">
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
                                        <label htmlFor="password">Mot de passe :</label>
                                        <input type="password" id="password" name="password" placeholder="•••••••"/>
                                    </div>
                                    <input type="submit" id="submit" value="Me connecter"/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <p>Vous ne possédez aucun compte sur ce site ? <a href="/signin">S'inscrire</a></p>
                </div>
            <Footer/>
        </div>
    );
}

export default Login;