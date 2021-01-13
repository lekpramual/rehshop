import React from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * View
 */
export default function TabMenu() {
  const location = useLocation();
  return (
    <div className="row mt-0">
      <div className="col-12 col-sm-12">
        <div className="card card-primary card-outline card-outline-tabs">
          <div className="card-header p-0 border-bottom-0">
            <ul
              className="nav nav-tabs flex-column flex-sm-row"
              id="custom-tabs-four-tab"
              role="tablist"
            >
              {/* Menu 1 */}
              <li className="nav-item">
                <Link
                  className={
                    location.pathname === "/wellness/record"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  replace
                  to="/wellness/record"
                  style={{
                    //height: 50,
                    backgroundColor: "#f8f9fa",
                  }}
                  id="custom-tabs-four-home-tab"
                  role="tab"
                  aria-controls="custom-tabs-four-home"
                  aria-selected="false"
                >
                  <i className="fas fa-save" /> บันทึกข้อมูล
                </Link>
              </li>
              {/* Menu 2 */}
              <li className="nav-item dropdown">
                <Link
                  id="dropdownSubMenu1"
                  to="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className={
                    location.pathname === "/wellness/result"
                      ? "nav-link active dropdown-toggle"
                      : "nav-link dropdown-toggle"
                  }
                  replace
                  style={{
                    //height: 50,
                    backgroundColor: "#f8f9fa",
                  }}
                >
                  <i className="fas fa-chart-line nav-icon"></i>{" "}
                  รายงานผลการตรวจสุขภาพ
                </Link>

                <ul
                  aria-labelledby="dropdownSubMenu1"
                  className="dropdown-menu border-0 shadow"
                >
                  <li className="dropdown-submenu dropdown-hover">
                    <Link
                      id="dropdownSubMenu1"
                      to="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="dropdown-item dropdown-toggle"
                    >
                      <i className="fas fa-chart-line nav-icon"></i>{" "}
                      ผลการตรวจสุขภาพ
                    </Link>
                    <ul
                      aria-labelledby="dropdownSubMenu1"
                      className="dropdown-menu border-0 shadow"
                    >
                      <li>
                        <Link
                          tabIndex={-1}
                          to="/wellness/result"
                          className="dropdown-item"
                        >
                          <i className="fas fa-chart-line" /> ผลการตรวจสุขภาพ
                        </Link>
                      </li>
                      {/* End Level three */}
                      {/* <li><Link to="/wellness/resultcompare" className="dropdown-item"><i className="fas fa-file-medical"/> สรุปผลการตรวจแยกปี</Link></li> */}
                    </ul>
                  </li>
                  {/* <li className="dropdown-submenu dropdown-hover">
                        <Link id="dropdownSubMenu2" to="#" 
                        role="button" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false" 
                        className="dropdown-item dropdown-toggle"><i className="fas fa-chart-bar nav-icon"></i> รายงาน</Link>
                        <ul aria-labelledby="dropdownSubMenu2" className="dropdown-menu border-0 shadow">
                          <li>
                            <Link tabIndex={-1} to="#" className="dropdown-item">รายงานผลการตรวจสุขภาพ</Link>
                          </li>
                        </ul>
                      </li> */}
                  {/* End Level two */}
                </ul>
              </li>

              {/* <li className="nav-item dropdown">
                <Link
                  to="#"
                  className={
                    location.pathname === "/wellness/depart"
                      ? "nav-link active dropdown-toggle"
                      : "nav-link dropdown-toggle"
                  }
                  replace
                  data-toggle="dropdown"
                  style={{
                    //height: 50,
                    backgroundColor: "#f8f9fa",
                  }}
                >
                  <i className="fas fa-cogs nav-icon"></i> ข้อมูลพื้นฐาน
                </Link>
                <div className="dropdown-menu">
                  <Link to="/wellness/depart" className="dropdown-item">
                    <i className="fas fa-cogs" /> ข้อมูลหน่วยงาน
                  </Link>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
