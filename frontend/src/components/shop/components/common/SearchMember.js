import React, { useState } from "react";
import classNames from "classnames";

function SearchMember(props) {
  const initialState = {
    member: { value: "", isValid: true },
  };
  // set state with formdefaults
  const [data, setData] = useState(initialState);
  // handle confirm on props with record component
  const onConfirmClick = () => {
    if (props.confirm) {
      const msg = "SearchMember";
      props.confirm(msg, data.member.value);
    } else {
      props.confirm("");
    }
  };
  // handle from validate
  const formIsValidSearch = () => {
    let isGood = true;
    if (data.member.value === "") {
      data.member.isValid = false;
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
  return (
    <div className="card-header">
      <div className="row">
        <div className="col-xl-6 offset-xl-3 col-sm-10 offset-sm-1 col-12 text-center">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="input-group">
              <input
                style={{
                  backgroundColor: "#f2f4f6",
                }}
                type="search"
                className={classNames("form-control form-control-lg", {
                  "form-control form-control-lg is-invalid":
                    data.member.isValid === false,
                })}
                placeholder="เลขสมาชิก หรือ ชื่อ-นามสกุล"
                value={data.member.value}
                name="member"
                onChange={(e) => setData({ member: { value: e.target.value } })}
              />
              <div className="input-group-append">
                <button type="submit" className="btn btn-lg btn-default">
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

export default SearchMember;
