import React from "react";
import avatar from "../../images/avatar.png";

function UnLoggedUI(props) {
  const { customClass } = props;

  return (
    <ul className={`${customClass}`}>
      <li className="nav-item nav-item--login">
        <a className="nav-link">
          <img className="avatar-img" src={avatar} alt="avatar" />
          Đăng Nhập
        </a>
      </li>
      <li className="nav-item nav-item--register">
        <a className="nav-link">Đăng Ký</a>
      </li>
    </ul>
  );
}

export default UnLoggedUI;
