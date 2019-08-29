import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Typography, Link } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
  },
}));

const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Typography variant="body1">
        &copy;{" "}
        <Link component="a" href="https://avoinsights.com" target="_blank">
          AVO Insights
        </Link>
        . 2019
      </Typography>
      <Typography variant="caption">
        From big initiatives to our SaaS product, we create useful Augmented Reality...
      </Typography>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: null,
};

export default Footer;
