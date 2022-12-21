

// Material Dashboard 2 PRO React TS Base Styles
import borders from "theme/base/borders";
import boxShadows from "theme/base/boxShadows";
import colors from "theme/base/colors";

const { transparent } = colors;
const { lg } = boxShadows;
const { borderRadius } = borders;

// types
type Types = any;

const popover: Types = {
  styleOverrides: {
    paper: {
      backgroundColor: transparent.main,
      boxShadow: lg,
      borderRadius: borderRadius.md,
    },
  },
};

export default popover;
