import React from "react";
import TabMenu from "../components/common/TabMenu";
import DashboardComponent from "../components/dashboard";

const Dashboard = () => {
  return (
    <section className="content" style={{ marginTop: -16 }}>
      <div className="container-fluid">
        <TabMenu />
        <DashboardComponent />
      </div>
    </section>
  );
};

export default Dashboard;
