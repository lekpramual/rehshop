import React from "react";

function InfoMassage({ msg }) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="alert alert-info alert-dismissible">
          <h5>
            <i className="icon fas fa-info" /> แจ้งเตือน !
          </h5>
          {msg}
        </div>
      </div>
    </div>
  );
}

export default InfoMassage;
