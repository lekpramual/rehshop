import React from "react";
import Pagination from "react-js-pagination";

export default function ResultTablePage(props) {
  const handlePageChange = (pageNumber) => {
    // Return pageNumber to component Result
    props.onConfirmPage(pageNumber);
  };

  return props.totalItemsCount !== 0 ? (
    <div className="text-center">
      <div className="card-footer clearfix">
        <div className="pagination pagination-sm m-0 float-right">
          <Pagination
            itemClass="page-item"
            linkClass="page-link"
            prevPageText="ก่อนหน้า"
            nextPageText="ถัดไป"
            firstPageText="หน้าแรก"
            lastPageText="ท้ายสุด"
            activePage={props.page}
            itemsCountPerPage={20}
            totalItemsCount={props.totalItemsCount}
            onChange={(e) => handlePageChange(e)}
          />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
