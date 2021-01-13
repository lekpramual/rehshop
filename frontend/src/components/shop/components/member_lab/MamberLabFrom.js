import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function MamberLabFrom() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const currentShop = useSelector((state) => state.shop.currentShop);

  // React.useMemo(() => {
  //   return setData(currentShop);
  // }, [currentShop]);

  useEffect(() => {
    console.log("Reload Merber Lab From ..");
    currentShop.map((rs) => {
      rs.data.map((rs_data) => {
        setName(rs_data.member_name);
      });
    });
  }, [currentShop]);
  return (
    <div>
      {/* <b>{JSON.stringify(currentShop)}</b> */}
      <input
        name="member_name"
        value={name}
        onChange={(val) => setName(val.target.value)}
      />
    </div>
  );
}

export default MamberLabFrom;
