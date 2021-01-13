import React, { useState, useEffect } from "react";
import Select from "react-select";

// import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
/**
 * Actions
 */
import { departFetch } from "../../../../reduxs/actions/Depart";
//import { healthsFetch } from "../../../../reduxs/actions/Health";

export default function SearchHNDepart(props) {
  /**
   * Redux
   */
  const dispatch = useDispatch();
  const departs = useSelector((state) => state.departs);
  const departStatus = useSelector((state) => state.departs.status);
  /**
   * State
   */
  const initialState = {
    hn: "",
    department: "",
  };
  const [data, setData] = useState(initialState);

  /**
   * Handel
   */
  const onConfirmClick = () => {
    props.confirmSearch(
      data.hn,
      data.department === "" ? data.department : data.department.value
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirmClick();
  };

  var optionsdepartment = [];
  departs.departs.map((res) => {
    return (optionsdepartment = res.data.map((res, index) => {
      return { value: res.dep_id, label: res.dep_name };
    }));
  });
  /**
   * Lifecycle
   */
  useEffect(() => {
    if (departStatus === "idle") {
      dispatch(departFetch());
    }
  }, [departStatus, dispatch]);

  /**
   * View
   */
  return (
    <div className="card-header">
      <div className="row mt-0">
        <div className="col-md-11 offset-md-1 col-12">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="row">
              <div className="col-sm-4">
                {" "}
                <input
                  type="search"
                  className="form-control"
                  placeholder="กรอก HN"
                  value={data.hn.value}
                  name="hn"
                  onChange={(e) => setData({ ...data, hn: e.target.value })}
                />
              </div>
              <div className="col-sm-5">
                {" "}
                <Select
                  style={{
                    backgroundColor: "#f2f4f6",
                  }}
                  value={data.department}
                  onChange={(e) => setData({ ...data, department: e })}
                  options={optionsdepartment}
                  placeholder="เลือก หน่วยงาน..."
                />
              </div>
              <div className="col-3">
                <button type="submit" className="btn btn-default">
                  <i className="fa fa-search" /> ค้นหา
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
