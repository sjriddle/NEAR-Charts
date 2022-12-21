

// Material Dashboard 2 PRO React TS Base Styles
import borders from "theme/base/borders";
import boxShadows from "theme/base/boxShadows";
import colors from "theme/base/colors";

// Material Dashboard 2 PRO React TS Helper Functions
import pxToRem from "theme/functions/pxToRem";

const { background } = colors;
const { borderRadius } = borders;
const { md } = boxShadows;

// types
type Types = any;

const tabs: Types = {
  styleOverrides: {
    root: {
      position: "relative",
      backgroundColor: background.card,
      borderRadius: borderRadius.xl,
      minHeight: "unset",
      padding: pxToRem(4),
    },

    flexContainer: {
      height: "100%",
      position: "relative",
      zIndex: 10,
    },

    fixed: {
      overflow: "unset !important",
      overflowX: "unset !important",
    },

    vertical: {
      "& .MuiTabs-indicator": {
        width: "100%",
      },
    },

    indicator: {
      height: "100%",
      borderRadius: borderRadius.lg,
      backgroundColor: background.default,
      boxShadow: md,
      transition: "all 500ms ease",
    },
  },
};

export default tabs;
