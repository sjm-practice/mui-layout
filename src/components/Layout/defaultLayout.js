// use object pattern in each field of config
// if you want to use different value in each screen
// xs: <600px
// sm: 600-959px
// md: 960-1279px
// lg: 1280-1919px
// xl: >=1920
// e.g.:  initialAdjustmentHeight: { xs: 56, sm: 64 }, // number | object (toolbar's height in xs is 56px)

export default {
  navWidth: 256, // number | object
  navAnchor: "left",
  navVariant: "temporary", // string | object
  collapsible: false, // boolean | object
  collapsedWidth: 64, // number | object
  collapsedBreakpoint: "md", // one of ['sm', 'md', 'lg']
  autoCollapsedDisabled: false,
  clipped: false, // boolean | object
  heightAdjustmentDisabled: false,
  initialAdjustmentHeight: { xs: 56, sm: 64 }, // number | object (toolbar's height in xs is 56px)
  heightAdjustmentSpeed: 144, // number(ms)
  headerPosition: "relative", // one of ['static', 'relative', 'sticky', 'fixed', 'absolute', 'fixed'] | object
  squeezed: false, // boolean | object
  footerShrink: true, // boolean | object};
};
