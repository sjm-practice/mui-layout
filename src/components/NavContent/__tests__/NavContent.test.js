/* eslint-env jest */

import React from "react";
import { render } from "@testing-library/react";

import NavContent from "../index";

describe("<NavContent />", () => {
  it("Should match Snapshot", () => {
    const { asFragment } = render(<NavContent />);

    expect(asFragment()).toMatchSnapshot();
  });
});
