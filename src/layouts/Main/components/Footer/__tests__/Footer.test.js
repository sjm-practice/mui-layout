/* eslint-env jest */

import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../../../../../theme";

import Footer from "../index";

describe("<Footer />", () => {
  it("Should match Snapshot", () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
