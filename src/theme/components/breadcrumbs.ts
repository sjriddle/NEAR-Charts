

// Material Dashboard 2 PRO React TS Base Styles
import colors from "theme/base/colors";
import typography from "theme/base/typography";

const { grey } = colors;
const { size } = typography;

// types
type Types = any;

const breadcrumbs: Types = {
  styleOverrides: {
    li: {
      lineHeight: 0,
    },

    separator: {
      fontSize: size.sm,
      color: grey[600],
    },
  },
};

export default breadcrumbs;
