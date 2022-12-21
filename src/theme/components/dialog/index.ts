

// Material Dashboard 2 PRO React TS Base Styles
import borders from "theme/base/borders";
import boxShadows from "theme/base/boxShadows";

const { borderRadius } = borders;
const { xxl } = boxShadows;

// types
type Types = any;

const dialog: Types = {
  styleOverrides: {
    paper: {
      borderRadius: borderRadius.lg,
      boxShadow: xxl,
    },

    paperFullScreen: {
      borderRadius: 0,
    },
  },
};

export default dialog;
