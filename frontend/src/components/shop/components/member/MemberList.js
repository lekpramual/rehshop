import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateShop,
  shopFetch,
  countshopFetch,
} from "../../../../reduxs/actions/Shop";

const MemberList = (props) => {
  const [confrim, setConfrim] = useState(false);
  const [memberNo, setMemberNo] = useState("");
  const [overlay, setOverlay] = useState(false);

  const dispatch = useDispatch();

  function formatNumber(num) {
    const parseNumber = parseInt(num);
    const toLocale = parseNumber.toLocaleString();
    return toLocale;
  }

  const overlayConfrim = () => {
    setOverlay(true);
    // promise reload
    var promise = new Promise(function (resolve, reject) {
      // call resolve if the method succeeds
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
    // delay 3 second on reset state
    promise.then(() => {
      dispatch(updateShop(memberNo)).then((res) => {
        dispatch(shopFetch(memberNo));
        dispatch(countshopFetch());
        setOverlay(false);
        setConfrim(true);
      });
    });
  };

  return (
    <div className="row">
      <div className="col-12">
        <table className="table table-bordered table-responsive p-0">
          <thead>
            <tr>
              <th>รหัสสมาชิก</th>
              <th>ชื่อสมาชิก</th>
              <th>จำนวน ( หุ้น )</th>
              <th>จำนวน ( บาท )</th>
              <th>สถานะ</th>
              <th>ยืนยันยอด</th>
            </tr>
          </thead>
          <tbody>
            {props.reload ? (
              <tr>
                <td colSpan="6" className="text-center">
                  <i className="fas fa-1x fa-sync-alt fa-spin" />
                </td>
              </tr>
            ) : (
              props.currentShop.map((rs) => {
                if (rs.data.length === 0) {
                  return (
                    <tr key="99">
                      <td colSpan="6" className="text-center">
                        -- ไม่มีข้อมูล กรุณาตรวจสอบ --
                      </td>
                    </tr>
                  );
                } else {
                  //ismemberData = rs.data;
                  return rs.data.map((rs) => {
                    return (
                      <tr key={rs.member_id}>
                        <td>{rs.member_no}</td>
                        <td>{rs.member_name}</td>
                        <td>{rs.member_number}</td>
                        <td>{formatNumber(rs.member_total)}</td>
                        <td>
                          {rs.member_status === "N" ? (
                            <b className="text-danger">ยังไม่ยืนยันยอด</b>
                          ) : (
                            <b className="text-success">ยืนยันเรียบร้อย</b>
                          )}
                        </td>
                        <td className="text-center">
                          {rs.member_status === "N" ? (
                            <button
                              type="button"
                              className="btn btn-success"
                              data-toggle="modal"
                              data-target="#modal-sm"
                              onClick={() => setMemberNo(rs.member_no)}
                            >
                              <i className="fas fa-check" />
                            </button>
                          ) : (
                            <button
                              type="button"
                              className="btn btn-success disabled"
                            >
                              <i className="fas fa-check" />
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  });
                }
              })
            )}
          </tbody>
        </table>

        <div className="modal fade" id="modal-sm">
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              {overlay ? (
                <div className="overlay d-flex justify-content-center align-items-center">
                  <i className="fas fa-2x fa-sync fa-spin"></i>
                </div>
              ) : (
                ""
              )}
              <div className="modal-body text-center">
                {confrim ? (
                  <p className="text-success">ยืนยันยอดเรียบร้อย</p>
                ) : (
                  <p>ยืนยันจำนวนหุ้นและจำนวนเงินหุ้น</p>
                )}
              </div>
              <div className="modal-footer justify-content-between">
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                >
                  ปิด
                </button>
                {confrim ? (
                  <button type="button" className="btn btn-success disabled">
                    ยืนยันยอด
                  </button>
                ) : (
                  <button
                    type="button"
                    //data-dismiss="modal"
                    className="btn btn-success"
                    onClick={() => overlayConfrim()}
                  >
                    ยืนยันยอด
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberList;
