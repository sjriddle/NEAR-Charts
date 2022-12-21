

// Material Dashboard 2 PRO React TS Base Styles
import borders from "theme/base/borders";
import colors from "theme/base/colors";

// Material Dashboard 2 PRO React TS Helper Functions
import pxToRem from "theme/functions/pxToRem";

const { background } = colors;
const { borderRadius } = borders;

// types
type Types = any;

const sidenav: Types = {
  styleOverrides: {
    root: {
      width: pxToRem(250),
      whiteSpace: "nowrap",
      border: "none",
    },

    paper: {
      width: pxToRem(250),
      backgroundColor: background.sidenav,
      height: `calc(100vh - ${pxToRem(32)})`,
      margin: pxToRem(16),
      borderRadius: borderRadius.xl,
      border: "none",
    },

    paperAnchorDockedLeft: {
      borderRight: "none",
    },
  },
};

export default sidenav;
