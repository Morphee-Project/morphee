import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import PlayStore from "../images/play_store_logo.png"
import Cloud3 from "../images/cloud2.svg"
import Breath from "../images/homeicons/breath.png"

function Conseils() {
    return (
        <div id="conseils">
            <Header/>
            <div className="col-12">
                <div className="conseils-head">
                    <h1>Les conseils de l'équipe</h1>
                    <p>
                        Vous pouvez retrouver les conseils de l'équipe pour améliorer votre sommeil. <br/>
                        Morphée met en avant toutes les nouveautés et conseils afin d'améliorer votre sommeil. <br/>
                        Articles, applications ou encore site web, Morphée teste pour vous, toutes les meilleures
                        informations pour enfin <br/>dire adieu à vos insomnies.
                    </p>
                    <a href="#news">Lire plus ↓</a>
                    <img className="cloud3" src={Cloud3} alt="nuage background"/>

                </div>
                <hr/>
                <div id="news" className="main-conseils">
                    <h2>Les nouveautés</h2>
                    <div className="news">
                        <div className="coherenceCardiaque main-news">
                            <h3>• La cohérence cardiaque</h3>
                            <section>

                                <p>
                                    Aujourd'hui, l'équipe de Morphée s'est renseignée sur l'intêret et les bienfaits de
                                    la <strong>cohérence cardiaque</strong>.
                                    <br/>
                                    <br/>

                                    La <strong>cohérence cardiaque</strong> est une pratique personnelle de la gestion
                                    du stress et des émotions qui entraine de nombreux bienfaits sur la santé physique,
                                    mentale et émotionnelle. <br/>
                                    La <strong>cohérence cardiaque</strong> permet d'apprendre à contrôler sa
                                    respiration afin de réguler son <strong>stress et son anxiété</strong>. <br/>
                                    Cette technique simple permettrait de réduire aussi la dépression et la tension
                                    artérielle.
                                </p>
                                <div className="news-infos">
                                    <img src={Breath} alt="icone respiration" title="Icone de respiration"/>
                                    <strong>
                                        Cette technique se base sur le contrôle de la respiration. <br/>
                                        Le sujet inspire (en moyenne) pendant 5 à 6 secondes pendant 5 minutes. <br/>
                                        Ces séances s'effectuent de manière individuelle sur plusieurs semaines.
                                    </strong>
                                </div>

                            </section>
                            <p>
                                L'une des raison de l'insomnie est l'accélération du rythme cardiaque. <br/>
                                Avec le stress, le rythme cardiaque peut très rapidement être alteré et impacter sur
                                notre sommeil. <br/>
                                Des exercices de cohérence cardiaque permettent de réguler votre rythme cardiaque.
                            </p>

                            <div className="img">
                                <img
                                    src="https://www.thierrysouccar.com/sites/thierrysouccar.com/files/2013/09/365-7-respiration_guidee.jpg"
                                    alt="Exemple d'activité cardiaque lors d'une séance de cohérence cardiaque"
                                    title="Exemple d'activité cardiaque lors d'une séance de cohérence cardiaque"/>
                                <div className="img-btn">
                                    <a target="_blank" href="https://doc.rero.ch/record/277517/files/BT-Iascone-Lerebours-SFBA13-split-merge.pdf">Plus sur la cohérence cardiaque →</a>
                                </div>
                            </div>

                            <div className="app">
                                <p>Afin de s'exercer à cette technique, l'équipe vous conseille, après plusieurs
                                    semaines d'essai, l'application <strong>Top breath</strong>.</p>
                                <div className="app-img">
                                    <img
                                        src="https://play-lh.googleusercontent.com/KfYTIEyVjCIO3FoYjMqPbU1rrjoKMU55X5ZY4q01TjecRd7h1q5ibN-EtD5e8KEp_G8=s360"
                                        alt="Top Breath logo" title="Top Breath logo"/>
                                    <a target="_blank"
                                       href="https://play.google.com/store/apps/details?id=app.topbreath&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                                        <img src={PlayStore} alt="Logo play store" title="Logo Play store"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Conseils;