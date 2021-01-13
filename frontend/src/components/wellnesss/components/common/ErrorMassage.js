import React from "react";

/**
 * View
 */
function ErrorMassage({ errMsg }) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="alert alert-danger alert-dismissible">
          <h5>
            <i className="icon fas fa-ban" /> แจ้งเตือน !
          </h5>
          {errMsg}.
        </div>
      </div>
    </div>
  );
}

export default ErrorMassage;
