import React, {useState} from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import logCloud1 from "../images/logCloud1.svg";
import logCloud2 from "../images/logCloud2.svg";
import circleUsr from "../images/circle_and_Usr.svg";
import axios from "axios";


function Signin() {
    const url = "http://localhost:3001/signin"
    const [data, setData] = useState({
        nickname: "",
        email: "",
        password: ""
    })

    function submit(e){
        e.preventDefault();

            axios.post(url,{
                nickname: data.nickname,
                email: data.email,
                password: data.password,
            })
                .then(res=>{
                    console.log(res.data)
                })
    }

    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    return (
        <div id="signin">
            <Header/>
            <div className="mainLog">
                <div className="formLog">
                    <div className="formBlock">
                        <div className="logUsr">
                            <img src={logCloud1} className="cloud logCloud1" alt="logCloud1-morphee"/>
                            <img src={logCloud2} className="cloud logCloud2" alt="logCloud2-morphee"/>
                            <div className="usr">
                                <img src={circleUsr} className="usricon circleUsr" alt="circleUsr-morphee"/>
                            </div>
                        </div>
                        <form method="post" onSubmit={(e)=> submit(e)}>
                            <div className="form-group">
                                <div className="form-row">
                                    <label htmlFor="nickname">Identifiant :</label>
                                    <input type="text" id="nickname" name="nickname" value={data.nickname} onChange={(e)=> handle(e)}
                                           placeholder="John Doe"/>
                                </div>
                                <div className="form-row">
                                    <label htmlFor="email">Email :</label>
                                    <input type="email" id="email" name="email" value={data.email} onChange={(e)=> handle(e)}
                                           placeholder="mymail@mail.com"/>
                                </div>
                                <div className="form-row">
                                    <label htmlFor="password">Mot de passe :</label>
                                    <input type="password" id="password" name="password" value={data.password} onChange={(e)=> handle(e)}
                                           placeholder="•••••••"/>
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