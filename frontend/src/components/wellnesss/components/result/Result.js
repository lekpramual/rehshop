import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchHNDepart } from "../common";

/**
 * Components
 */
import ResultTable from "./ResultTable";
import ResultTablePage from "./ResultTablePage";
/**
 * Actions Redux
 */
import { healthsFetch } from "../../../../reduxs/actions/Health";

/**
 * Manager Result Components
 */
export default function Result() {
  /**
   * Redex
   */
  const dispatch = useDispatch();
  const healths = useSelector((state) => state.healths);
  const healthsStatus = useSelector((state) => state.healths.status);

  /**
   * State
   */
  const initialState = {
    hn: "",
    department: "",
    page: 1,
    hn_update: "99",
    vstdate_update: "99",
  };
  const [data, setData] = useState(initialState);

  /**
   * Handle
   */
  const onConfirmSearch = (hn, department) => {
    // Reload New Data
    dispatch(healthsFetch(1, hn, department));
    // Reset Page on Search Data New
    setData({
      ...data,
      hn: hn,
      department: department,
      page: 1,
    });
  };

  const onConfirmPage = (page) => {
    // Reload New Data On Page
    dispatch(healthsFetch(page, data.hn, data.department));
    setData({
      ...data,
      page: page,
    });
  };



  // count data parient
  function isCheckData() {
    let iscount;
    let total = 0;
    var isdata = [];
    healths.healths.map((rs) => {
      total = rs.total;
      if (rs.data.length === 0) {
        iscount = false;
        return iscount;
      } else {
        iscount = true;
        isdata = rs.data;
        return { iscount, isdata };
      }
    });
    return { iscount, total, isdata };
  }

  /**
   * Lifecycle
   */
  useEffect(() => {
    if (healthsStatus === "idle") {
      dispatch(healthsFetch(data.page, data.hn, data.department));
    }
  }, [healthsStatus, data.hn, data.department, data.page, dispatch]);

  // manager data health for props
  const { isdata, iscount, total } = isCheckData();
  return (
    <div className="row" style={{ marginTop: -5 }}>
      <div className="col-12">
        <div className="card">
          <SearchHNDepart confirmSearch={onConfirmSearch} />
          <div className="card-body">
            <ResultTable
              page={data.page}
              iscount={iscount}
              data={isdata}
            />
            <ResultTablePage
              page={data.page}
              totalItemsCount={total}
              onConfirmPage={onConfirmPage}
            />
            
          </div>
        </div>
      </div>
    </div>
  );
}
