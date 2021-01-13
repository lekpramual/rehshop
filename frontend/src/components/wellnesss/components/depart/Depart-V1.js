import React from "react";
// import { Link } from "react-router-dom";
import TabMenu from "../common/TabMenu";
import SearchHN from "../common/SearchHN";
import DepartTable from "./DepartTable";
function Depart() {
  return (
    <section className="content" style={{ marginTop: -16 }}>
      <div className="container-fluid">
        <TabMenu />
        <div className="row" style={{ marginTop: -5 }}>
          <div className="col-12">
            <div className="card">
              <SearchHN />
              <DepartTable />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Depart;
