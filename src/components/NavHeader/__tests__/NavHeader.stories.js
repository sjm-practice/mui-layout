import React from "react";
import { storiesOf } from "@storybook/react";
import NavHeader from "../index";

storiesOf("Components/Layout/NavHeader", module)
  .add("collapsed", () => <NavHeader collapsed />)
  .add("not collapsed", () => <NavHeader />);
