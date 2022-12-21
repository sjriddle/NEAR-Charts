

// Material Dashboard 2 PRO React TS Base Styles
import borders from "theme/base/borders";
import colors from "theme/base/colors";
import typography from "theme/base/typography";

// Material Dashboard 2 PRO React TS Helper Functions
import rgba from "theme/functions/rgba";

const { info, inputBorderColor, dark, grey, white } = colors;
const { size } = typography;
const { borderWidth } = borders;

// types
type Types = any;

const input: Types = {
  styleOverrides: {
    root: {
      fontSize: size.sm,
      color: dark.main,

      "&:hover:not(.Mui-disabled):before": {
        borderBottom: `${borderWidth[1]} solid ${rgba(inputBorderColor, 0.6)}`,
      },

      "&:before": {
        borderColor: rgba(inputBorderColor, 0.6),
      },

      "&:after": {
        borderColor: info.main,
      },

      input: {
        color: white.main,

        "&::-webkit-input-placeholder": {
          color: grey[100],
        },
      },
    },
  },
};

export default input;
