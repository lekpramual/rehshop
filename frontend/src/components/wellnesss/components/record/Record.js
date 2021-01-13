import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
/**
 * Actions
 */
import { pttypeFetch } from "../../../../reduxs/actions/Pttype";
import { departFetch } from "../../../../reduxs/actions/Depart";
/**
 * Components
 */
import RecordContent from "./RecordContent";
import { Loading, TabMenu, Disconnect } from "../common";

function Record() {
  /**
   * Redux
   */
  const dispatch = useDispatch();
  const departs = useSelector((state) => state.departs);
  const pttypes = useSelector((state) => state.pttypes);
  const departStatus = useSelector((state) => state.departs.status);
  const pttypeStatus = useSelector((state) => state.pttypes.status);
  const departError = useSelector((state) => state.departs.error);
  /**
   * Lifecycle
   */
  useEffect(() => {
    if (departStatus === "idle" || pttypeStatus === "idle") {
      dispatch(departFetch());
      dispatch(pttypeFetch());
    }
  }, [departStatus, pttypeStatus, dispatch]);

  /**
   * View
   */
  let content;
  if (departStatus === "loading") {
    content = <Loading />;
  } else if (departStatus === "succeeded") {
    content = <RecordContent departs={departs} pttypes={pttypes} />;
  } else if (departStatus === "failed") {
    content = <Disconnect isError={departError} />;
  }
  return (
    <section className="content" style={{ marginTop: -16 }}>
      <div className="container-fluid">
        <TabMenu />
        <div className="row" style={{ marginTop: -5 }}>
          <div className="col-12">{content}</div>
        </div>
        <ToastContainer />
      </div>
    </section>
  );
}

export default Record;
