import React from "react";
import { storiesOf } from "@storybook/react";
import Layout from "../index";
import SampleContent from "../../SampleContent";

storiesOf("Components/Page Layout Next", module).add("Layout", () => (
  <Layout>
    <SampleContent />
  </Layout>
));
