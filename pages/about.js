import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MuiLink from "@material-ui/core/Link";

import { Main as MainLayout } from "../src/layouts";
import ProTip from "../src/components/ProTip";
import AnchorLink from "../src/components/AnchorLink";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MuiLink>{" "}
      {new Date().getFullYear()}
      {". Built with "}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Material-UI.
      </MuiLink>
    </Typography>
  );
}

export default function About() {
  return (
    <MainLayout>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>
          <AnchorLink href="/">Go to the main page</AnchorLink>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </MainLayout>
  );
}
