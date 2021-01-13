import React, { useState } from "react";
import classNames from "classnames";

function SearchHN(props) {
  /**
   * State
   */
  const initialState = {
    hn: { value: "", isValid: true },
  };
  const [data, setData] = useState(initialState);

  /**
   * Handle
   */
  const onConfirmClick = () => {
    const msg = "searchHN";
    props.confirm(msg, "next", data.hn.value);
  };
  // handle from validate
  const formIsValidSearch = () => {
    let isGood = true;
    if (data.hn.value === "") {
      data.hn.isValid = false;
      isGood = false;
    }
    if (!isGood) {
      setData({
        ...data,
      });
    }
    return isGood;
  };
  // handle onclick submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formIsValidSearch()) {
      onConfirmClick();
    }
  };
  /**
   * View
   */
  return (
    <div className="card-header">
      <div className="row mt-0">
        <div className="col-xl-6 offset-xl-3 col-sm-10 offset-sm-1 col-12 text-center">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="input-group">
              <input
                style={{
                  backgroundColor: "#f2f4f6",
                }}
                type="search"
                className={classNames("form-control", {
                  "form-control is-invalid": data.hn.isValid === false,
                })}
                placeholder="กรอก HN"
                value={data.hn.value}
                name="hn"
                onChange={(e) => setData({ hn: { value: e.target.value } })}
              />

              <div className="input-group-append">
                <button type="submit" className="btn btn-default">
                  <i className="fa fa-search" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchHN;
