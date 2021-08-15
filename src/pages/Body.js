import React, {Component} from 'react';
import Header from "../components/header"
import body_woman from "../img_femme_corps.png";
import Footer from "../components/footer";

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
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
                value: event.target.value
            });
        const valueSelected = event.target.value;

        let allBlocksItems = document.querySelectorAll('.block');

        allBlocksItems.forEach(function(item) {
            if (item.classList.contains('block-' + valueSelected)) {
                item.style.display = 'block'
            } else {
                item.style.display = 'none';
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

    render() {
        return (
            <div id="body">

                <Header/>

                <div className="body-content col-12">
                    <div>
                        <h1>Les effets du manque sommeil sur votre corps</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida libero quis dolor elementum aliquam. Aenean vulputate nisi et eros fermentum, in pellentesque ipsum pharetra. Quisque egestas sollicitudin accumsan.</p>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Temps de sommeil:
                        </label>
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option selected value="1">moins de 6 heures</option>
                                <option value="2">entre 6 à 8 heures</option>
                                <option value="3">Plus de 8 heures</option>
                            </select>

                        <input className="submit" type="submit" value="Envoyer" />
                    </form>
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
                </div>
                <Footer/>
            </div>
        );
    }

}

export default Body;