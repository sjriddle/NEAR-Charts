

import { TypographyProps } from "@mui/material";
import MDTypographyRoot from "components/MDTypography/MDTypographyRoot";
import { FC, forwardRef, ReactNode } from "react";

interface Props extends TypographyProps {
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "light"
    | "dark"
    | "text"
    | "white";
  fontWeight?: "light" | "regular" | "medium" | "bold" | undefined;
  textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
  verticalAlign?:
    | "unset"
    | "baseline"
    | "sub"
    | "super"
    | "text-top"
    | "text-bottom"
    | "middle"
    | "top"
    | "bottom";
  textGradient?: boolean;
  children: ReactNode;
  opacity?: number;
  [key: string]: any;
}

const MDTypography: FC<Props | any> = forwardRef(
  (
    { color, fontWeight, textTransform, verticalAlign, textGradient, opacity, children, ...rest },
    ref
  ) => {

    return (
      <MDTypographyRoot
        {...rest}
        ref={ref}
        ownerState={{
          color,
          textTransform,
          verticalAlign,
          fontWeight,
          opacity,
          textGradient,
        }}
      >
        {children}
      </MDTypographyRoot>
    );
  }
);

// Declaring default props for MDTypography
MDTypography.defaultProps = {
  color: "dark",
  fontWeight: undefined,
  textTransform: "none",
  verticalAlign: "unset",
  textGradient: false,
  opacity: 1,
};

export default MDTypography;
