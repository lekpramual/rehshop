import React from "react";

export default function StepperContentTab4Lab(props) {
  /**
   * Custom Style
   */
  const customStylesRow = {
    marginTop: "-10px",
  };

  return (
    <div className="row" style={customStylesRow}>
      <div className="col-12">
        {/* collapsed-card ปิดการ์ด */}

        {/* <div className="card card-outline collapsed-card card-success"> */}
        <div className="card card-outline collapsed-card card-success">
          <div className="card-header">
            <h3 className="card-title">
              <i className="fas fa-vials" /> ข้อมูลผล Lab
            </h3>
            <div className="card-tools">
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="collapse"
              >
                <i className="fas fa-plus text-success" />
              </button>
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="maximize"
              >
                <i className="fas fa-expand text-success" />
              </button>
            </div>
            {/* /.card-tools */}
          </div>
          {/* /.card-header */}
          <div className="card-body">
            {props.labs.labs.map((rs) => {
              if (rs.data.length > 0) {
                return (
                  <div className="row" key="tblab">
                    {rs.data.map((rs) => {
                      return (
                        <div className="col-md-6 col-12" key={rs.lab_code}>
                          <div className="form-group">
                            <label>
                              {rs.lab_name === "" || rs.lab_name === null
                                ? "-"
                                : rs.lab_name}
                            </label>
                            <div className="input-group input-group-sm mb-3">
                              <input
                                type="text"
                                className="form-control"
                                value={
                                  rs.lab_result === "" ||
                                  rs.lab_result === undefined ||
                                  rs.lab_result === null
                                    ? "-"
                                    : rs.lab_result
                                }
                                readOnly
                              />
                              {rs.lab_unit === "" || rs.lab_unit === null ? (
                                ""
                              ) : (
                                <div className="input-group-append">
                                  <span className="input-group-text">
                                    {rs.lab_unit}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              } else {
                return (
                  <div className="row" key="tblabnotdata">
                    <div className="col-12 text-center">
                      <b className="text-danger">
                        -- ไม่มีข้อมูลผล Lab กรุณาตรวจสอบ --
                      </b>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
      {/* /.col */}
    </div>
  );
}
