import React from "react";

function Disconnect({ isError }) {
  /**
   * Handle
   */

  return (
    <div className="row">
      <div className="col-12">
        <div className="alert alert-danger alert-dismissible">
          <h5>
            <i className="icon fas fa-ban" /> ผิดพลาด !
          </h5>

          <div className="row">
            <div className="col-12">{JSON.stringify(isError)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Disconnect;
