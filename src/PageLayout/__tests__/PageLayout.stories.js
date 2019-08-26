import React from "react";
import { storiesOf } from "@storybook/react";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import MenuRounded from "@material-ui/icons/MenuRounded";
import Root from "../../components/Layout/Root";
import Header from "../../components/Layout/Header";
import Nav from "../../components/Layout/Nav";
import Content from "../../components/Layout/Content";
import Footer from "../../components/Layout/Footer";
import HeaderContent from "../../components/HeaderContent";
import FooterContent from "../../components/FooterContent";
import SampleContent from "../../components/SampleContent";
import NavHeader from "../../components/NavHeader";
import NavContent from "../../components/NavContent";
import { createContentBasedLayout } from "../../utils/presets";

storiesOf("Components/Page Layout/", module).add("Content Based", () => (
  <Root config={createContentBasedLayout()}>
    <Header renderMenuIcon={open => (open ? <ChevronLeft /> : <MenuRounded />)}>
      {({ screen, collapsed }) => <HeaderContent screen={screen} collapsed={collapsed} />}
    </Header>
    <Nav
      renderIcon={collapsed => (collapsed ? <ChevronRight /> : <ChevronLeft />)}
      header={({ collapsed }) => <NavHeader collapsed={collapsed} />}
    >
      <NavContent />
    </Nav>
    <Content>
      <SampleContent />
    </Content>
    <Footer>
      <FooterContent />
    </Footer>
  </Root>
));
