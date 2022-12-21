

// Material Dashboard 2 PRO React TS Base Styles
import borders from "theme/base/borders";
import boxShadows from "theme/base/boxShadows";
import colors from "theme/base/colors";

const { background } = colors;
const { md } = boxShadows;
const { borderRadius } = borders;

// types
type Types = any;

const tableContainer: Types = {
  styleOverrides: {
    root: {
      backgroundColor: background.card,
      boxShadow: md,
      borderRadius: borderRadius.xl,
    },
  },
};

export default tableContainer;
