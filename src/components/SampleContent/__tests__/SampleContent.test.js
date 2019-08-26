/* eslint-env jest */

import React from "react";
import { render } from "@testing-library/react";

import SampleContent from "../index";

describe("<SampleContent />", () => {
  it("Should match Snapshot", () => {
    const { asFragment } = render(<SampleContent />);

    expect(asFragment()).toMatchSnapshot();
  });
});
