import React from "react";

function MainNav(props) {
  const { customClass } = props; //nhận từ cha

  return (
    <ul className={`${customClass}`}>
      <li className="nav-item hideOnDesk">
        <a className="nav-link" href="/#lichchieu">
          Lịch Chiếu
        </a>
      </li>
      <li className="nav-item hideOnDesk">
        <a className="nav-link" href="/#cumrap">
          Cụm Rạp
        </a>
      </li>
      <li className="nav-item hideOnDesk">
        <a className="nav-link" href="/#tintuc">
          Tin Tức
        </a>
      </li>
      <li className="nav-item hideOnDesk">
        <a className="nav-link" href="/#ungdung">
          Ứng Dụng
        </a>
      </li>
    </ul>
  );
}

export default MainNav;
