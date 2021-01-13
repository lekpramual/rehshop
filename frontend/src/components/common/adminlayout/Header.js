import React from "react";
import routes from "../../../routes";
import { Link, useLocation } from "react-router-dom";
// import User2 from "../../../assets/img/avatar.png";

function HeaderView() {
  const location = useLocation();
  var routename = "";
  var iconname = "";
  routes.map((route) => {
    if (route.path === location.pathname) {
      routename = route.name;
      iconname = route.icon;
    }
    return { routename, iconname };
  });

  //console.log(routename);
  return (
    <span>
      <i className={iconname}></i> {routename}
    </span>
  );
}

export default function Header() {
  return (
    <nav className="main-header navbar navbar-expand navbar-dark navbar-blue">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            className="nav-link"
            data-widget="pushmenu"
            to="#"
            role="button"
          >
            <i className="fas fa-bars" />
          </Link>
        </li>
      </ul>
      {/* Left navbar links */}
      <ul
        className="navbar-nav ml-auto d-none d-md-block"
        style={{ fontSize: 25, marginTop: -20 }}
      >
        <li className="nav-item ">
          <Link className="nav-link" to="#" style={{ color: "white" }}>
            {HeaderView()}
          </Link>
        </li>
      </ul>
      <ul
        className="navbar-nav ml-auto d-md-none"
        style={{ fontSize: 20, marginTop: -5 }}
      >
        <li className="nav-item ">
          <Link className="nav-link" to="#" style={{ color: "white" }}>
            {HeaderView()}
          </Link>
        </li>
      </ul>

      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto"></ul>
    </nav>
  );
}
