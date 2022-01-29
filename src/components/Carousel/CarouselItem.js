import React from "react";
import PropTypes from "prop-types";
import ModalMovieTrailer from "./ModalMovieTrailer";

const playTrailer = "/images/play.png";

CarouselItem.propTypes = {
  detailMovie: PropTypes.object.isRequired,
};

function CarouselItem(props) {
  const { detailMovie } = props;

  return (
    <>
      <div className="carousel__item">
        <div className="carousel__img">
          <img
            className="img__bg"
            src={detailMovie.hinhAnh}
            alt={detailMovie.biDanh}
          />
        </div>
        <div className="playBtn__overlay">
          <a
            className="play__link"
            data-toggle="modal"
            data-target="#movieTrailer"
          >
            <img src={playTrailer} alt="play trailer" />
          </a>
        </div>
      </div>
      {/* <ModalMovieTrailer /> */}
    </>
  );
}

export default CarouselItem;
