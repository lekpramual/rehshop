import React, { useEffect, useState, useCallback } from "react";
import SearchMember from "../common/SearchMember";
import MemberList from "./MemberList";
import MemberMessage from "./MemberMessage";

import { useDispatch, useSelector } from "react-redux";
import { shopFetch, countshopFetch } from "../../../../reduxs/actions/Shop";

function Member() {
  const [reload, setReload] = useState(false);
  const dispatch = useDispatch();
  const currentShop = useSelector((state) => state.shop.currentShop);
  const countShop = useSelector((state) => state.shop.countShop);

  function formatNumber(num) {
    const parseNumber = parseInt(num);
    const toLocale = parseNumber.toLocaleString();
    return toLocale;
  }
  // Confirm From Search
  const onConfirm = (msg, member_search) => {
    if (msg === "SearchMember") {
      setReload(true);
      // promise reload
      var promise = new Promise(function (resolve, reject) {
        // call resolve if the method succeeds
        setTimeout(() => {
          resolve(true);
        }, 1000);
      });
      // delay 3 second on reset state
      promise.then(() => {
        dispatch(shopFetch(member_search)).then((res) => {
          setReload(false);
        });
      });
    }
  };
  const getshopFetch = useCallback(async () => {
    return await dispatch(countshopFetch());
  }, [dispatch]);

  useEffect(() => {
    getshopFetch();
  }, [getshopFetch]);

  return (
    <section className="content" style={{ marginTop: -16 }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <SearchMember confirm={onConfirm} />
              <div className="card-body">
                <MemberMessage />
                <div className="row" style={{ marginBottom: 5 }}>
                  <div className="col-12">
                    <div className="badge badge-primary" style={{ padding: 5 }}>
                      <h6>
                        <i className="far fa-user-check"></i> สมาชิกทั้งหมด{" "}
                        {countShop.map((rs) => {
                          return rs.data.map((rs) => {
                            return formatNumber(rs.member_tatal);
                          });
                        })}{" "}
                        คน{" "}
                      </h6>
                    </div>{" "}
                    <div className="badge badge-success" style={{ padding: 5 }}>
                      <h6>
                        <i className="far fa-user-check"></i> ยืนยันยอด{" "}
                        {countShop.map((rs) => {
                          return rs.data.map((rs) => {
                            return formatNumber(rs.member_ischeck);
                          });
                        })}{" "}
                        คน{" "}
                      </h6>
                    </div>{" "}
                    <div className="badge badge-danger" style={{ padding: 5 }}>
                      <h6>
                        <i className="far fa-user-check"></i> ยังไม่ยืนยันยอด{" "}
                        {countShop.map((rs) => {
                          return rs.data.map((rs) => {
                            return formatNumber(rs.member_notcheck);
                          });
                        })}{" "}
                        คน{" "}
                      </h6>
                    </div>
                  </div>
                </div>
                <MemberList reload={reload} currentShop={currentShop} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Member;
