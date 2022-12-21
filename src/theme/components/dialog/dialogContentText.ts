

// Material Dashboard 2 PRO React TS Base Styles
import colors from "theme/base/colors";
import typography from "theme/base/typography";

// Material Dashboard 2 PRO React TS Helper Functions
import rgba from "theme/functions/rgba";

const { size } = typography;
const { white } = colors;

// types
type Types = any;

const dialogContentText: Types = {
  styleOverrides: {
    root: {
      fontSize: size.md,
      color: rgba(white.main, 0.8),
    },
  },
};

export default dialogContentText;
