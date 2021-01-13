import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { Link } from "react-router-dom";
import TabMenu from "../common/TabMenu";
import ResultTable from "./ResultTable";
import Pagination from "react-js-pagination";
/**
 * Components
 */
import {
  SearchHNDepart,
  Loading,
  Disconnect,
  InfoMassage,
  WarningMassage,
} from "../common";
/**
 * Actions
 */
import { healthsFetch } from "../../../../reduxs/actions/Health";
function Result() {
  /**
   * Redex
   */
  const dispatch = useDispatch();
  const healths = useSelector((state) => state.healths);
  const healthsStatus = useSelector((state) => state.healths.status);
  const healthsError = useSelector((state) => state.healths.error);

  /**
   * State
   */
  const [hn, setHN] = useState("");
  const [department, setDepartment] = useState("");
  const [page, setPage] = useState(1);
  /**
   * Handle
   */
  const onConfirm = (msg, page, data_request) => {
    if (msg === "searchHNDepart") {
      const { hn_search, department_search } = data_request;
      console.log(hn_search.value);
      console.log(department_search);
      // Request HN IN SearchHN Component

      setHN(hn_search.value);
      setDepartment(
        department_search === "" ? department_search : department_search.value
      );
      // promise reload
      var promiseSearch = new Promise(function (resolve, reject) {
        // call resolve if the method succeeds
        setTimeout(() => {
          resolve(true);
        }, 1000);
      });
      // delay 3 second on reset state
      promiseSearch.then(() => {
        if (hn !== hn_search.value || department !== department_search) {
          // reload data
          //setHN(hn_search);
          //setDepartment(department_search);
          setPage(1);

          dispatch(
            healthsFetch(
              page,
              hn_search.value,
              department_search === ""
                ? department_search
                : department_search.value
            )
          );
        }
      });
    } else {
      console.log(msg, page, data_request);
      //dispatch(healthsFetch(data_request));
    }
  };

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
    dispatch(healthsFetch(pageNumber, hn, department));
  };

  // count data parient
  function isCheckData() {
    let iscount;
    let total;
    healths.healths.map((rs) => {
      total = rs.total;
      if (rs.data.length === 0) {
        iscount = false;
        return iscount;
      } else {
        iscount = true;
        return iscount;
      }
    });
    //console.log(total);
    return { iscount, total };
  }
  let content;
  if (healthsStatus === "idle") {
    content = (
      <div className="card-body table-responsive">
        <InfoMassage msg="กำลังโหลดข้อมูล ..." />
      </div>
    );
  } else if (healthsStatus === "loading") {
    content = <Loading />;
  } else if (healthsStatus === "succeeded") {
    const { iscount, total } = isCheckData();
    content = iscount ? (
      <>
        {/* data table result */}
        <ResultTable healths={healths} page={page} confirm={onConfirm} />
        {/* pagination config */}
        <div className="text-center">
          <div className="card-footer clearfix">
            {/* float-right */}
            <div className="pagination pagination-sm m-0 float-right">
              <Pagination
                itemClass="page-item"
                linkClass="page-link"
                prevPageText="ก่อนหน้า"
                nextPageText="ถัดไป"
                firstPageText="หน้าแรก"
                lastPageText="ท้ายสุด"
                activePage={page}
                itemsCountPerPage={20}
                totalItemsCount={total}
                onChange={(e) => handlePageChange(e)}
              />
            </div>
          </div>
        </div>
      </>
    ) : (
      <div className="card-body table-responsive">
        <WarningMassage msg="ไม่มีข้อมูล HN นี้ กรุณาตรวจสอบ" />
      </div>
    );
  } else if (healthsStatus === "failed") {
    content = <Disconnect isError={healthsError} />;
  }

  /**
   * Lifecycle
   */
  useEffect(() => {
    if (healthsStatus === "idle") {
      dispatch(healthsFetch(page, hn, department));
    }
  }, [healthsStatus, hn, department, page, dispatch]);

  return (
    <section className="content" style={{ marginTop: -16 }}>
      <div className="container-fluid">
        <TabMenu />
        <div className="row" style={{ marginTop: -5 }}>
          <div className="col-12">
            <div className="card">
              <SearchHNDepart confirm={onConfirm} />
              {content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Result;
