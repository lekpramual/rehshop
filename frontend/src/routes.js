import React from "react";

const backofficeDashboard = React.lazy(() =>
  import("./components/backoffice/containers/Dashboard")
);
const backofficeContact = React.lazy(() =>
  import("./components/backoffice/containers/Contact")
);

// Shop System
const shopMember = React.lazy(() =>
  import("./components/shop/containers/Member")
);
// const shopMemberLab = React.lazy(() =>
//   import("./components/shop/containers/MemberLab")
// );

const wellnessDashboard = React.lazy(() =>
  import("./components/wellnesss/containers/Dashboard")
);
const wellnessRecord = React.lazy(() =>
  import("./components/wellnesss/containers/Record")
);
const wellnessResult = React.lazy(() =>
  import("./components/wellnesss/containers/Result")
);

const wellnessResultUpdate = React.lazy(() =>
  import("./components/wellnesss/containers/ResultUpdate")
);

const wellnessResultView = React.lazy(() =>
  import("./components/wellnesss/containers/ResultView")
);

const wellnessDepart = React.lazy(() =>
  import("./components/wellnesss/containers/Depart")
);

const routes = [
  // backoffice system
  {
    path: "/backoffice/dashboard",
    exact: true,
    name: "ภาพรวม",
    component: backofficeDashboard,
    icon: "fas fa-tachometer-alt",
  },
  {
    path: "/backoffice/contact",
    exact: true,
    name: "ติดต่อ",
    component: backofficeContact,
    icon: "fas fa-tachometer-alt",
  },
  // shop system
  {
    path: "/shop/member",
    exact: true,
    name: "เช็กหุ้น",
    component: shopMember,
    icon: "fas fa-user-check",
  },
  // {
  //   path: "/shop/memberlab",
  //   exact: true,
  //   name: "เช็กหุ้น",
  //   component: shopMemberLab,
  //   icon: "fas fa-user-check",
  // },
  // wellness system
  {
    path: "/wellness/dashboard",
    exact: true,
    name: "บันทึกผล",
    component: wellnessDashboard,
    icon: "fas fa-heartbeat",
  },
  {
    path: "/wellness/record",
    exact: true,
    name: "บันทึกข้อมูล",
    component: wellnessRecord,
    icon: "fas fa-save",
  },
  {
    path: "/wellness/result",
    exact: true,
    name: "รายงาน",
    component: wellnessResult,
    icon: "fas fa-chart-line",
  },

  {
    path: "/wellness/resultupdate/:hn/:vstdate",
    exact: true,
    name: "รายงาน",
    component: wellnessResultUpdate,
    icon: "fas fa-chart-line",
  },
  {
    path: "/wellness/resultview/:hn/:vstdate",
    exact: true,
    name: "รายงาน",
    component: wellnessResultView,
    icon: "fas fa-chart-line",
  },
  {
    path: "/wellness/depart",
    exact: true,
    name: "ข้อมูลหน่วยงาน",
    component: wellnessDepart,
    icon: "fas fa-cogs",
  },
];

export default routes;
