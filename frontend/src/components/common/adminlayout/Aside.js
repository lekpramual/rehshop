import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

import AdminLTELogo from "../../../assets/img/187-file-9.svg";
import member from "../../../assets/img/101-analytics-4.svg";

function Aside(props) {
  const pathname = props.location.pathname;

  // const handleNavitem = (navItem) => {
  //   return pathname === navItem
  //     ? "nav-item has-treeview menu-open"
  //     : "nav-item has-treeview";
  // };

  const handleNavLink = (navLink) => {
    return pathname === navLink ? "nav-link active" : "nav-link";
  };

  useEffect(() => {}, [pathname]);

  const ChildMenu = () => {
    return (
      <nav className="mt-2">
        <ul
          className="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <li className="nav-item">
            <Link
              to="/shop/member"
              className={handleNavLink("/shop/member")}
              replace
            >
              <img
                src={member}
                alt="dashboard Logo"
                style={{
                  width: 30,
                  marginRight: 5,
                  marginLeft: -7,
                  paddingBottom: 2,
                }}
              />
              <p style={{ fontWeight: "bold" }}> เช็กยอดปันผล </p>
            </Link>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <Link to="/dashboard" className="brand-link">
        {/* <img
          src={AdminLTELogo}
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8", width:30, }}
        /> */}
        <img
          src={AdminLTELogo}
          alt="AdminLTELogo Logo"
          className="brand-image elevation-3"
          style={{
            width: 35,
            marginRight: 5,
            marginLeft: 10,
            paddingBottom: 2,
          }}
        />
        <span className="brand-text font-weight-light">Shop101 REH</span>
      </Link>
      {/* Sidebar */}
      <div className="sidebar">
        <ChildMenu />
      </div>
    </aside>
  );
}
export default withRouter(Aside);
