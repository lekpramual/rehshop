import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
/**
 * Actions
 */
import { healthsGet } from "../../../../reduxs/actions/Health";

function ResultUpdate(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(healthsGet(props.hn, props.vstdate));
  }, []);
  return (
    <div className="modal fade" id="modal-lg">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">
              {" "}
              <i className="fas fa-user" /> แก้ไขข้อมูลการตรวจ
            </h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <p>HN : {props.hn}</p>
            <p>Date : {props.vstdate}</p>
          </div>

          <div className="modal-footer justify-content-between">
            <button
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultUpdate;
