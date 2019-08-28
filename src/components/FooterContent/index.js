import React from "react";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import MuiLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <MuiLink color="inherit" href="https://www.google.com">
        COMPANY_NAME
      </MuiLink>
      {` ${new Date().getFullYear()} .`}
    </Typography>
  );
}

const FooterContent = () => (
  <div style={{ maxWidth: 700, margin: "auto", textAlign: "center" }}>
    <Copyright />
    <Divider style={{ margin: "24px auto", width: 60 }} />
    <Grid container justify="center" spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Typography align="center" gutterBottom color="textSecondary">
          About
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography align="center" gutterBottom color="textSecondary">
          Terms & Conditions
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography align="center" gutterBottom color="textSecondary">
          Contact us
        </Typography>
      </Grid>
    </Grid>
  </div>
);

export default FooterContent;
