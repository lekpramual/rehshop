import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";

// Lib Style
import "react-toastify/dist/ReactToastify.css";
/**
 * Actions
 */

import { labFetch } from "../../../../reduxs/actions/Lab";
/**
 * Component
 */
/**
 * Component
 */
import Disconnect from "../common/Disconnect";
import Loading from "../common/Loading";
import InfoMassage from "../common/InfoMassage";
import WarningMassage from "../common/WarningMassage";
import StepperContentTab4Lab from "./StepperContentTab4Lab";

function StepperContentTab4(props) {
  const dispatch = useDispatch();
  const labs = useSelector((state) => state.labs);
  const labsStatus = useSelector((state) => state.labs.status);
  const labsError = useSelector((state) => state.labs.error);

  const initialState = {
    xray: { value: "ปกติ", isValid: true },
    xray_txt: { value: "", isValid: true },
    pepsmear: { value: "ตรวจ", isValid: true },
    pepsmear_txt: { value: "", isValid: true },
  };
  const [data, setData] = useState(initialState);

  /**
   * Custom Style
   */
  const customStylesRow = {
    marginTop: "-10px",
  };

  /*********************
   * Handle even
   ********************/
  const handleChange = (even) => {
    if (even.target.name === "xray") {
      if (even.target.value === "ปกติ") {
        setData({
          ...data,
          xray: {
            value: even.target.value,
            isValid: true,
          },
          xray_txt: {
            value: "",
            isValid: true,
          },
        });
      } else if (even.target.value === "ผิดปกติ") {
        setData({
          ...data,
          xray: {
            value: even.target.value,
            isValid: true,
          },
        });
      } else {
        setData({
          ...data,
          xray: {
            value: even.target.value,
            isValid: true,
          },
          xray_txt: {
            value: "",
            isValid: true,
          },
        });
      }
    } else if (even.target.name === "pepsmear") {
      if (even.target.value === "ตรวจ") {
        setData({
          ...data,
          pepsmear: {
            value: even.target.value,
            isValid: true,
          },
          pepsmear_txt: {
            value: "",
            isValid: true,
          },
        });
      } else {
        setData({
          ...data,
          pepsmear: {
            value: even.target.value,
            isValid: true,
          },
        });
      }
    } else {
      setData({
        ...data,
        [even.target.name]: {
          value: even.target.value,
          isValid: true,
        },
      });
    }
  };

  const formIsValidTabs4 = () => {
    let isGood = true;
    if (data.xray.value === "ผิดปกติ") {
      if (data.xray_txt.value === "") {
        data.xray_txt.isValid = false;
        isGood = false;
      }
    }

    if (data.pepsmear.value === "ไม่ตรวจ") {
      if (data.pepsmear_txt.value === "") {
        console.log("hearn cb : ว่าง");
        data.pepsmear_txt.isValid = false;
        isGood = false;
      }
    }

    if (!isGood) {
      setData({
        ...data,
      });
    }
    return isGood;
  };

  const onConfirmClick = (page) => {
    const msg = "stepperTab4";
    props.confirm(msg, page, data);
  };

  const handleTabs4Submit = (e, page) => {
    e.preventDefault();
    if (formIsValidTabs4()) {
      if (!isCheckData()) {
        if (page === "previous") {
          onConfirmClick(page);
        } else {
          toast.warn("ผิดพลาด! ไม่มีข้อมูลผล Lab", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } else {
        onConfirmClick(page);
      }
    }
  };
  const { hn, vstdate } = props;
  const markText = <b style={{ color: "red" }}>*</b>;

  function isCheckData() {
    let iscount;
    labs.labs.map((rs) => {
      if (rs.data.length === 0) {
        iscount = false;
        return iscount;
      } else {
        iscount = true;
        return iscount;
      }
    });

    return iscount;
  }

  let contentLabs;
  if (labsStatus === "idle") {
    contentLabs = <InfoMassage msg=" กำลังโหลดข้อมูลผล ..." />;
  } else if (labsStatus === "loading") {
    contentLabs = <Loading />;
  } else if (labsStatus === "succeeded") {
    contentLabs = isCheckData() ? (
      <StepperContentTab4Lab labs={labs} />
    ) : (
      <WarningMassage msg="-- ไม่มีข้อมูลผล Lab กรุณาตรวจสอบ HN หรือ วันที่ตรวจ. ---" />
    );
  } else if (labsStatus === "failed") {
    contentLabs = <Disconnect isError={labsError} />;
  }

  useEffect(() => {
    dispatch(labFetch(hn, vstdate));
  }, [hn, vstdate, dispatch]);

  return (
    <div id="test-l-4" className="content">
      <div className="row">
        <div className="col-12">
          <div className="card card-primary" style={{ boxShadow: "none" }}>
            <div className="card-body">
              {/* Group 1 */}
              <div className="row" style={customStylesRow}>
                <div className="col-12">
                  <div className="form-group">
                    <label>เอ็กเรย์ทรวงอก {markText}</label>

                    <div className="form-group">
                      <div className="custom-control custom-radio">
                        <input
                          className="custom-control-input"
                          type="radio"
                          id="customRadioxray1"
                          name="xray"
                          value="ปกติ"
                          checked={data.xray.value === "ปกติ"}
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="customRadioxray1"
                          className="custom-control-label"
                        >
                          ปกติ
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" style={customStylesRow}>
                <div className="col-2">
                  <div className="form-group">
                    <div className="custom-control custom-radio">
                      <input
                        className="custom-control-input"
                        type="radio"
                        id="customRadioxray2"
                        name="xray"
                        value="ผิดปกติ"
                        checked={data.xray.value === "ผิดปกติ"}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="customRadioxray2"
                        className="custom-control-label"
                      >
                        ผิดปกติ
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-10">
                  <div className="form-group">
                    <textarea
                      className={classNames("form-control form-control-sm ", {
                        "form-control form-control-sm is-invalid":
                          data.xray_txt.isValid === false,
                      })}
                      rows="1"
                      name="xray_txt"
                      value={data.xray_txt.value}
                      onChange={handleChange}
                      disabled={data.xray.value === "ผิดปกติ" ? false : true}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row" style={customStylesRow}>
                <div className="col-2">
                  <div className="form-group">
                    <div className="custom-control custom-radio">
                      <input
                        className="custom-control-input"
                        type="radio"
                        id="customRadioxray3"
                        name="xray"
                        value="ไม่ตรวจ"
                        checked={data.xray.value === "ไม่ตรวจ"}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="customRadioxray3"
                        className="custom-control-label"
                      >
                        ไม่ตรวจ
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* Group 2 */}
              <div className="row" style={customStylesRow}>
                <div className="col-12">
                  <div className="form-group">
                    <label>มะเร็งปากมดลูก {markText}</label>

                    <div className="form-group">
                      <div className="custom-control custom-radio">
                        <input
                          className="custom-control-input"
                          type="radio"
                          id="customRadio1pepsmear"
                          name="pepsmear"
                          value="ตรวจ"
                          checked={data.pepsmear.value === "ตรวจ"}
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="customRadio1pepsmear"
                          className="custom-control-label"
                        >
                          ตรวจ
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" style={customStylesRow}>
                <div className="col-2">
                  <div className="form-group">
                    <div className="custom-control custom-radio">
                      <input
                        className="custom-control-input"
                        type="radio"
                        id="customRadio2pepsmear"
                        name="pepsmear"
                        value="ไม่ตรวจ"
                        checked={data.pepsmear.value === "ไม่ตรวจ"}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="customRadio2pepsmear"
                        className="custom-control-label"
                      >
                        ไม่ตรวจ
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-10">
                  <div className="form-group">
                    <textarea
                      rows="1"
                      name="pepsmear_txt"
                      className={classNames("form-control form-control-sm ", {
                        "form-control form-control-sm is-invalid":
                          data.pepsmear_txt.isValid === false,
                      })}
                      value={data.pepsmear_txt.value}
                      onChange={handleChange}
                      disabled={
                        data.pepsmear.value === "ไม่ตรวจ" ? false : true
                      }
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* LAB RESULT */}
              {contentLabs}

              {/* Footer Button */}
              <div className="row">
                <div className="col-12">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={(e) => handleTabs4Submit(e, "previous")}
                  >
                    <i className="fas fa-angle-left" /> ย้อนกลับ
                  </button>{" "}
                  <button
                    key="btnsave"
                    type="submit"
                    className="btn btn-success btn-sm float-right"
                    data-toggle="modal"
                    data-target="#modal-sm"
                    onClick={(e) => handleTabs4Submit(e, "save")}
                  >
                    <i className="fas fa-save" /> บันทึก
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepperContentTab4;
