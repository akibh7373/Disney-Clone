import React from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <Carousel {...settings}>
        <Wrap>
            <img src="/images/slider-badag.jpg" />
        </Wrap>
        <Wrap>
            <img src="/images/slider-badging.jpg" />
        </Wrap>
        <Wrap>
            <img src="/images/slider-scale.jpg" />
        </Wrap>
        <Wrap>
            <img src="/images/slider-scales.jpg" />
        </Wrap>
    </Carousel>
  )
}

export default ImgSlider;

const Carousel = styled(Slider) `
    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }
    .slick-dots li.slick-active button::before {
        color: #fff;
    }
    .slick-list {
        overflow: visible;
    }
    button {
        z-index: 1;
    }
`
const Wrap = styled.div `
    margin-top: 20px;
    cursor: pointer;
    img {
        border: 4px solid transparent;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
        rgb(0 0 0 / 73%) 0 16px 10px -10px;
    }

`