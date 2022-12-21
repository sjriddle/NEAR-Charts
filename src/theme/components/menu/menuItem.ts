

// Material Dashboard 2 PRO React TS Base Styles
import borders from "theme/base/borders";
import colors from "theme/base/colors";
import typography from "theme/base/typography";

// Material Dashboard 2 PRO React TS Helper Functions
import pxToRem from "theme/functions/pxToRem";
import rgba from "theme/functions/rgba";

const { dark, white } = colors;
const { borderRadius } = borders;
const { size } = typography;

// types
type Types = any;

const menuItem: Types = {
  styleOverrides: {
    root: {
      minWidth: pxToRem(160),
      minHeight: "unset",
      padding: `${pxToRem(4.8)} ${pxToRem(16)}`,
      borderRadius: borderRadius.md,
      fontSize: size.sm,
      color: rgba(white.main, 0.8),
      transition: "background-color 300ms ease, color 300ms ease",

      "&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus": {
        backgroundColor: dark.main,
        color: white.main,
      },
    },
  },
};

export default menuItem;
