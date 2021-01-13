import React, { useState } from "react";
import SearchMember from "../common/SearchMember";
import MamberLabFrom from "./MamberLabFrom";

import { useDispatch } from "react-redux";
import { shopFetch } from "../../../../reduxs/actions/Shop";

function MemberLab() {
  const [reload, setReload] = useState(false);
  const dispatch = useDispatch();

  // Confirm From Search
  const onConfirm = (msg, search) => {
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
        dispatch(shopFetch(search)).then((res) => {
          setReload(false);
        });
      });
    }
  };

  // const getshopFetch = useCallback(async () => {
  //   return await dispatch(countshopFetch());
  // }, [dispatch]);

  // useMemo(() => {
  //   console.log("Memo Navoy");
  //   currentShop.map((rs) => {
  //     console.log(rs);
  //     return rs.data.map((rs2) => {
  //       console.log(rs2);
  //       return setMemberno(rs2.member_name);
  //     });
  //   });
  // }, [currentShop]);

  // useEffect(() => {
  //   getshopFetch();
  // }, [getshopFetch]);

  return (
    <section className="content" style={{ marginTop: -16 }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <SearchMember confirm={onConfirm} />
              <div className="card-body">
                <h3>Member From </h3>
                {reload ? (
                  <div className="text-center">
                    <i className="fas fa-1x fa-sync-alt fa-spin" />
                  </div>
                ) : (
                  <MamberLabFrom />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MemberLab;
