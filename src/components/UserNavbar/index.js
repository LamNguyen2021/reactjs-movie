import React from "react";
import MainNav from "./MainNav";
import UnLoggedUI from "./UnLoggedUI";

const logo = "/images/logo.png";

function UserNavbar(props) {
  return (
    <>
      <header id="header">
        <div className="header-wrapper">
          <div className="nav-bar container-fluid">
            <a href="#" className="navbar-brand">
              <img className="logo-img" src={logo} alt="logo" />
            </a>
            <MainNav customClass="header__mid" />
            <UnLoggedUI customClass="header__last" />
          </div>
        </div>
      </header>
      <div style={{ marginTop: "60px" }}></div>
    </>
  );
}

export default UserNavbar;
