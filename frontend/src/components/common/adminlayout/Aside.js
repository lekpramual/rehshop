import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

import AdminLTELogo from "../../../assets/img/187-file-9.svg";
import archive from "../../../assets/img/155-file-26.svg";
import setting from "../../../assets/img/170-folder-13.svg";
import dashboard from "../../../assets/img/015-analytics-7.svg";
// import member from "../../../assets/img/101-analytics-4.svg";

function Aside(props) {
  const pathname = props.location.pathname;

  const handleNavitem = (navItem) => {
    return pathname === navItem
      ? "nav-item has-treeview menu-open"
      : "nav-item has-treeview";
  };

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
              to="/backoffice/dashboard"
              className={handleNavLink("/backoffice/dashboard")}
              replace
            >
              <img
                src={dashboard}
                alt="dashboard Logo"
                style={{
                  width: 30,
                  marginRight: 5,
                  marginLeft: -7,
                  paddingBottom: 2,
                }}
              />
              <p style={{ fontWeight: "bold" }}> ภาพรวม </p>
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/forms" className={handleNavLink("/forms")} replace>
            <img
                src={notepad}
                alt="notepad Logo"
                style={{
                  width:30,
                  marginRight:5,
                  marginLeft:-7,
                  paddingBottom:2
                }}
              />
              <p style={{fontWeight:'bold'}}>บันทึกข้อมูล</p>
            </Link>
          </li> */}
          <li
            className={
              pathname === "/wellness/dashboard" ||
              pathname === "/wellness/record" ||
              pathname === "/wellness/result" ||
              pathname === "/wellness/depart"
                ? handleNavitem(pathname)
                : "nav-item has-treeview"
            }
          >
            <Link
              to="#"
              className={
                pathname === "/wellness/dashboard" ||
                pathname === "/wellness/record" ||
                pathname === "/wellness/result" ||
                pathname === "/wellness/depart"
                  ? handleNavLink(pathname)
                  : "nav-link"
              }
              replace
            >
              <img
                src={archive}
                alt="archive Logo"
                style={{
                  width: 30,
                  marginRight: 5,
                  marginLeft: -7,
                  paddingBottom: 2,
                }}
              />
              <p style={{ fontWeight: "bold" }}>
                บริการสุขภาพ
                <i className="right fas fa-angle-left" />
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item ">
                <Link
                  to="/wellness/dashboard"
                  className={
                    pathname === "/wellness/dashboard" ||
                    pathname === "/wellness/record" ||
                    pathname === "/wellness/result" ||
                    pathname === "/wellness/depart"
                      ? handleNavLink(pathname)
                      : "nav-link"
                  }
                  replace
                >
                  <i className="fas fa-heartbeat nav-icon" />
                  <p>ผลตรวจสุขภาพ</p>
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={
              pathname === "/backoffice/contact"
                ? handleNavitem(pathname)
                : "nav-item has-treeview"
            }
          >
            <Link
              to="#"
              className={
                pathname === "/backoffice/contact"
                  ? handleNavLink(pathname)
                  : "nav-link"
              }
              replace
            >
              <img
                src={setting}
                alt="inbox Logo"
                style={{
                  width: 30,
                  marginRight: 5,
                  marginLeft: -7,
                  paddingBottom: 2,
                }}
              />
              <p style={{ fontWeight: "bold" }}>
                ตั้งค่า
                <i className="right fas fa-angle-left" />
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link
                  to="/backoffice/contact"
                  className={handleNavLink("/backoffice/contact")}
                  replace
                >
                  <i className="fas fa-comment nav-icon" />
                  <p>ติดต่อ</p>
                </Link>
              </li>
            </ul>
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
        <span className="brand-text font-weight-light">Backoffice REH</span>
      </Link>
      {/* Sidebar */}
      <div className="sidebar">
        <ChildMenu />
      </div>
    </aside>
  );
}
export default withRouter(Aside);
