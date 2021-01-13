import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
/**
 * Actions
 */
//import { healthsFetch } from "../../../../reduxs/actions/Health";
/**
 * Component
 */
import ResultUpdate from "./ResultUpdate";
// Set Date For Thai
import DateThai from "../../../../utils/DateThai";
import moment from "moment";
import "moment/locale/th.js";
// require("bootstrap/less/bootstrap.less");
moment.locale("th");

function ResultTable(props) {
  const { healths, page } = props;

  const initialState = {
    vstdate: "",
    hn: "",
  };

  const [data, setData] = useState(initialState);

  const headers = [
    { label: "ลำดับ", key: "no" },
    { label: "วันที่ตรวจ", key: "daterequest" },
    { label: "HN", key: "hn" },
    { label: "ชื่อ", key: "fname" },
    { label: "นามสกุล", key: "lname" },
    { label: "หน่วยงาน", key: "department" },
  ];

  var csvData = [];
  healths.healths.map((res) => {
    return (csvData = res.data.map((res, index) => {
      return {
        no: index + 1,
        // daterequest: moment(res.daterequest).format("ll"),
        daterequest: DateThai(res.daterequest),
        hn: ` ${" "}${res.hn} ${"\u00A0"}`,
        fname: res.fname,
        lname: res.lname,
        department: res.dep_name,
      };
    }));
  });

  return (
    <div className="card-body table-responsive">
      <div className="row ">
        <div className="col-12">
          <CSVLink
            className="btn btn-sm btn-primary float-right"
            data={csvData}
            headers={headers}
            filename={"รายงานผลการตรวจสุขภาพ.csv"}
            target="_blank"
          >
            <i className="fas fa-file-export" /> ส่งออก
          </CSVLink>
        </div>
      </div>
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
              {healths.healths.map((rs) => {
                return rs.data.map((rs, index) => {
                  return (
                    <tr key={index}>
                      <td style={{ verticalAlign: "middle" }}>
                        {(page - 1) * 20 + index + 1}
                      </td>
                      <td style={{ verticalAlign: "middle" }}>
                        {DateThai(rs.daterequest)}
                      </td>
                      <td style={{ verticalAlign: "middle" }}> {rs.hn}</td>
                      <td style={{ verticalAlign: "middle" }}>{rs.fname}</td>
                      <td style={{ verticalAlign: "middle" }}>{rs.lname}</td>
                      <td style={{ verticalAlign: "middle" }}>{rs.dep_name}</td>
                      <td style={{ verticalAlign: "middle" }}>
                        <Link to="#" className="btn btn-sm btn-info">
                          <i className="fas fa-eye"></i>
                        </Link>{" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-primary"
                          data-toggle="modal"
                          data-target="#modal-lg"
                          onClick={() =>
                            setData({
                              ...data,
                              hn: rs.hn,
                              vstdate: moment(rs.daterequest).format(
                                "YYYY-MM-DD"
                              ),
                            })
                          }
                        >
                          <i className="fas fa-edit" />
                        </button>{" "}
                        <Link to="#" className="btn btn-sm btn-danger disabled">
                          <i className="fas fa-trash"></i>
                        </Link>
                      </td>
                    </tr>
                  );
                });
              })}
            </tbody>
          </table>
        </div>
      </div>

      <ResultUpdate hn={data.hn} vstdate={data.vstdate} />
    </div>
  );
}

export default ResultTable;
