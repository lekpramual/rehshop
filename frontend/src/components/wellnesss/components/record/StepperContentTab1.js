import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import moment from "moment";
import classNames from "classnames";
import { registerLocale } from "react-datepicker";
/**
 * Style
 */
import "react-datepicker/dist/react-datepicker.css";
//import moment from "moment";
import th from "date-fns/locale/th";
registerLocale("th", th);

/**
 * Calculate Age For birthday
 */
function calculate_age(date) {
  const today = new Date().getTime();
  const birthday = new Date(date).getTime();
  const age_mili = Math.abs(today - birthday);
  let days = Math.floor(age_mili / (1000 * 3600 * 24));
  let years = Math.floor(days / 365);
  days -= years * 365;
  let months = Math.floor(days / 31);
  days -= months * 31;
  return `${years} ปี ${months} เดือน ${days} วัน`;
}

function StepperContentTab1(props) {
  const initialState = {
    next_btn: false,
    vstdate: { value: "", isValid: true },
    hn: { value: "", isValid: true },
    sex: { value: "", isValid: true },
    pname: {
      value: "",
      isValid: true,
    },
    firstname: {
      value: "",
      isValid: true,
    },
    lastname: {
      value: "",
      isValid: true,
    },
    age: {
      value: "",
      isValid: true,
    },
    birthdate: {
      value: "",
    },
    tel: { value: "", isValid: true },
    department: {
      value: "",
      label: "",
    },
    right: { value: "", label: "" },
    service: {
      value: "",
      label: "",
    },
    address: {
      value: "",
      isValid: true,
    },
  };
  // set state with formdefaults
  const [data, setData] = useState(initialState);
  /*********************
   * Handle even
   ********************/
  const handleChange = (e) => {
    console.log(`name : ${e.target.name} value : ${e.target.value}`);
    setData({
      ...data,
      [e.target.name]: {
        value: e.target.value,
        isValid: true,
      },
    });
  };
  const handleChangeSelect = (selectName, selectedOption) => {
    console.log(
      `name : ${selectName} value : ${selectedOption.value} label : ${selectedOption.label}`
    );
    setData({
      ...data,
      [selectName]: {
        value: selectedOption.value,
        label: selectedOption.label,
      },
    });
  };
  const handleChangeDateSend = (e) => {
    //const vstdate_format = moment(e).format("YYYY-MM-DD");
    //console.log(vstdate_format);
    setData({
      ...data,
      vstdate: {
        value: e,
        isValid: true,
      },
    });
  };
  const formIsValidTabs1 = () => {
    let isGood = true;
    if (data.sex.value === "") {
      data.sex.isValid = false;
      isGood = false;
    }

    if (data.pname.value === "") {
      data.pname.isValid = false;
      isGood = false;
    }

    if (data.firstname.value === "") {
      data.firstname.isValid = false;
      isGood = false;
    }

    if (data.lastname.value === "") {
      data.lastname.isValid = false;
      isGood = false;
    }

    if (data.age.value === "") {
      data.age.isValid = false;
      isGood = false;
    }

    if (data.address.value === "") {
      data.address.isValid = false;
      isGood = false;
    }

    if (!isGood) {
      setData({
        ...data,
      });
    }
    return isGood;
  };
  // handle confirm on props with record component
  const onConfirmClick = (page) => {
    if (props.confirm) {
      const msg = "stepperTab1";
      console.log(data);
      props.confirm(msg, page, data);
    }
  };
  // handle next submit
  const handleTabs1Submit = (e, page) => {
    e.preventDefault();
    if (formIsValidTabs1()) {
      console.log(data);
      onConfirmClick(page);
    }
  };

  const markText = <b style={{ color: "red" }}>*</b>;
  // custom styles select
  const customStylesRow = {
    marginTop: "-20px",
  };
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      //background: "#fff",
      borderColor: "#ced4da",
      minHeight: "31px",
      height: "31px",
      fontSize: "14px",
      boxShadow: state.isFocused ? null : null,
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      height: "31px",
      padding: "0 6px",
      fontSize: "14px",
    }),

    input: (provided, state) => ({
      ...provided,
      margin: "0px",
      fontSize: "14px",
    }),
    indicatorSeparator: (state) => ({
      display: "none",
      fontSize: "14px",
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: "31px",
      fontSize: "14px",
    }),
  };

  // Seleled not api
  const options = [
    { value: "1", label: "มารับการตรวจเอง" },
    { value: "2", label: "ให้บริการออกตรวจ" },
  ];

  const { departs, pttypes, patients } = props;
  // seleted point
  var optionsright = [];
  pttypes.pttypes.map((res) => {
    return (optionsright = res.data.map((res, index) => {
      return { value: res.pttype, label: res.name };
    }));
  });

  var optionsdepartment = [];
  departs.departs.map((res) => {
    return (optionsdepartment = res.data.map((res, index) => {
      return { value: res.dep_id, label: res.dep_name };
    }));
  });
  useEffect(() => {
    setData((data) => ({
      ...data,
      sex: { value: `${patients.patients[0].data[0].sex}` },
      vstdate: { value: moment(patients.patients[0].data[0].vstdate).toDate() },
      pname: { value: patients.patients[0].data[0].pname },
      firstname: { value: patients.patients[0].data[0].fname },
      lastname: { value: patients.patients[0].data[0].lname },
      age: {
        value: calculate_age(
          moment(patients.patients[0].data[0].birthday).format("YYYY-MM-DD")
        ),
      },
      tel: { value: `${patients.patients[0].data[0].hometel}` },
      birthdate: {
        value: moment(patients.patients[0].data[0].birthday).format(
          "YYYY-MM-DD"
        ),
      },
      address: { value: patients.patients[0].data[0].full_addr },
      hn: { value: patients.patients[0].data[0].hn },
      service: { value: "1", label: "มารับการตรวจเอง" },
      right: {
        value: `${patients.patients[0].data[0].pttype}`,
        label: `${patients.patients[0].data[0].name}`,
      },
      department: { value: 1, label: "-------------------------" },
    }));
  }, [patients]);

  return (
    <div id="test-l-1" className="content">
      <div className="row">
        <div className="col-12">
          <div className="card card-primary" style={{ boxShadow: "none" }}>
            {/* /.card-header */}
            <div className="card-body">
              {/* ROW 1 */}
              <div className="row" style={customStylesRow}>
                <div className="col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="InputSex" className="col-form-label">
                      {" "}
                      เพศ {markText}
                    </label>
                    <div className="form-group clearfix">
                      <div className="custom-control custom-radio d-inline">
                        <input
                          className="custom-control-input"
                          type="radio"
                          id="customRadio1sex"
                          name="sex"
                          value="1"
                          checked={data.sex.value === "1"}
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="customRadio1sex"
                          className="custom-control-label"
                        >
                          ชาย
                        </label>
                      </div>

                      <div
                        className="custom-control custom-radio d-inline"
                        style={{ marginLeft: 10 }}
                      >
                        <input
                          className="custom-control-input"
                          type="radio"
                          id="customRadio2sex"
                          name="sex"
                          value="2"
                          checked={data.sex.value === "2"}
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="customRadio2sex"
                          className="custom-control-label"
                        >
                          หญิง
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="InputTitle" className="col-form-label">
                      วันที่ตรวจ {markText}{" "}
                    </label>
                    <DatePicker
                      locale="th"
                      className="form-control form-control-sm"
                      selected={data.vstdate.value}
                      onChange={(date) => handleChangeDateSend(date)}
                      dateFormat="dd LLLL yyyy"
                    />
                  </div>
                </div>
              </div>

              {/* ROW 2 */}
              <div className="row" style={customStylesRow}>
                <div className="col-sm-2 col-12">
                  <div className="form-group">
                    <label htmlFor="InputTitle" className="col-form-label">
                      คำนำหน้า {markText}
                    </label>
                    <input
                      type="type"
                      className={classNames("form-control form-control-sm", {
                        "form-control form-control-sm is-invalid":
                          data.pname.isValid === false,
                      })}
                      id="InputTitle"
                      name="pname"
                      value={data.pname.value}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-sm-5 col-12">
                  <div className="form-group">
                    <label
                      htmlFor="exampleInputName"
                      className="col-form-label"
                    >
                      ชื่อ - นามสกุล {markText}
                    </label>
                    <input
                      type="type"
                      name="firstname"
                      id="exampleInputName"
                      value={data.firstname.value}
                      className={classNames("form-control form-control-sm", {
                        "form-control form-control-sm is-invalid":
                          data.firstname.isValid === false,
                      })}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-sm-5 col-12">
                  <div className="form-group">
                    <label
                      htmlFor="exampleInputName"
                      className="col-form-label"
                    >
                      &nbsp;
                    </label>
                    <input
                      type="type"
                      name="lastname"
                      value={data.lastname.value}
                      className={classNames("form-control form-control-sm", {
                        "form-control form-control-sm is-invalid":
                          data.lastname.isValid === false,
                      })}
                      id="exampleInputLname"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* ROW 3 */}
              <div className="row" style={customStylesRow}>
                <div className="col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="exampleInputAge" className="col-form-label">
                      อายุ {markText}
                    </label>
                    <input
                      type="type"
                      name="age"
                      value={data.age.value}
                      className={classNames("form-control form-control-sm", {
                        "form-control form-control-sm is-invalid":
                          data.age.isValid === false,
                      })}
                      id="exampleInputAge"
                      onChange={handleChange}
                    />
                    <input
                      type="hidden"
                      name="birthdate"
                      value={data.birthdate.value}
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="exampleInputTel" className="col-form-label">
                      เบอร์โทร
                    </label>
                    <input
                      type="type"
                      name="tel"
                      value={data.tel.value}
                      className="form-control form-control-sm"
                      id="exampleInputTel"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* ROW 4 */}
              <div className="row" style={customStylesRow}>
                <div className="col-sm-12 col-12">
                  <div className="form-group">
                    <label
                      htmlFor="exampleInputAddr"
                      className="col-form-label"
                    >
                      ที่อยู่ {markText}{" "}
                    </label>
                    <textarea
                      className={classNames("form-control form-control-sm", {
                        "form-control form-control-sm is-invalid":
                          data.address.isValid === false,
                      })}
                      rows="2"
                      name="address"
                      value={data.address.value}
                      id="exampleInputAddr"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* ROW 5 */}
              <div className="row" style={customStylesRow}>
                <div className="col-sm-12 col-12">
                  <div className="form-group">
                    <label
                      htmlFor="exampleInputService"
                      className="col-form-label"
                    >
                      ประเภทการให้บริการ
                    </label>
                    <Select
                      styles={customStyles}
                      value={data.service}
                      onChange={(val) => handleChangeSelect("service", val)}
                      options={options}
                      placeholder="เลือก หน่วยงาน..."
                    />
                  </div>
                </div>
              </div>

              {/* ROW 6 */}
              <div className="row" style={customStylesRow}>
                <div className="col-sm-12 col-12">
                  <div className="form-group">
                    <label
                      htmlFor="exampleInputType"
                      className="col-form-label"
                    >
                      สิทธิ์การตรวจ
                    </label>
                    <Select
                      styles={customStyles}
                      value={data.right}
                      options={optionsright}
                      onChange={(val) => handleChangeSelect("right", val)}
                    />
                  </div>
                </div>
              </div>

              {/* ROW 7 */}
              <div className="row" style={customStylesRow}>
                <div className="col-sm-12 col-12">
                  <div className="form-group">
                    <label
                      htmlFor="exampleInputDepart"
                      className="col-form-label"
                    >
                      หน่วยงาน
                    </label>
                    <Select
                      styles={customStyles}
                      value={data.department}
                      options={optionsdepartment}
                      autosize={true}
                      onChange={(val) => handleChangeSelect("department", val)}
                      isSearchable
                    />
                  </div>
                </div>
              </div>

              {/* FOOTER */}
              <div className="row">
                <div className="col-12">
                  <button
                    className="btn btn-primary btn-sm float-right"
                    onClick={(e) => handleTabs1Submit(e, "next")}
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

export default StepperContentTab1;
