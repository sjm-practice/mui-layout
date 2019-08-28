import React from "react";
import { storiesOf } from "@storybook/react";
import HeaderContent from "../index";

storiesOf("Components/Layout/HeaderContent", module)
  .add("xs", () => <HeaderContent screen="xs" />)
  .add("sm (and up)", () => <HeaderContent screen="sm" />);
