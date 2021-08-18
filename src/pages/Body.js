import React, {Component} from 'react';
import Header from "../components/header"
import body_woman from "../img_femme_corps.png";
import Footer from "../components/footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Body extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.handleMouseHover2 = this.handleMouseHover2.bind(this);
        this.handleMouseHover3 = this.handleMouseHover3.bind(this);
        this.state = {
            isHovering: false,
            isHovering2: false,
            isHovering3: false,
            value: '',
            nav1: null,
            nav2: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
                value: event.target.value
            });
        const valueSelected = event.target.value;
        console.log('handleSubmit');
        let allSlider = document.querySelectorAll('.slider-effect');

        allSlider.forEach(function(item) {
            if (item.classList.contains('slider-' + valueSelected)) {
                item.style.opacity = '1';
                item.style.height = 'auto';
            } else {
                item.style.opacity = '0';
                item.style.height = '0';
            }
        });
    }
    handleSubmit(event) {
        const valueSelected = this.state.value;
        //handleChange(event);
        alert('Le nom a été soumis : ' + this.state.value);

        let allBlocksItems = document.querySelectorAll('.block');
        console.log(valueSelected);
        allBlocksItems.forEach(function(item, valueSelected) {
            console.log(valueSelected);
            if (item.classList.contains('block-' + valueSelected)) {
                item.style.display = 'block'
            } else {
                item.style.display = 'none';
            }
        });
        //document.querySelector('.block-' + this.state.value).style.display = 'block';
        event.preventDefault();
        event.stopPropagation();
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    handleMouseHover2() {
        this.setState(this.toggleHoverState2);
    }

    handleMouseHover3() {
        this.setState(this.toggleHoverState3);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }

    toggleHoverState2(state) {
        return {
            isHovering2: !state.isHovering2,
        };
    }

    toggleHoverState3(state) {
        return {
            isHovering3: !state.isHovering3,
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {

        const settingsImg = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
        };

        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            speed: 500,
        };

        return (
            <div id="body">

                <Header/>

                <div className="body-content col-12">
                    <div>
                        <h1>Les effets du manque de sommeil sur votre corps</h1>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Temps de sommeil moyen par nuit:
                        </label>
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option selected value="1">moins de 5 heures</option>
                                <option value="2">entre 5 à 6 heures</option>
                                <option value="3">entre 6 et 9 heures</option>
                            </select>

                        <input className="submit" type="submit" value="Envoyer" />
                    </form>


                    <div className="container-effect">

                        <div className="slider-left">
                            <Slider className="slider-effect slider-1" {...settings} asNavFor={this.state.nav2}
                                    ref={slider => (this.slider1 = slider)}>
                                <div className="item">
                                    <h3>Usure du cerveau</h3>
                                    <div className="sub-container">
                                        <span>Zone: </span>
                                        <span>Conséquence: Moyenne</span>
                                    </div>
                                    <p>Lorsque nous dormons, le cerveau régénère les cellules qui lui permettent de “récupérer les énergies” et prévenir les maladies. Si nous ne nous reposons pas assez, il ne peut pas nettoyer les protéines qui provoquent les plaques d’Alzheimer ou la démence. </p>
                                </div>
                                <div className="item">
                                    <h3>Grande perte de la concentration</h3>
                                    <div className="sub-container">
                                        <span>Zone: Tout le corps</span>
                                        <span>Conséquence: Importante</span>
                                    </div>
                                    <p>Le rendement cognitif et la coordination motrice diminuent de façon considérable quand une personne n’a pas suffisamment dormi. Selon la National Highway Traffic Safety Administration (NHTSA, en anglais) des États-Unis, plus de quarante mille personnes souffrent de blessures chaque année. Et ce, à cause de problèmes dus au manque de sommeil. </p>
                                </div>
                                <div className="item">
                                    <h3>Augmentation de risque de maladies cardiovasculaires</h3>
                                    <div className="sub-container">
                                        <span>Zone: Coeur</span>
                                        <span>Conséquence: Importante</span>
                                    </div>
                                    <p>Un manque de sommeil chronique conduit à la production d’hormones et de molécules qui augmentent le risque cardiaque mais aussi d'autres risques, comme l'hypertension artérielle et le cholestérol, le diabète et l'obésité. Cette privation peut augmenter jusqu’à 48% le risque de crises cardiaques et de troubles cardiovasculaires, souvent responsables de décès précoces. </p>
                                </div>
                            </Slider>

                            <Slider className="slider-effect slider-2" {...settings} asNavFor={this.state.nav2}
                                             ref={slider => (this.slider1 = slider)}>
                            <div className="item">
                                <h3>Manque de réflexes</h3>
                                <div className="sub-container">
                                    <span>Zone: Tout le corps</span>
                                    <span>Conséquence: Moyenne</span>
                                </div>
                                <p>le rendement cognitif et la coordination motrice diminuent de façon considérable quand une personne n’a pas suffisamment dormi. Selon la National Highway Traffic Safety Administration (NHTSA, en anglais) des États-Unis, plus de quarante mille personnes souffrent de blessures chaque année. Et ce, à cause de problèmes dus au manque de sommeil. </p>
                            </div>
                            <div className="item">
                                <h3>Perte de la concentration</h3>
                                <div className="sub-container">
                                    <span>Zone: Tout le corps</span>
                                    <span>Conséquence: Moyenne</span>
                                </div>
                                <p>Le rendement cognitif et la coordination motrice diminuent de façon considérable quand une personne n’a pas suffisamment dormi. Selon la National Highway Traffic Safety Administration (NHTSA, en anglais) des États-Unis, plus de quarante mille personnes souffrent de blessures chaque année. Et ce, à cause de problèmes dus au manque de sommeil. </p>
                            </div>
                        </Slider>

                            <Slider className="slider-effect slider-3" {...settings} asNavFor={this.state.nav2}
                                    ref={slider => (this.slider1 = slider)}>
                                <div className="item">
                                    <h3>Temps de sommeil optimal</h3>
                                    <div className="sub-container">
                                        <span>Zone: Tout le corps</span>
                                        <span>Conséquence: Moyenne</span>
                                    </div>
                                    <p> Lorsque que l’on se penche sur la notion de qualité de vie, le sommeil apparait donc comme un facteur essentiel : les bons dormeurs ont bien une meilleure qualité de vie, un corps en bonne santé, ainsi qu'un moindre risque de dépression et de toutes autres autres maladies précédemment citées.  La recommandation donnée par les chercheurs est de dormir une durée normale, ni trop courte, ni trop longue, de six à neuf heures de sommeil par nuit, selon les besoins personnels de chacun</p>
                                </div>
                                <div className="item">
                                    <h3>Attention tout de même à l'excès</h3>
                                    <div className="sub-container">
                                        <span>Zone: Tout le corps</span>
                                        <span>Conséquence: Moyenne</span>
                                    </div>
                                    <p> Attention car si dormir peu n'est pas sans risque pour la santé, trop dormir le serait tout autant. Au dela de 9 heures par nuit de façon régulière, les recherches ont mis en évidence que cela pouvait avoir un impact néfaste sur le développement de maladies cardio-vasculaires.</p>
                                </div>
                            </Slider>


                        </div>

                        <div className="slider-right">

                            <Slider {...settingsImg} asNavFor={this.state.nav1}
                                    ref={slider => (this.slider2 = slider)}>
                                <div className="item">
                                    <img src={body_woman} className="body_img" alt="Corps humain" />
                                    <div className="block block-1"/>
                                </div>
                                <div className="item">
                                    <img src={body_woman} className="body_img" alt="Corps humain" />
                                    <div className="block block-2"/>
                                </div>
                                <div className="item">
                                    <img src={body_woman} className="body_img" alt="Corps humain" />
                                    <div className="block block-3"/>
                                </div>
                            </Slider>

                        </div>

                        {/*
                        <div className="container-img">
                            <img src={body_woman} className="body_img" alt="Corps humain" />
                            <div className="block block-1" onMouseEnter={this.handleMouseHover}
                                 onMouseLeave={this.handleMouseHover}>
                                {
                                    this.state.isHovering &&
                                    <div className="text-block text-block-1">
                                        <h5>Usure du cerveau</h5>
                                        <p>Lorsque nous dormons, le cerveau régénère les cellules qui lui permettent de “récupérer les énergies” et prévenir les maladies. Si nous ne nous reposons pas assez, il ne peut pas nettoyer les protéines qui provoquent les plaques d’Alzheimer ou la démence.</p>
                                    </div>
                                }
                            </div>

                            <div className="block block-2" onMouseEnter={this.handleMouseHover2}
                                 onMouseLeave={this.handleMouseHover2}>
                                {
                                    this.state.isHovering2 &&
                                    <div className="text-block text-block-2">
                                        <h5>Manque de réflexes</h5>
                                        <p>Le rendement cognitif et la coordination motrice diminuent de façon considérable quand une personne n’a pas suffisamment dormi. Selon la National Highway Traffic Safety Administration (NHTSA, en anglais) des États-Unis, plus de quarante mille personnes souffrent de blessures chaque année. Et ce, à cause de problèmes dus au manque de sommeil.</p>
                                    </div>
                                }
                            </div>

                            <div className="block block-3"  onMouseEnter={this.handleMouseHover3}
                                 onMouseLeave={this.handleMouseHover3}/>
                            {
                                this.state.isHovering3 &&
                                <div className="text-block text-block-2">
                                    <h5>Meilleur rendement</h5>
                                    <p>Comme conséquence du manque de lucidité et d’énergie, en dormant peu nous nous exposons à la diminution considérable de nos capacités. Ceux qui ne se reposent pas suffisamment ont tendance à donner moins de résultats dans les milieux professionnel.</p>
                                </div>
                            }
                        </div>
                        */}
                    </div>

                </div>
                <Footer/>
            </div>
        );
    }

}

export default Body;