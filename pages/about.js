import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MuiLink from "@material-ui/core/Link";
import ProTip from "../src/components/ProTip";
import Layout from "../src/components/Layout";
import Link from "../src/components/Link";

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
    <Layout>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>
          <Link href="/">Go to the main page</Link>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </Layout>
  );
}
