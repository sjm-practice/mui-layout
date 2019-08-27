import React from "react";
import { storiesOf } from "@storybook/react";
import Layout from "../index";

storiesOf("Components/Page Layout Next", module).add("Layout", () => (
  <Layout>
    <div>
      <h1>Sample Layout</h1>
    </div>
  </Layout>
));
