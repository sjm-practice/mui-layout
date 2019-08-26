/* eslint-env jest */

import React from "react";
import { render } from "@testing-library/react";

import FooterContent from "../index";

describe("With React Testing Library", () => {
  it.skip('Should show "Welcome!!"', () => {
    const { getByText } = render(<FooterContent />);

    expect(getByText("Welcome!!")).not.toBeNull();
  });
});

describe("With React Testing Library Snapshot", () => {
  it.skip("Should match Snapshot", () => {
    const { asFragment } = render(<FooterContent />);

    expect(asFragment()).toMatchSnapshot();
  });
});
