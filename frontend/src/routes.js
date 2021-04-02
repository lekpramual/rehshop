import React from "react";

//
const rehSeviceHome = React.lazy(() =>
  import("./components/backoffice/containers/Dashboard")
);
// Shop System
const shopMember = React.lazy(() =>
  import("./components/shop/containers/Member")
);

const shopMemberLab = React.lazy(() =>
  import("./components/shop/containers/MemberLab")
);

const routes = [
  {
    path: "/rehsevice/home",
    exact: true,
    name: "เช็กยอดปันผล",
    component: rehSeviceHome,
    icon: "fas fa-user-check"
  },
  // shop system
  {
    path: "/shop/member",
    exact: true,
    name: "เช็กยอดปันผล",
    component: shopMember,
    icon: "fas fa-user-check"
  },
  {
    path: "/shop/memberlab",
    exact: true,
    name: "เช็กยอดปันผล",
    component: shopMemberLab,
    icon: "fas fa-user-check"
  }
];

export default routes;
