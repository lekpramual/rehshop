import React from "react";
import { useParams } from "react-router-dom";

export default function ReusltView() {
  const { hn, vstdate } = useParams();
  return (
    <div className="row" style={{ marginTop: -5 }}>
      <p>HN : {hn}</p>
      <p>Date : {vstdate}</p>
    </div>
  );
}
