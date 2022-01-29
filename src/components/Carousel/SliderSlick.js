import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";

import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";

SliderSlick.propTypes = {};

function NextArrow(props) {
  const { onClick, className } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosRoundedIcon style={{ fontSize: 45 }} />
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosRoundedIcon style={{ fontSize: 45 }} />
    </div>
  );
}

function SliderSlick(props) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return <Slider {...settings}>{props.children}</Slider>;
}

export default SliderSlick;
