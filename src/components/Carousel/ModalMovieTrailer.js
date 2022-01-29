import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

ModalMovieTrailer.propTypes = {};

function ModalMovieTrailer(props) {
  // $("#movieTrailer").on("hide.bs.modal", function (e) {
  //   $("#movieTrailer iframe").attr("src", $("#movieTrailer iframe").attr("src"))
  // });

  // useEffect(() => {
  //   $("#movieTrailer").on("hidden.bs.modal", function () {
  //     var $this = $(this).find("iframe"),
  //       tempSrc = $this.attr("src");
  //     $this.attr("src", "");
  //     $this.attr("src", tempSrc);
  //   });
  // }, []);

  return ReactDOM.createPortal(
    <div
      className="modal fade"
      id="movieTrailer"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="movieTrailerLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-body">
            <iframe
              width="100%"
              height="85%"
              src="https://www.youtube.com/embed/_t3IM_3UBug"
              title="movie trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default ModalMovieTrailer;
