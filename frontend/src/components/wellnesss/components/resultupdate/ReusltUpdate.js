import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { healthsGet } from "../../../../reduxs/actions/Health";

import StepperContentTab from "../stepper/StepperContentTab";
export default function ReusltUpdate(props) {
  const dispatch = useDispatch();
  const healths = useSelector((state) => state.healths);

  const { hn, vstdate } = useParams();

  // count data parient
  function isCheckData() {
    let iscount;
    var isdata = [];
    healths.health.map((rs) => {
      if (rs.data.length === 0) {
        iscount = false;
        return iscount;
      } else {
        iscount = true;
        isdata = rs.data;
        return { iscount, isdata };
      }
    });
    return { iscount, isdata };
  }

  useEffect(() => {
    if (hn !== "" || vstdate !== "") {
      dispatch(healthsGet(hn, vstdate));
    }
  }, [hn, vstdate, dispatch]);

  // manager data health for props
  const { isdata, iscount } = isCheckData();
  return (
    <div className="row" style={{ marginTop: -5 }}>
      <div className="col-12">
        <StepperContentTab isdata={isdata} iscount={iscount} />
      </div>
    </div>
  );
}
