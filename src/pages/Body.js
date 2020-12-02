import React, {Component} from 'react';
import Header from "../components/header"
import body_woman from "../img_femme_corps.png";

class Body extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.handleMouseHover2 = this.handleMouseHover2.bind(this);
        this.state = {
            isHovering: false,
            isHovering2: false,
        };
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    handleMouseHover2() {
        this.setState(this.toggleHoverState2);
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

    render() {
        return (
            <div id="body">

                <Header/>

                <div className="body-content col-12">
                    <div>
                        <h1>Les effets du manque sommeil sur votre corps</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida libero quis dolor elementum aliquam. Aenean vulputate nisi et eros fermentum, in pellentesque ipsum pharetra. Quisque egestas sollicitudin accumsan.</p>
                    </div>
                    <div className="container-img">
                        <img src={body_woman} className="body_img" alt="Corps humain" />

                        <div className="block block-1" onMouseEnter={this.handleMouseHover}
                             onMouseLeave={this.handleMouseHover}>
                            {
                                this.state.isHovering &&
                                <div className="text-block text-block-1">
                                    <h5>Maladie 1</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            }
                        </div>

                        <div className="block block-2" onMouseEnter={this.handleMouseHover2}
                             onMouseLeave={this.handleMouseHover2}>
                            {
                                this.state.isHovering2 &&
                                <div className="text-block text-block-2">
                                    <h5>Maladie 2</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            }
                        </div>

                        <div className="block block-3" />
                    </div>
                </div>

            </div>
        );
    }

}

export default Body;