import React, { useEffect, useState } from "react";
import classNames from "classnames";

export default function StepperContentTab2(props) {
  /**
   * State Default
   */
  const initialState = {
    // tabs 2 ประวัติการรักษา
    thermometer: {
      value: "",
      isValid: true,
    },
    pulse: {
      value: "",
      isValid: true,
    },
    respire: {
      value: "",
      isValid: true,
    },
    blood: {
      value: "",
      isValid: true,
    },
    weight: {
      value: "",
      isValid: true,
    },
    height: {
      value: "",
      isValid: true,
    },
    waistline: {
      value: "",
      isValid: true,
    },
    illness: { value: "ไม่มี", isValid: true },
    illness_txt: {
      value: "",
      isValid: true,
    },
    vivisection: { value: "ไม่มี", isValid: true },
    vivisection_txt: {
      value: "",
      isValid: true,
    },
    drug: { value: "ไม่มี", isValid: true },
    drug_txt: {
      value: "",
      isValid: true,
    },
    intolerance: { value: "ไม่มี", isValid: true },
    intolerance_txt: {
      value: "",
      isValid: true,
    },
  };
  // set state with formdefaults
  const [data, setData] = useState(initialState);

  /**
   * Custom Style
   */
  const customStylesRow = {
    marginTop: "-10px",
  };
  /**
   * Handel
   */
  const handleChange = (even) => {
    if (even.target.name === "illness") {
      if (even.target.value === "ไม่มี") {
        setData({
          ...data,
          illness: {
            value: even.target.value,
            isValid: true,
          },
          illness_txt: {
            value: "",
            isValid: true,
          },
        });
      } else {
        setData({
          ...data,
          illness: {
            value: even.target.value,
            isValid: true,
          },
        });
      }
    } else if (even.target.name === "vivisection") {
      if (even.target.value === "ไม่มี") {
        setData({
          ...data,
          vivisection: {
            value: even.target.value,
            isValid: true,
          },
          vivisection_txt: {
            value: "",
            isValid: true,
          },
        });
      } else {
        setData({
          ...data,
          vivisection: {
            value: even.target.value,
            isValid: true,
          },
        });
      }
    } else if (even.target.name === "drug") {
      if (even.target.value === "ไม่มี") {
        setData({
          ...data,
          drug: {
            value: even.target.value,
            isValid: true,
          },
          drug_txt: {
            value: "",
            isValid: true,
          },
        });
      } else {
        setData({
          ...data,
          drug: {
            value: even.target.value,
            isValid: true,
          },
        });
      }
    } else if (even.target.name === "intolerance") {
      if (even.target.value === "ไม่มี") {
        setData({
          ...data,
          intolerance: {
            value: even.target.value,
            isValid: true,
          },
          intolerance_txt: {
            value: "",
            isValid: true,
          },
        });
      } else {
        setData({
          ...data,
          intolerance: {
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

  const onConfirmClick = (page) => {
    const msg = "stepperTab2";
    props.confirm(msg, page, data);
  };

  const formIsValidTabs = () => {
    let isGood = true;
    if (data.thermometer.value === "") {
      data.thermometer.isValid = false;
      isGood = false;
    }

    if (data.pulse.value === "") {
      data.pulse.isValid = false;
      isGood = false;
    }
    if (data.respire.value === "") {
      data.respire.isValid = false;
      isGood = false;
    }
    if (data.blood.value === "") {
      data.blood.isValid = false;
      isGood = false;
    }
    if (data.weight.value === "") {
      data.weight.isValid = false;
      isGood = false;
    }
    if (data.height.value === "") {
      data.height.isValid = false;
      isGood = false;
    }
    if (data.waistline.value === "") {
      data.waistline.isValid = false;
      isGood = false;
    }

    if (data.illness.value === "มี") {
      if (data.illness_txt.value === "") {
        data.illness_txt.isValid = false;
        isGood = false;
      }
    }

    if (data.vivisection.value === "มี") {
      if (data.vivisection_txt.value === "") {
        data.vivisection_txt.isValid = false;
        isGood = false;
      }
    }

    if (data.drug.value === "มี") {
      if (data.drug_txt.value === "") {
        data.drug_txt.isValid = false;
        isGood = false;
      }
    }

    if (data.intolerance.value === "มี") {
      if (data.intolerance_txt.value === "") {
        data.intolerance_txt.isValid = false;
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

  const handleTabsSubmit = (e, page) => {
    e.preventDefault();
    if (formIsValidTabs()) {
      onConfirmClick(page);
    }
  };
  const { patients } = props;
  
  const markText = <b style={{ color: "red" }}>*</b>;
  // Lifecycle
  useEffect(() => {
    setData((data) => ({
      ...data,
      thermometer: {
        value: `${patients.patients[0].data[0].temperature}`,
      },
      pulse: { value: `${patients.patients[0].data[0].pulse}` },
      respire: { value: `${patients.patients[0].data[0].rr}` },
      blood: {
        value: `${patients.patients[0].data[0].respiratory}`,
      },
      weight: { value: `${patients.patients[0].data[0].bw}` },
      height: {
        value: `${patients.patients[0].data[0].height}`,
      },
      waistline: {
        value: `${patients.patients[0].data[0].waist}`,
      },
      illness: { value: "ไม่มี" },
      illness_txt: {
        value: "",
      },
      vivisection: { value: "ไม่มี" },
      vivisection_txt: {
        value: "",
      },
      drug: { value: "ไม่มี" },
      drug_txt: {
        value: "",
      },
      intolerance: { value: "ไม่มี" },
      intolerance_txt: {
        value: "",
      },
    }));
  }, [patients]);
  return (
    <div id="test-l-2" className="content">
      <div className="row">
        <div className="col-12">
          <div className="card card-primary" style={{ boxShadow: "none" }}>
            <div className="card-body">
              <div className="row" style={customStylesRow}>
                <div className="col-sm-3 col-6">
                  <div className="form-group">
                    <label>อุณหภูมิ {markText}</label>
                    <input
                      type="text"
                      className={classNames("form-control form-control-sm ", {
                        "form-control form-control-sm is-invalid":
                          data.thermometer.isValid === false,
                      })}
                      name="thermometer"
                      value={data.thermometer.value}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-sm-3 col-6">
                  <div className="form-group">
                    <label>ชีพจร {markText}</label>
                    <input
                      type="text"
                      className={classNames("form-control form-control-sm ", {
                        "form-control form-control-sm is-invalid":
                          data.pulse.isValid === false,
                      })}
                      name="pulse"
                      value={data.pulse.value}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-sm-3 col-6">
                  <div className="form-group">
                    <label>หายใจ {markText}</label>
                    <input
                      type="text"
                      className={classNames("form-control form-control-sm ", {
                        "form-control form-control-sm is-invalid":
                          data.respire.isValid === false,
                      })}
                      name="respire"
                      value={data.respire.value}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-sm-3 col-6">
                  <div className="form-group">
                    <label>ความดันโลหิต {markText}</label>
                    <input
                      type="text"
                      className={classNames("form-control form-control-sm ", {
                        "form-control form-control-sm is-invalid":
                          data.blood.isValid === false,
                      })}
                      name="blood"
                      value={data.blood.value}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row" style={customStylesRow}>
                <div className="col-sm-3 col-6">
                  <div className="form-group">
                    <label>น้ำหนัก {markText}</label>
                    <input
                      type="text"
                      className={classNames("form-control form-control-sm ", {
                        "form-control form-control-sm is-invalid":
                          data.weight.isValid === false,
                      })}
                      name="weight"
                      value={data.weight.value}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-sm-3 col-6">
                  <div className="form-group">
                    <label>ส่วนสูง {markText}</label>
                    <input
                      type="text"
                      className={classNames("form-control form-control-sm ", {
                        "form-control form-control-sm is-invalid":
                          data.height.isValid === false,
                      })}
                      name="height"
                      value={data.height.value}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-6">
                  <div className="form-group">
                    <label>รอบเอว {markText}</label>
                    <input
                      type="text"
                      className={classNames("form-control form-control-sm ", {
                        "form-control form-control-sm is-invalid":
                          data.waistline.isValid === false,
                      })}
                      name="waistline"
                      value={data.waistline.value}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row" style={customStylesRow}>
                <div className="col-12">
                  <div className="form-group">
                    <label>ประวัติการเจ็บป่วย {markText}</label>
                    <div className="form-group">
                      <div className="custom-control custom-radio">
                        <input
                          className="custom-control-input"
                          type="radio"
                          id="customRadio1illness"
                          name="illness"
                          value="ไม่มี"
                          checked={data.illness.value === "ไม่มี"}
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="customRadio1illness"
                          className="custom-control-label"
                        >
                          ไม่มี
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
                        id="customRadio2illness"
                        name="illness"
                        value="มี"
                        checked={data.illness.value === "มี"}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="customRadio2illness"
                        className="custom-control-label"
                      >
                        มี
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-10">
                  <div className="form-group">
                    <textarea
                      rows="1"
                      name="illness_txt"
                      className={classNames("form-control form-control-sm ", {
                        "form-control form-control-sm is-invalid":
                          data.illness_txt.isValid === false,
                      })}
                      value={data.illness_txt.value}
                      onChange={handleChange}
                      disabled={data.illness.value === "มี" ? false : true}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row" style={customStylesRow}>
                <div className="col-12">
                  <div className="form-group">
                    <label>ประวัติการผ่าตัด {markText}</label>

                    <div className="form-group">
                      <div className="custom-control custom-radio">
                        <input
                          className="custom-control-input"
                          type="radio"
                          id="customRadio1vivisection"
                          name="vivisection"
                          value="ไม่มี"
                          checked={data.vivisection.value === "ไม่มี"}
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="customRadio1vivisection"
                          className="custom-control-label"
                        >
                          ไม่มี
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
                        id="customRadio2vivisection"
                        name="vivisection"
                        value="มี"
                        checked={data.vivisection.value === "มี"}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="customRadio2vivisection"
                        className="custom-control-label"
                      >
                        มี
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-10">
                  <div className="form-group">
                    <textarea
                      rows="1"
                      name="vivisection_txt"
                      className={classNames("form-control form-control-sm ", {
                        "form-control form-control-sm is-invalid":
                          data.vivisection_txt.isValid === false,
                      })}
                      value={data.vivisection_txt.value}
                      onChange={handleChange}
                      disabled={data.vivisection.value === "มี" ? false : true}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row" style={customStylesRow}>
                <div className="col-12">
                  <div className="form-group">
                    <label>ประวัติการใช้ยา {markText}</label>
                    <div className="form-group">
                      <div className="custom-control custom-radio">
                        <input
                          className="custom-control-input"
                          type="radio"
                          id="customRadioDrug1"
                          name="drug"
                          value="ไม่มี"
                          checked={data.drug.value === "ไม่มี"}
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="customRadioDrug1"
                          className="custom-control-label"
                        >
                          ไม่มี
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
                        id="customRadioDrug2"
                        name="drug"
                        value="มี"
                        checked={data.drug.value === "มี"}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="customRadioDrug2"
                        className="custom-control-label"
                      >
                        มี
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-10">
                  <div className="form-group">
                    <textarea
                      rows="1"
                      name="drug_txt"
                      className={classNames("form-control form-control-sm ", {
                        "form-control form-control-sm is-invalid":
                          data.drug_txt.isValid === false,
                      })}
                      value={data.drug_txt.value}
                      onChange={handleChange}
                      disabled={data.drug.value === "มี" ? false : true}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row" style={customStylesRow}>
                <div className="col-12">
                  <div className="form-group">
                    <label>การแพ้ (ยา,สารเคมี,อาหาร) {markText}</label>
                    <div className="form-group">
                      <div className="custom-control custom-radio">
                        <input
                          className="custom-control-input"
                          type="radio"
                          id="customRadio1"
                          name="intolerance"
                          value="ไม่มี"
                          checked={data.intolerance.value === "ไม่มี"}
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="customRadio1"
                          className="custom-control-label"
                        >
                          ไม่มี
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
                        id="customRadio2"
                        name="intolerance"
                        value="มี"
                        checked={data.intolerance.value === "มี"}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="customRadio2"
                        className="custom-control-label"
                      >
                        มี
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-10">
                  <div className="form-group">
                    <textarea
                      rows="1"
                      name="intolerance_txt"
                      className={classNames("form-control form-control-sm ", {
                        "form-control form-control-sm is-invalid":
                          data.intolerance_txt.isValid === false,
                      })}
                      value={data.intolerance_txt.value}
                      onChange={handleChange}
                      disabled={data.intolerance.value === "มี" ? false : true}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={(e) => handleTabsSubmit(e, "previous")}
                  >
                    <i className="fas fa-angle-left" /> ย้อนกลับ
                  </button>{" "}
                  <button
                    className="btn btn-primary btn-sm float-right"
                    onClick={(e) => handleTabsSubmit(e, "next")}
                  >
                    ถัดไป <i className="fas fa-angle-right" />
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
