import React from "react";
import TabMenu from "../components/common/TabMenu";
import ResultComponent from "../components/result";

export default function Result() {
  return (
    <section className="content" style={{ marginTop: -16 }}>
      <div className="container-fluid">
        <TabMenu />
        <ResultComponent />
      </div>
    </section>
  );
}
