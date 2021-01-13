import React, { useEffect, useState } from "react";
import moment from "moment";
import Stepper from "bs-stepper";
import { toast } from "react-toastify";
/**
 * Lib Style
 */
import "bs-stepper/dist/css/bs-stepper.min.css";
import "react-toastify/dist/ReactToastify.css";

/**
 * Components
 */
import StepperContentTab1 from "./StepperContentTab1";
import StepperContentTab2 from "./StepperContentTab2";
import StepperContentTab3 from "./StepperContentTab3";
import StepperContentTab4 from "./StepperContentTab4";

function StepperContentTab(props) {
  /**
   * State
   */
  const initialState = {
    // reload data
    reload: false,
    // tab 1
    vstdate: { value: new Date(), isValid: true },
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
    // tab 2
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
    // Tab 3
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
    // tabs 4
    xray: { value: "ปกติ", isValid: true },
    xray_txt: { value: "", isValid: true },
    pepsmear: { value: "ตรวจ", isValid: true },
    pepsmear_txt: { value: "", isValid: true },
  };
  const [data, setData] = useState(initialState);

  const onConfirm = (msg, page, data_request) => {
    var stepper = new Stepper(document.querySelector(".bs-stepper"));

    if (msg === "stepperTab1") {
      console.log(msg, page, data_request);
      setData({
        ...data,
        ...data_request,
      });
      stepper.next();
    } else if (msg === "stepperTab2") {
      setData({
        ...data,
        ...data_request,
      });
      if (page === "next") {
        stepper.to(3);
      } else {
        stepper.to(1);
      }
    } else if (msg === "stepperTab3") {
      setData({
        ...data,
        ...data_request,
      });
      if (page === "next") {
        stepper.to(4);
      } else {
        stepper.to(2);
      }
    } else if (msg === "stepperTab4") {
      setData({
        ...data,
        ...data_request,
      });

      console.log(data);
      if (page === "save") {
        // promise message
        var promiseSave = new Promise(function (resolve, reject) {
          // call resolve if the method succeeds

          stepper.to(4);
          toast.success("สำเร็จ บันทึกข้อมูลเรียบร้อย", {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          setTimeout(() => {
            resolve(true);
          }, 3000);
        });
        // delay 3 second on reset state
        promiseSave.then(() => {
          const data_health = {
            hn: data.hn.value,
            daterequest: moment(data.vstdate.value).format("YYYY-MM-DD"),
            pname: data.pname.value,
            fname: data.firstname.value,
            lname: data.lastname.value,
            birthdate: data.birthdate.value,
            sex: data.sex.value,
            addr: data.address.value,
            dep_id: data.department.value,
            phone: data.tel.value,
            temperature: data.thermometer.value,
            pulse: data.pulse.value,
            breath: data.respire.value,
            blood_pressure: data.blood.value,
            weight: data.weight.value,
            height: data.height.value,
            waist: data.waistline.value,
            cost: 5555,
            come_type: data.service.value,
            pttype: data.right.value,
          };

          console.log(data_health);
          // dispatch(healthAdd(data_health))
          //   .then((res) => {
          //     console.log(res);
          //   })
          //   .catch((err) => {
          //     console.log(err);
          //   });
          // dispatch(patientFetch(null)).then(() => {
          //   setData({
          //     ...initialState,
          //   });

          //   stepper.to(1);
          // });

          //console.log(currentHealth);

          window.location.reload(false);
          //stepper.to(1);
        });
      } else {
        stepper.to(3);
      }
    }
  };

  // Lifecycle
  useEffect(() => {
    new Stepper(document.querySelector("#stepper1"), {
      linear: false,
      animation: true,
    });
    console.log("StepperContent Tab");
  }, []);
  return (
    <div id="stepper1" className="bs-stepper linear">
      <div
        style={{
          display: "block",
          overflowX: "auto",
          whiteSpace: "nowrap",
        }}
      >
        <div className="bs-stepper-header">
          <div className="step" data-target="#test-l-1">
            <button className="step-trigger">
              <span className="bs-stepper-circle">1</span>
              <span className="bs-stepper-label">ข้อมูลทั่วไป</span>
            </button>
          </div>
          <div className="line" />
          <div className="step" data-target="#test-l-2">
            <button className="step-trigger">
              <span className="bs-stepper-circle">2</span>
              <span className="bs-stepper-label">ประวัติการรักษา</span>
            </button>
          </div>
          {/* แสดงขนาด sm ลงไป */}
          <div className="line" />
          <div className="step" data-target="#test-l-3">
            <button className="step-trigger">
              <span className="bs-stepper-circle">3</span>
              <span className="bs-stepper-label">ประวัติครอบครัว</span>
            </button>
          </div>
          <div className="line" />
          <div className="step" data-target="#test-l-4">
            <button className="step-trigger">
              <span className="bs-stepper-circle">4</span>
              <span className="bs-stepper-label">
                ผลการตรวจทางห้องปฎิบัติการ
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="bs-stepper-content">
        <StepperContentTab1
          confirm={onConfirm}
          patients={props.patients}
          departs={props.departs}
          pttypes={props.pttypes}
        />
        <StepperContentTab2 confirm={onConfirm} patients={props.patients} />
        <StepperContentTab3 confirm={onConfirm} />
        <StepperContentTab4
          confirm={onConfirm}
          hn={data.hn.value}
          vstdate={moment(data.vstdate.value).format("YYYY-MM-DD")}
        />
      </div>
    </div>
  );
}

export default StepperContentTab;
