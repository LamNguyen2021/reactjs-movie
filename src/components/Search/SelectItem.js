import React from "react";
import PropTypes from "prop-types";

SelectItem.propTypes = {};

function SelectItem(props) {
  const { name, label } = props;

  return (
    <div className={`search__group ${name}`}>
      <select name={name}>
        <option value="" hidden>
          {label}
        </option>
        <option value="phim 1">phim 1</option>
      </select>
    </div>
  );
}

export default SelectItem;
