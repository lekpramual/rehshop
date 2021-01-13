import React from "react";
import { TabMenu } from "../components/common";
import ResultUpdateComponent from "../components/resultupdate/ReusltUpdate";

export default function ResultUpdate() {
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
                <i className="fas fa-user" /> แก้ไขข้อมูลการตรวจ
              </div>
              <div className="card-body">
                <ResultUpdateComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
