import React from 'react'
import Slider from "react-slick";
import './slider.scss'
const Arrows = () => <div />

var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    speed: 1000,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    nextArrow: <Arrows />,
    prevArrow: <Arrows />,

    appendDots: dots => (
        <div
            style={{
                borderRadius: '10px',
                padding: '10px',

            }}
        >
            <ul
                style={{
                    margin: '0px',
                    paddingLeft: '0px',
                }}
            >
                {' '}
                {dots}{' '}
            </ul>
        </div>
    ),
};
const ImageSlider = (props) => (
    <div className="Sld">
        <div className="overlay">
            <p >
                <h1 style={{ fontWeight: 'bold' }}>Share the Fun!</h1>
                <h6>Val-Memoir creates that fun environmaent to share your memorable experience with the world!</h6>
                <h6>Love the say, exists in sharing.</h6>
            </p>
            <div className="btn_P">
                <button className="btn" onClick={() => props.onClicked('share', 'Add Story')}>Share Experience</button>
            </div>
        </div>
        <Slider {...settings}>



            <div className="frm">
                <img src="/assets/love.jpg" alt="img-1" />

            </div>
            <div className="frm">
                <img src="/assets/Val.png" alt="img-1" />
            </div>
            <div className="frm">
                <img src="/assets/love.jpg" alt="img-1" />
            </div>
            <div className="frm">
                <img src="/assets/Val.png" alt="img-1" />
            </div>


        </Slider>
    </div>


)

export default ImageSlider