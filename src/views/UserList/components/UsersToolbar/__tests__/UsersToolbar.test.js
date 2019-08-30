/* eslint-env jest */

import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../../../../../theme";

import UsersToolbar from "../index";

describe("<UsersToolbar />", () => {
  it("Should match Snapshot", () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <UsersToolbar />
      </ThemeProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
