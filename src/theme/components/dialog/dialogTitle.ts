

// Material Dashboard 2 PRO React TS Base Styles
import typography from "theme/base/typography";

// Material Dashboard 2 PRO React TS Helper Functions
import pxToRem from "theme/functions/pxToRem";

const { size } = typography;

// types
type Types = any;

const dialogTitle: Types = {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.xl,
    },
  },
};

export default dialogTitle;
