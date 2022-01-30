import React from "react";
import PropTypes from "prop-types";

UnSelectUI.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

function UnSelectUI(props) {
  const { name, label, message } = props;
  return (
    <div className={`search__group ${name}`}>
      <select name={name}>
        <option value="" hidden>
          {label}
        </option>
        <option value={message} disabled>
          {message}
        </option>
      </select>
    </div>
  );
}

export default UnSelectUI;
