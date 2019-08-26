/* eslint-env jest */

import React from "react";
import { render } from "@testing-library/react";

import NavHeader from "../index";

describe("<NavHeader />", () => {
  it("Should match Snapshot - collapsed", () => {
    const { asFragment } = render(<NavHeader collapsed />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("Should match Snapshot - not collapsed", () => {
    const { asFragment } = render(<NavHeader />);

    expect(asFragment()).toMatchSnapshot();
  });
});
