/* eslint-env jest */

import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../../../../../theme";
import userData from "../../../data";

import UsersTable from "../index";

describe("<UsersTable />", () => {
  it("Should match Snapshot", () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <UsersTable users={userData} />
      </ThemeProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
