import React from "react";
import defaultLayout from "../components/Layout/defaultLayout";

const LayoutContext = React.createContext({
  opened: false,
  setOpened: () => {},
  collapsed: false,
  setCollapsed: () => {},
  ...defaultLayout,
});

export default LayoutContext;
