

// Material Dashboard 2 PRO React TS Base Styles
import borders from "theme/base/borders";
import boxShadows from "theme/base/boxShadows";
import colors from "theme/base/colors";

// Material Dashboard 2 PRO React Helper Function
import rgba from "theme/functions/rgba";

const { black, background } = colors;
const { borderWidth, borderRadius } = borders;
const { md } = boxShadows;

// types
type Types = any;

const card: Types = {
  styleOverrides: {
    root: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      minWidth: 0,
      wordWrap: "break-word",
      backgroundImage: "none",
      backgroundColor: background.card,
      backgroundClip: "border-box",
      border: `${borderWidth[0]} solid ${rgba(black.main, 0.125)}`,
      borderRadius: borderRadius.xl,
      boxShadow: md,
      overflow: "visible",
    },
  },
};

export default card;
