import React from "react";
import { TabMenu } from "../components/common";
import ResultViewComponent from "../components/resultview";
export default function ReusltUpdate() {
  return (
    <section className="content" style={{ marginTop: -16 }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <TabMenu />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <i className="fas fa-user" /> ข้อมูลการตรวจสุขภาพ
              </div>
              <div className="card-body">
                <ResultViewComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
