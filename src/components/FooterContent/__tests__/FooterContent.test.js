/* eslint-env jest */

import React from "react";
import { render } from "@testing-library/react";

import FooterContent from "../index";

describe("<FooterContent />", () => {
  it("Should match Snapshot", () => {
    const { asFragment } = render(<FooterContent />);

    expect(asFragment()).toMatchSnapshot();
  });
});