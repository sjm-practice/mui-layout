/* eslint-env jest */

import React from "react";
import { render } from "@testing-library/react";

import HeaderContent from "../index";

describe("<HeaderContent />", () => {
  it("Should match Snapshot - screen 'xs'", () => {
    const { asFragment } = render(<HeaderContent screen="xs" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("Should match Snapshot - screen 'sm'", () => {
    const { asFragment } = render(<HeaderContent screen="sm" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("Should match Snapshot - screen 'md'", () => {
    const { asFragment } = render(<HeaderContent screen="md" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
