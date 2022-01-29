import React from "react";
import homeCarouselData from "../../constants/homeCarouselData";
import CarouselItem from "./CarouselItem";
import SliderSlick from "./SliderSlick";

function Carousel(props) {
  const renderCarousel = () => {
    return homeCarouselData.map((item, index) => {
      return <CarouselItem key={index} detailMovie={item} />;
    });
  };

  return (
    <section className="carousel">
      <SliderSlick>{renderCarousel()}</SliderSlick>
    </section>
  );

  //eturn <section className="carousel">{renderCarousel()}</section>;
}

export default Carousel;
