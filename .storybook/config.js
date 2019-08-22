import { configure, addDecorator, addParameters } from "@storybook/react";
import React, { Fragment } from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from "@material-ui/styles";
import theme from "../src/theme";

addParameters({
  backgrounds: [
    { name: 'dark green', value: 'darkgreen' },
    { name: "light steel blue", value: "lightsteelblue" },
  ],
  viewport: { viewports: INITIAL_VIEWPORTS },
});

const themeDecorator = storyFn => (
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      {storyFn()}
    </ThemeProvider>
  </>
);

const req = require.context("../src", true, /__tests__\/.*.stories.jsx?/);

function loadStories() {
  addDecorator(themeDecorator);
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
