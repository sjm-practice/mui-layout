/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { List, ListItem, Button, colors } from "@material-ui/core";
// import Link from "../../../../../../components/Link";
import Link from "next/link";
import { useRouter } from "next/router";

const useStyles = makeStyles(theme => ({
  root: {},
  item: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    color: colors.blueGrey[800],
    padding: "10px 8px",
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%",
    fontWeight: theme.typography.fontWeightMedium,
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(1),
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    "& $icon": {
      color: theme.palette.primary.main,
    },
  },
}));

// TODO: may not need this. may need the div & style.  ???
// const CustomRouterLink = forwardRef((props, ref) => (
//   <div ref={ref} style={{ flexGrow: 1 }}>
//     <RouterLink {...props} />
//   </div>
// ));
// <Button activeClassName={classes.active} className={classes.button}>

const SidebarNav = props => {
  const { pages, className, ...rest } = props;

  const classes = useStyles();
  const router = useRouter();

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      {pages.map(page => (
        <ListItem className={classes.item} disableGutters key={page.title}>
          <Link href={page.href}>
            <Button
              className={clsx({
                [classes.button]: true,
                [classes.active]: page.href === router.pathname,
              })}
            >
              <div className={classes.icon}>{page.icon}</div>
              {page.title}
            </Button>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string,
      icon: PropTypes.element,
    }),
  ).isRequired,
};

SidebarNav.defaultProps = {
  className: null,
};

export default SidebarNav;
