import React from "react";
import SelectItem from "./SelectItem";
import UnSelectUI from "./UnSelectUI";

function Search(props) {
  return (
    <section className="search myContainer">
      <form className="search__form">
        <SelectItem label="Phim" name="movieSelect" />
        <UnSelectUI
          name="cinemaSelect"
          label="Rạp"
          message="Vui lòng chọn phim"
        />
        <UnSelectUI
          name="daySelect"
          label="Ngày chiếu"
          message="Vui lòng chọn phim và rạp"
        />
        <UnSelectUI
          name="timeSelect"
          label="Giờ chiếu"
          message="Vui lòng chọn phim, rạp và ngày chiếu"
        />
        <div className="search__group search__button">
          <button className="btnBuyTicket">MUA VÉ NGAY</button>
        </div>
      </form>
    </section>
  );
}

export default Search;
