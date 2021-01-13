import React from "react";

const MemberList = (props) => {
  function formatNumber(num) {
    const parseNumber = parseInt(num);
    const toLocale = parseNumber.toLocaleString();
    return toLocale;
  }
  function isCheckData() {
    let iscount;
    var isdata = [];
    props.data.map((rs) => {
      if (rs.lengtd === 0) {
        iscount = false;
        return iscount;
      } else {
        iscount = true;
        isdata = rs;
        return { iscount, isdata };
      }
    });
    return { iscount, isdata };
  }

  const { iscount, isdata } = isCheckData();
  return (
    <div className="row">
      <div className="col-12">
        <table className="table table-bordered table-responsive p-0">
          <thead>
            <tr>
              <td>รหัสสมาชิก</td>
              <td>ชื่อสมาชิก</td>
              <td>เงินหุ้น</td>
              <td>ยอดซื้อ</td>
              <td>ปันผลหุ้น</td>
              <td>เฉลี่ยคืนยอดซื้อ</td>
              <td>จ่ายจริง</td>
            </tr>
          </thead>
          <tbody>
            {iscount ? (
              <tr key="isdata">
                <td>{isdata.member_no}</td>
                <td>{isdata.member_name}</td>
                <td>{formatNumber(isdata.member_money)}</td>
                <td>{formatNumber(isdata.member_sell)}</td>
                <td>{formatNumber(isdata.member_stock)}</td>
                <td>{formatNumber(isdata.member_buy)}</td>
                <td>{formatNumber(isdata.member_paid)}</td>
              </tr>
            ) : (
              <tr key="emtpydata">
                <td
                  style={{ verticalAlign: "middle" }}
                  colSpan="7"
                  className="text-center"
                >
                  {/* {(page - 1) * 20 + index + 1} */}
                  --- ไม่มีข้อมูล ---
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MemberList;
