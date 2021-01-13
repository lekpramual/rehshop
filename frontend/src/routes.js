import React from "react";

// Shop System
const shopMember = React.lazy(() =>
  import("./components/shop/containers/Member")
);

const routes = [
  // shop system
  {
    path: "/shop/member",
    exact: true,
    name: "เช็กยอดปันผล",
    component: shopMember,
    icon: "fas fa-user-check",
  },
];

export default routes;
