import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
/**
 * Actions
 */
import { patientFetch } from "../../../../reduxs/actions/Patient";

/**
 * Components
 */
import {
  SearchHN,
  Loading,
  Disconnect,
  InfoMassage,
  WarningMassage,
} from "../common";
import StepperContentTab from "./StepperContentTab";

function RecordContent(props) {
  /**
   * Redex
   */
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.patients);
  const patientsStatus = useSelector((state) => state.patients.status);
  const patientsError = useSelector((state) => state.patients.error);

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

  /**
   * Handle
   */
  const onConfirm = (msg, page, data_request) => {
    if (msg === "searchHN") {
      // Request HN IN SearchHN Component
      setData({
        ...data,
        reload: true,
      });
      // promise reload
      var promiseSearch = new Promise(function (resolve, reject) {
        // call resolve if the method succeeds
        setTimeout(() => {
          resolve(true);
        }, 1000);
      });
      // delay 3 second on reset state
      promiseSearch.then(() => {
        if (data.hn.value !== data_request) {
          dispatch(patientFetch(data_request)).then((res) => {
            setData({
              ...data,
              reload: false,
              hn: { value: data_request },
            });
          });
        } else {
          setData({
            ...data,
            reload: false,
          });
        }
      });
    }
  };

  const { departs, pttypes } = props;
  // count data parient
  function isCheckData() {
    let iscount;
    patients.patients.map((rs) => {
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
  let content;
  if (patientsStatus === "idle") {
    content = <InfoMassage msg="กรุณากรอก HN เพื่อทำการบันทึกข้อมูล." />;
  } else if (patientsStatus === "loading") {
    content = <Loading />;
  } else if (patientsStatus === "succeeded") {
    content = isCheckData() ? (
      <StepperContentTab
        departs={departs}
        pttypes={pttypes}
        patients={patients}
      />
    ) : (
      <WarningMassage msg="ไม่มีข้อมูล HN นี้ กรุณาตรวจสอบ" />
    );
  } else if (patientsStatus === "failed") {
    content = <Disconnect isError={patientsError} />;
  }

  /**
   * Lifecycle
   */
  useEffect(() => {}, [patients]);

  return (
    <div className="card">
      <SearchHN confirm={onConfirm} />
      <div className="card-body">{content}</div>
    </div>
  );
}

export default RecordContent;
