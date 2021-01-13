import React from "react";
import { useHistory } from "react-router-dom";
export default function GoBack(props) {
  let history = useHistory();
  return (
    <button className={props.btnColor} onClick={() => history.goBack()}>
      <i className="fas fa-arrow-left" /> ย้อนกลับ
    </button>
  );
}
