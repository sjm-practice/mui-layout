import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import NavHeader from "../index";

storiesOf("Components/Layout", module)
  .addDecorator(withKnobs)
  .add("NavHeader", () => <NavHeader collapsed={boolean("collapsed", false)} />);
