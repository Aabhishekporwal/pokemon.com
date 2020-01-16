import React from "react";

import "./index.css";
import { Arrow, getPokemon } from "./arrow";
import Bulbasaur from "./bulbasaur.png"
import Ivysaur from "./ivysaur.png"
import Pikachu from "./pikachu.png"
import Venusaur from "./venusaur.png"

class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImageIndex: 0,
            imgUrls: [],
            pokemon: {},
        };
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }
    componentDidMount() {

        getPokemon().then(response => {
            this.setState({
                pokemon: response,
               
            });
        });
    }


    previousSlide() {
        const { imgUrls } = this.state;
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    nextSlide() {
        const { imgUrls } = this.state;

        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }
    render() {
        const { imgUrls, pokemon } = this.state;
        console.log("pokemon are", pokemon);

        return (
            // <div className="carousel">
            //     {imgUrls && imgUrls.map(value => (
            //         <div class="card">
            //             <ImageSlide url={value} className="card-img-top" />
            //             <div class="card-body">
            //                 <h5 class="card-title">Card title</h5>
            //                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            //                 <a href="#" class="btn btn-primary">Go somewhere</a>
            //             </div>
            //         </div>
            //     ))}
            //     <Arrow
            //         direction="left"
            //         clickFunction={this.previousSlide}
            //         glyph="&#9664;" />
            //     <Arrow
            //         direction="right"
            //         clickFunction={this.nextSlide}
            //         glyph="&#9654;" />
            // </div>


            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="false">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="card">
                            <div class="card-header">
                                <span>Bulbasaur</span>
                                <span className="float-right">ID : 1</span>
                            </div>
                            <div className="card-body">
                                <img class="card-img-top" src={Bulbasaur} alt="..." />
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <span>Bulbasaur</span>
                                <span className="float-right">ID : 2</span>
                            </div>
                            <div className="card-body">
                            <img class="card-img-top" src={Ivysaur} alt="..." />
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <span>Bulbasaur</span>
                                <span className="float-right">ID : 3</span>
                            </div>
                            <div className="card-body">
                            <img class="card-img-top" src={Venusaur} alt="..." />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card">
                            <div class="card-header">
                                <span>Bulbasaur</span>
                                <span className="float-right">ID : 4</span>
                            </div>
                            <div className="card-body">
                                <img class="card-img-top" src={Pikachu} alt="..." />
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <span>Bulbasaur</span>
                                <span className="float-right">ID : 5</span>
                            </div>
                            <div className="card-body">
                            <img class="card-img-top" src={Venusaur} alt="..." />
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <span>Bulbasaur</span>
                                <span className="float-right">ID : 6</span>
                            </div>
                            <div className="card-body">
                            <img class="card-img-top" src={Bulbasaur} alt="..." />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card">
                            <div class="card-header">
                                <span>Bulbasaur</span>
                                <span className="float-right">ID : 7</span>
                            </div>
                            <div className="card-body">
                                <img class="card-img-top" src={Bulbasaur} alt="..." />
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <span>Bulbasaur</span>
                                <span className="float-right">ID : 8</span>
                            </div>
                            <div className="card-body">
                            <img class="card-img-top" src={Bulbasaur} alt="..." />
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <span>Bulbasaur</span>
                                <span className="float-right">ID : 9</span>
                            </div>
                            <div className="card-body">
                            <img class="card-img-top" src={Bulbasaur} alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span>Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span>Next</span>
                </a>
            </div>


        );
    }
}

export default Carousel;