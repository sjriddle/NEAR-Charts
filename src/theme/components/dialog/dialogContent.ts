

// Material Dashboard 2 PRO React TS Base Styles
import borders from "theme/base/borders";
import colors from "theme/base/colors";
import typography from "theme/base/typography";

// Material Dashboard 2 PRO React TS Helper Functions
import pxToRem from "theme/functions/pxToRem";
import rgba from "theme/functions/rgba";

const { size } = typography;
const { white } = colors;
const { borderWidth, borderColor } = borders;

// types
type Types = any;

const dialogContent: Types = {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.md,
      color: rgba(white.main, 0.8),
    },

    dividers: {
      borderTop: `${borderWidth[1]} solid ${rgba(borderColor, 0.6)}`,
      borderBottom: `${borderWidth[1]} solid ${rgba(borderColor, 0.6)}`,
    },
  },
};

export default dialogContent;
