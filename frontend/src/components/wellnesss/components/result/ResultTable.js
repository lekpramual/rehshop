import React from "react";
import { Link } from "react-router-dom";

// Set Date For Thai
import DateThai from "../../../../utils/DateThai";
import moment from "moment";
import "moment/locale/th.js";
// require("bootstrap/less/bootstrap.less");
moment.locale("th");

export default function ResultTable(props) {
  return (
    <div className="card-body table-responsive">
      <div className="row" style={{ marginTop: 5 }}>
        <div className="col-12 ">
          <table className="table table-bordered table-sm">
            <thead>
              <tr>
                <td style={{ width: 15 }}>#</td>
                <td>วันที่ตรวจ</td>
                <td>HN</td>
                <td>ชื่อ</td>
                <td>นามสกุล</td>
                <td>หน่วยงาน</td>
                <td style={{ width: 120 }} className="text-center">
                  จัดการ
                </td>
              </tr>
            </thead>
            <tbody>
              {props.iscount ? (
                props.data.map((rs, index) => {
                  return (
                    <tr key={index}>
                      <td style={{ verticalAlign: "middle" }}>
                        {((props.page - 1) * 20 + index + 1).toLocaleString()}
                      </td>
                      <td style={{ verticalAlign: "middle" }}>
                        {DateThai(rs.daterequest)}
                      </td>
                      <td style={{ verticalAlign: "middle" }}> {rs.hn}</td>
                      <td style={{ verticalAlign: "middle" }}>{rs.fname}</td>
                      <td style={{ verticalAlign: "middle" }}>{rs.lname}</td>
                      <td style={{ verticalAlign: "middle" }}>{rs.dep_name}</td>
                      <td style={{ verticalAlign: "middle" }}>
                        <Link
                          to={{
                            pathname: `/wellness/resultview/${rs.hn}/${moment(
                              rs.daterequest
                            ).format("YYYY-MM-DD")}`,
                          }}
                          target="_blank"
                          className="btn btn-sm btn-info"
                        >
                          <i className="fas fa-eye"></i>
                        </Link>{" "}
                        <Link
                          to={{
                            pathname: `/wellness/resultupdate/${rs.hn}/${moment(
                              rs.daterequest
                            ).format("YYYY-MM-DD")}`,
                          }}
                          target="_blank"
                          className="btn btn-sm btn-primary"
                        >
                          <i className="fas fa-edit" />
                        </Link>{" "}
                        <Link to="#" className="btn btn-sm btn-danger disabled">
                          <i className="fas fa-trash"></i>
                        </Link>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr key="emtpydata">
                  <td
                    style={{ verticalAlign: "middle" }}
                    colSpan="7"
                    className="text-center"
                  >
                    {/* {(page - 1) * 20 + index + 1} */}
                    --- ไม่มีข้อมูล ---
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
