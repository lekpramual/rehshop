import React, { useState } from "react";
import classNames from "classnames";

function StepperContentTab3(props) {
  const initialState = {
    heart: { value: "ไม่มี", isValid: true },
    heart_cb: { value: "", isValid: true },
    heart_txt: { value: "", isValid: true },
    // โรคความดันโลหิดสุง
    hyper: { value: "ไม่มี", isValid: true },
    hyper_cb: { value: "", isValid: true },
    hyper_txt: { value: "", isValid: true },
    // เบาหวาน
    diabetes: { value: "ไม่มี", isValid: true },
    diabetes_cb: { value: "", isValid: true },
    diabetes_txt: { value: "", isValid: true },
    //มะเร็ง
    cancer: { value: "ไม่มี", isValid: true },
    cancer_cb: { value: "", isValid: true },
    cancer_txt: { value: "", isValid: true },
    // อื่น Other
    other: { value: "ไม่มี", isValid: true },
    other_cb: { value: "", isValid: true },
    other_txt: { value: "", isValid: true },
  };
  const [data, setData] = useState(initialState);

  /**
   * Custom Style
   */
  const customStylesRow = {
    marginTop: "-10px",
  };

  /**
   * Handel From Varilid
   */
  const handleChange = (even) => {
    if (even.target.name === "heart") {
      if (even.target.value === "ไม่มี") {
        setData({
          ...data,
          heart: {
            value: even.target.value,
            isValid: true,
          },
          heart_cb: {
            value: "",
            isValid: true,
          },
          heart_txt: {
            value: "",
            isValid: true,
          },
        });
      } else if (even.target.value === "มี") {
        setData({
          ...data,
          heart: {
            value: even.target.value,
            isValid: true,
          },
          heart_cb: {
            value: "",
            isValid: true,
          },
          heart_txt: {
            value: "",
            isValid: true,
          },
        });
      } else {
        setData({
          ...data,
          heart: {
            value: even.target.value,
            isValid: true,
          },
          heart_cb: {
            value: "",
            isValid: true,
          },
        });
      }
    } else if (even.target.name === "hyper") {
      if (even.target.value === "ไม่มี") {
        setData({
          ...data,
          hyper: {
            value: even.target.value,
            isValid: true,
          },
          hyper_cb: {
            value: "",
            isValid: true,
          },
          hyper_txt: {
            value: "",
            isValid: true,
          },
        });
      } else if (even.target.value === "มี") {
        setData({
          ...data,
          hyper: {
            value: even.target.value,
            isValid: true,
          },
          hyper_cb: {
            value: "",
            isValid: true,
          },
          hyper_txt: {
            value: "",
            isValid: true,
          },
        });
      } else {
        setData({
          ...data,
          hyper: {
            value: even.target.value,
            isValid: true,
          },
          hyper_cb: {
            value: "",
            isValid: true,
          },
        });
      }
    } else if (even.target.name === "diabetes") {
      if (even.target.value === "ไม่มี") {
        setData({
          ...data,
          diabetes: {
            value: even.target.value,
            isValid: true,
          },
          diabetes_cb: {
            value: "",
            isValid: true,
          },
          diabetes_txt: {
            value: "",
            isValid: true,
          },
        });
      } else if (even.target.value === "มี") {
        setData({
          ...data,
          diabetes: {
            value: even.target.value,
            isValid: true,
          },
          diabetes_cb: {
            value: "",
            isValid: true,
          },
          diabetes_txt: {
            value: "",
            isValid: true,
          },
        });
      } else {
        setData({
          ...data,
          diabetes: {
            value: even.target.value,
            isValid: true,
          },
          diabetes_cb: {
            value: "",
            isValid: true,
          },
        });
      }
    } else if (even.target.name === "cancer") {
      if (even.target.value === "ไม่มี") {
        setData({
          ...data,
          cancer: {
            value: even.target.value,
            isValid: true,
          },
          cancer_cb: {
            value: "",
            isValid: true,
          },
          cancer_txt: {
            value: "",
            isValid: true,
          },
        });
      } else if (even.target.value === "มี") {
        setData({
          ...data,
          cancer: {
            value: even.target.value,
            isValid: true,
          },
          cancer_cb: {
            value: "",
            isValid: true,
          },
          cancer_txt: {
            value: "",
            isValid: true,
          },
        });
      } else {
        setData({
          ...data,
          cancer: {
            value: even.target.value,
            isValid: true,
          },
          cancer_cb: {
            value: "",
            isValid: true,
          },
        });
      }
    } else if (even.target.name === "other") {
      if (even.target.value === "ไม่มี") {
        setData({
          ...data,
          other: {
            value: even.target.value,
            isValid: true,
          },
          other_cb: {
            value: "",
            isValid: true,
          },
          other_txt: {
            value: "",
            isValid: true,
          },
        });
      } else if (even.target.value === "มี") {
        setData({
          ...data,
          other: {
            value: even.target.value,
            isValid: true,
          },
          other_cb: {
            value: "",
            isValid: true,
          },
          other_txt: {
            value: "",
            isValid: true,
          },
        });
      } else {
        setData({
          ...data,
          other: {
            value: even.target.value,
            isValid: true,
          },
          other_cb: {
            value: "",
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
    const msg = "stepperTab3";
    props.confirm(msg, page, data);
  };

  const formIsValidTabs = () => {
    let isGood = true;

    if (data.heart.value === "อื่นๆ") {
      if (data.heart_txt.value === "") {
        data.heart_txt.isValid = false;
        isGood = false;
      }
    }

    if (data.heart.value === "มี") {
      console.log("hearn : มี");
      console.log(data.heart_cb.value);
      if (data.heart_cb.value === "") {
        console.log("hearn cb : ว่าง");
        data.heart_cb.isValid = false;
        isGood = false;
      }
    }

    if (data.hyper.value === "อื่นๆ") {
      if (data.hyper_txt.value === "") {
        data.hyper_txt.isValid = false;
        isGood = false;
      }
    }

    if (data.hyper.value === "มี") {
      if (data.hyper_cb.value === "") {
        data.hyper_cb.isValid = false;
        isGood = false;
      }
    }

    if (data.diabetes.value === "อื่นๆ") {
      if (data.diabetes_txt.value === "") {
        data.diabetes_txt.isValid = false;
        isGood = false;
      }
    }

    if (data.diabetes.value === "มี") {
      if (data.diabetes_cb.value === "") {
        data.diabetes_cb.isValid = false;
        isGood = false;
      }
    }

    if (data.cancer.value === "อื่นๆ") {
      if (data.cancer_txt.value === "") {
        data.cancer_txt.isValid = false;
        isGood = false;
      }
    }

    if (data.cancer.value === "มี") {
      if (data.cancer_cb.value === "") {
        data.cancer_cb.isValid = false;
        isGood = false;
      }
    }
    if (data.other.value === "อื่นๆ") {
      if (data.other_txt.value === "") {
        data.other_txt.isValid = false;
        isGood = false;
      }
    }

    if (data.other.value === "มี") {
      if (data.other_cb.value === "") {
        data.other_cb.isValid = false;
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

  const markText = <b style={{ color: "red" }}>*</b>;
  return (
    <div id="test-l-3" className="content">
      <div className="row">
        <div className="col-12">
          <div className="card card-primary" style={{ boxShadow: "none" }}>
            <div className="card-body">
              {/* Group 1 @TODO Form valid */}
              <div className="row" style={customStylesRow}>
                <div className="col-12">
                  <div className="form-group">
                    <label>โรคหัวใจ {markText}</label>
                    <div className="form-group">
                      <div className="custom-control custom-radio">
                        <input
                          className="custom-control-input"
                          type="radio"
                          id="customRadioheart1"
                          name="heart"
                          value="ไม่มี"
                          checked={data.heart.value === "ไม่มี"}
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="customRadioheart1"
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
                        id="customRadioheart2"
                        name="heart"
                        value="มี"
                        checked={data.heart.value === "มี"}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="customRadioheart2"
                        className="custom-control-label"
                      >
                        มี
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-10">
                  <div className="form-group clearfix">
                    <div className="custom-control custom-checkbox d-inline">
                      <input
                        className={classNames("custom-control-input ", {
                          "custom-control-input is-invalid":
                            data.heart_cb.isValid === false,
                        })}
                        type="checkbox"
                        id="customCheckboxheart_cb1"
                        name="heart_cb"
                        value="บิดา"
                        checked={data.heart_cb.value === "บิดา"}
                        onChange={handleChange}
                        disabled={data.heart.value !== "มี" ? true : false}
                      />
                      <label
                        htmlFor="customCheckboxheart_cb1"
                        className="custom-control-label"
                      >
                        บิดา
                      </label>
                    </div>
                    <div
                      className="custom-control custom-checkbox d-inline"
                      style={{ marginLeft: 10 }}
                    >
                      <input
                        className={classNames("custom-control-input ", {
                          "custom-control-input is-invalid":
                            data.heart_cb.isValid === false,
                        })}
                        type="checkbox"
                        id="customCheckboxheart_cb2"
                        name="heart_cb"
                        value="มารดา"
                        checked={data.heart_cb.value === "มารดา"}
                        onChange={handleChange}
                        disabled={data.heart.value !== "มี" ? true : false}
                      />
                      <label
                        htmlFor="customCheckboxheart_cb2"
                        className={classNames("custom-control-label", {
                          "custom-control-label is-invalid":
                            data.heart_cb.isValid === false,
                        })}
                      >
                        มารดา
                      </label>
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
                        id="customRadioheart3"
                        name="heart"
                        value="อื่นๆ"
                        checked={data.heart.value === "อื่นๆ"}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="customRadioheart3"
                        className="custom-control-label"
                      >
                        อื่นๆ
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-10">
                  <div className="form-group">
                    <textarea
                      className={classNames("form-control form-control-sm ", {
                        "form-control form-control-sm is-invalid":
                          data.heart_txt.isValid === false,
                      })}
                      rows="1"
                      name="heart_txt"
                      value={data.heart_txt.value}
                      onChange={handleChange}
                      disabled={data.heart.value !== "อื่นๆ" ? true : false}
                    ></textarea>
                  </div>
                </div>
              </div>
              {/* Group 2 */}
              <div className="row" style={customStylesRow}>
                <div className="col-12">
                  <div className="form-group">
                    <label>โรคความดันโลหิตสูง {markText}</label>

                    <div className="form-group">
                      <div className="custom-control custom-radio">
                        <input
                          className="custom-control-input"
                          type="radio"
                          id="customRadiohyper1"
                          name="hyper"
                          value="ไม่มี"
                          checked={data.hyper.value === "ไม่มี"}
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="customRadiohyper1"
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
                        id="customRadiohyper2"
                        name="hyper"
                        value="มี"
                        checked={data.hyper.value === "มี"}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="customRadiohyper2"
                        className="custom-control-label"
                      >
                        มี
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-10">
                  <div className="form-group clearfix">
                    <div className="custom-control custom-checkbox d-inline">
                      <input
                        className={classNames("custom-control-input ", {
                          "custom-control-input is-invalid":
                            data.hyper_cb.isValid === false,
                        })}
                        type="checkbox"
                        id="customCheckboxhyper_cb1"
                        name="hyper_cb"
                        value="บิดา"
                        checked={data.hyper_cb.value === "บิดา"}
                        onChange={handleChange}
                        disabled={data.hyper.value !== "มี" ? true : false}
                      />
                      <label
                        htmlFor="customCheckboxhyper_cb1"
                        className="custom-control-label"
                      >
                        บิดา
                      </label>
                    </div>
                    <div
                      className="custom-control custom-checkbox d-inline"
                      style={{ marginLeft: 10 }}
                    >
                      <input
                        className={classNames("custom-control-input ", {
                          "custom-control-input is-invalid":
                            data.hyper_cb.isValid === false,
                        })}
                        type="checkbox"
                        id="customCheckboxhyper_cb2"
                        name="hyper_cb"
                        value="มารดา"
                        checked={data.hyper_cb.value === "มารดา"}
                        onChange={handleChange}
                        disabled={data.hyper.value !== "มี" ? true : false}
                      />
                      <label
                        htmlFor="customCheckboxhyper_cb2"
                        className="custom-control-label"
                      >
                        มารดา
                      </label>
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
                        id="customRadiohyper3"
                        name="hyper"
                        value="อื่นๆ"
                        onChange={handleChange}
                        checked={data.hyper.value === "อื่นๆ"}
                      />
                      <label
                        htmlFor="customRadiohyper3"
                        className="custom-control-label"
                      >
                        อื่นๆ
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-10">
                  <div className="form-group">
                    <textarea
                      className={classNames("form-control form-control-sm", {
                        "form-control form-control-sm is-invalid":
                          data.hyper_txt.isValid === false,
                      })}
                      rows="1"
                      name="hyper_txt"
                      value={data.hyper_txt.value}
                      onChange={handleChange}
                      disabled={data.hyper.value !== "อื่นๆ" ? true : false}
                    ></textarea>
                  </div>
                </div>
              </div>
              {/* Group 3 */}
              <div className="row" style={customStylesRow}>
                <div className="col-12">
                  <div className="form-group">
                    <label>เบาหวาน {markText}</label>

                    <div className="form-group">
                      <div className="custom-control custom-radio">
                        <input
                          className="custom-control-input"
                          type="radio"
                          id="customRadiodiabetes1"
                          name="diabetes"
                          value="ไม่มี"
                          checked={data.diabetes.value === "ไม่มี"}
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="customRadiodiabetes1"
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
                        id="customRadiodiabetes2"
                        name="diabetes"
                        value="มี"
                        checked={data.diabetes.value === "มี"}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="customRadiodiabetes2"
                        className="custom-control-label"
                      >
                        มี
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-10">
                  <div className="form-group clearfix">
                    <div className="custom-control custom-checkbox d-inline">
                      <input
                        className={classNames("custom-control-input ", {
                          "custom-control-input is-invalid":
                            data.diabetes_cb.isValid === false,
                        })}
                        type="checkbox"
                        id="customCheckboxdiabetes_cb1"
                        name="diabetes_cb"
                        value="บิดา"
                        checked={data.diabetes_cb.value === "บิดา"}
                        onChange={handleChange}
                        disabled={data.diabetes.value !== "มี" ? true : false}
                      />
                      <label
                        htmlFor="customCheckboxdiabetes_cb1"
                        className="custom-control-label"
                      >
                        บิดา
                      </label>
                    </div>
                    <div
                      className="custom-control custom-checkbox d-inline"
                      style={{ marginLeft: 10 }}
                    >
                      <input
                        className={classNames("custom-control-input ", {
                          "custom-control-input is-invalid":
                            data.diabetes_cb.isValid === false,
                        })}
                        type="checkbox"
                        id="customCheckboxdiabetes_cb2"
                        name="diabetes_cb"
                        value="มารดา"
                        checked={data.diabetes_cb.value === "มารดา"}
                        onChange={handleChange}
                        disabled={data.diabetes.value !== "มี" ? true : false}
                      />
                      <label
                        htmlFor="customCheckboxdiabetes_cb2"
                        className="custom-control-label"
                      >
                        มารดา
                      </label>
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
                        id="customRadiodiabetes3"
                        name="diabetes"
                        value="อื่นๆ"
                        onChange={handleChange}
                        checked={data.diabetes.value === "อื่นๆ"}
                      />
                      <label
                        htmlFor="customRadiodiabetes3"
                        className="custom-control-label"
                      >
                        อื่นๆ
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-10">
                  <div className="form-group">
                    <textarea
                      className={classNames("form-control form-control-sm", {
                        "form-control form-control-sm is-invalid":
                          data.diabetes_txt.isValid === false,
                      })}
                      rows="1"
                      name="diabetes_txt"
                      value={data.diabetes_txt.value}
                      onChange={handleChange}
                      disabled={data.diabetes.value !== "อื่นๆ" ? true : false}
                    ></textarea>
                  </div>
                </div>
              </div>
              {/* Group 4 */}
              <div className="row" style={customStylesRow}>
                <div className="col-12">
                  <div className="form-group">
                    <label>มะเร็ง {markText}</label>

                    <div className="form-group">
                      <div className="custom-control custom-radio">
                        <input
                          className="custom-control-input"
                          type="radio"
                          id="customRadiocancer1"
                          name="cancer"
                          value="ไม่มี"
                          checked={data.cancer.value === "ไม่มี"}
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="customRadiocancer1"
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
                        id="customRadiocancer2"
                        name="cancer"
                        value="มี"
                        checked={data.cancer.value === "มี"}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="customRadiocancer2"
                        className="custom-control-label"
                      >
                        มี
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-10">
                  <div className="form-group clearfix">
                    <div className="custom-control custom-checkbox d-inline">
                      <input
                        className={classNames("custom-control-input ", {
                          "custom-control-input is-invalid":
                            data.cancer_cb.isValid === false,
                        })}
                        type="checkbox"
                        id="customCheckboxcancer_cb1"
                        checked={data.cancer_cb.value === "บิดา"}
                        name="cancer_cb"
                        value="บิดา"
                        onChange={handleChange}
                        disabled={data.cancer.value !== "มี" ? true : false}
                      />
                      <label
                        htmlFor="customCheckboxcancer_cb1"
                        className="custom-control-label"
                      >
                        บิดา
                      </label>
                    </div>
                    <div
                      className="custom-control custom-checkbox d-inline"
                      style={{ marginLeft: 10 }}
                    >
                      <input
                        className={classNames("custom-control-input ", {
                          "custom-control-input is-invalid":
                            data.cancer_cb.isValid === false,
                        })}
                        type="checkbox"
                        id="customCheckboxcancer_cb2"
                        checked={data.cancer_cb.value === "มารดา"}
                        name="cancer_cb"
                        value="มารดา"
                        onChange={handleChange}
                        disabled={data.cancer.value !== "มี" ? true : false}
                      />
                      <label
                        htmlFor="customCheckboxcancer_cb2"
                        className="custom-control-label"
                      >
                        มารดา
                      </label>
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
                        id="customRadiocancer3"
                        name="cancer"
                        value="อื่นๆ"
                        checked={data.cancer.value === "อื่นๆ"}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="customRadiocancer3"
                        className="custom-control-label"
                      >
                        อื่นๆ
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-10">
                  <div className="form-group">
                    <textarea
                      className={classNames("form-control form-control-sm", {
                        "form-control form-control-sm is-invalid":
                          data.cancer_txt.isValid === false,
                      })}
                      rows="1"
                      name="cancer_txt"
                      value={data.cancer_txt.value}
                      onChange={handleChange}
                      disabled={data.cancer.value !== "อื่นๆ" ? true : false}
                    ></textarea>
                  </div>
                </div>
              </div>
              {/* Group 5 */}
              <div className="row" style={customStylesRow}>
                <div className="col-12">
                  <div className="form-group">
                    <label>อื่นๆ {markText}</label>

                    <div className="form-group">
                      <div className="custom-control custom-radio">
                        <input
                          className="custom-control-input"
                          type="radio"
                          id="customRadioother1"
                          name="other"
                          value="ไม่มี"
                          checked={data.other.value === "ไม่มี"}
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="customRadioother1"
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
                        id="customRadioother2"
                        name="other"
                        value="มี"
                        checked={data.other.value === "มี"}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="customRadioother2"
                        className="custom-control-label"
                      >
                        มี
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-10">
                  <div className="form-group clearfix">
                    <div className="custom-control custom-checkbox d-inline">
                      <input
                        className={classNames("custom-control-input ", {
                          "custom-control-input is-invalid":
                            data.other_cb.isValid === false,
                        })}
                        type="checkbox"
                        id="customCheckboxother_cb1"
                        name="other_cb"
                        value="บิดา"
                        checked={data.other_cb.value === "บิดา"}
                        onChange={handleChange}
                        disabled={data.other.value !== "มี" ? true : false}
                      />
                      <label
                        htmlFor="customCheckboxother_cb1"
                        className="custom-control-label"
                      >
                        บิดา
                      </label>
                    </div>
                    <div
                      className="custom-control custom-checkbox d-inline"
                      style={{ marginLeft: 10 }}
                    >
                      <input
                        className={classNames("custom-control-input ", {
                          "custom-control-input is-invalid":
                            data.other_cb.isValid === false,
                        })}
                        type="checkbox"
                        id="customCheckboxother_cb2"
                        name="other_cb"
                        value="มารดา"
                        checked={data.other_cb.value === "มารดา"}
                        onChange={handleChange}
                        disabled={data.other.value !== "มี" ? true : false}
                      />
                      <label
                        htmlFor="customCheckboxother_cb2"
                        className="custom-control-label"
                      >
                        มารดา
                      </label>
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
                        id="customRadioother3"
                        name="other"
                        value="อื่นๆ"
                        checked={data.other.value === "อื่นๆ"}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="customRadioother3"
                        className="custom-control-label"
                      >
                        อื่นๆ
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-10">
                  <div className="form-group">
                    <textarea
                      className={classNames("form-control form-control-sm", {
                        "form-control form-control-sm is-invalid":
                          data.other_txt.isValid === false,
                      })}
                      rows="1"
                      name="other_txt"
                      value={data.other_txt.value}
                      onChange={handleChange}
                      disabled={data.other.value !== "อื่นๆ" ? true : false}
                    ></textarea>
                  </div>
                </div>
              </div>
              {/*** Footer tabs 3  */}
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

export default StepperContentTab3;
