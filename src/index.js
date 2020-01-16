import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "./index.css";
import Carousel from "./carousel";

class ReactSlickDemo extends React.Component {
  render() {
    var settings = {
      dots: true
    };
    return (
      <div id="container">
        <Slider {...settings}>
          <div>
            <img src="http://placekitten.com/g/400/200" />
            <img src="http://placekitten.com/g/400/200" />
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
            <img src="http://placekitten.com/g/400/200" />
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
            <img src="http://placekitten.com/g/400/200" />
            <img src="http://placekitten.com/g/400/200" />
          </div>
        </Slider>
      </div>
    );
  }
}

ReactDOM.render(
  <Carousel />,
  document.getElementById('container')
);




