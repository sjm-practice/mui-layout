import React from "react";
import PropTypes from "prop-types";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import MenuRounded from "@material-ui/icons/MenuRounded";
import Root from "./Root";
import Header from "./Header";
import Nav from "./Nav";
import Content from "./Content";
import Footer from "./Footer";
import HeaderContent from "../HeaderContent";
import FooterContent from "../FooterContent";
import NavHeader from "../NavHeader";
import NavContent from "../NavContent";
// import { createFixedLayout } from "../../utils/presets";

const config = {
  navAnchor: "left",
  navVariant: {
    xs: "temporary",
    sm: "persistent",
    md: "persistent",
  },
  navWidth: {
    xs: 240,
    sm: 256,
    md: 256,
  },
  collapsible: true,
  collapsedWidth: 64,
  clipped: true,
  headerPosition: "relative",
  squeezed: true,
  footerShrink: true,
};

const Layout = ({ children }) => (
  <Root config={config}>
    <Header renderMenuIcon={open => (open ? <ChevronLeft /> : <MenuRounded />)}>
      {({ screen, collapsed }) => <HeaderContent screen={screen} collapsed={collapsed} />}
    </Header>
    <Nav
      renderIcon={collapsed => (collapsed ? <ChevronRight /> : <ChevronLeft />)}
      header={({ collapsed }) => <NavHeader collapsed={collapsed} />}
    >
      <NavContent />
    </Nav>
    <Content>{children}</Content>
    <Footer>
      <FooterContent />
    </Footer>
  </Root>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
};
export default Layout;
