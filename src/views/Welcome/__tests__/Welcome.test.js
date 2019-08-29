/* eslint-env jest */

import React from "react";
import { render } from "@testing-library/react";

import Welcome from "../index";

describe("With React Testing Library", () => {
  it('Should show "Welcome!!"', () => {
    const { getByText } = render(<Welcome />);

    expect(getByText("Welcome!!")).not.toBeNull();
  });
});

describe("With React Testing Library Snapshot", () => {
  it("Should match Snapshot", () => {
    const { asFragment } = render(<Welcome />);

    expect(asFragment()).toMatchSnapshot();
  });
});
