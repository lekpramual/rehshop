import React, { useEffect, useState } from "react";
import SearchMember from "../common/SearchMember";
import Information from "../common/info-json";
import MemberList from "./MemberList";

function Member() {
  const [data, setData] = useState([]);

  // Confirm From Search
  const onConfirm = (msg, member_search, member_name) => {
    if (msg === "SearchMember") {
      console.log(member_search, member_name);
      const filterData =
        member_search !== ""
          ? Information.filter(
              (row) =>
                row.member_no === `${member_search}` &&
                row.member_name === `${member_name}`
            )
          : "";

      setData(filterData);
    }
  };

  useEffect(() => {}, []);

  return (
    <section className="content" style={{ marginTop: -16 }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <SearchMember confirm={onConfirm} />
              <div className="card-body">
                {/* <MemberList data={data} /> */}
                <h1>จะมีการเปิดให้ ตรวจสอบในภายหลัง</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Member;
