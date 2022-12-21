/* eslint-disable react/default-props-match-prop-types */
import { ReactNode } from "react";

import { SnackbarProps } from "@mui/material";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";

import MDBox from "components/MDBox";
import MDSnackbarIconRoot from "components/MDSnackbar/MDSnackbarIconRoot";
import MDTypography from "components/MDTypography";
import colors from "theme/base/colors";

interface Props extends SnackbarProps {
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "dark" | "light";
  icon: ReactNode;
  title: string;
  dateTime: string;
  content: string;
  close: () => void;
  bgWhite?: boolean;
  [key: string]: any;
}

function MDSnackbar({
  color,
  icon,
  title,
  dateTime,
  content,
  close,
  bgWhite,
  ...rest
}: Props): JSX.Element {

  let titleColor: any;
  let dateTimeColor: any;
  let dividerColor: any;

  if (bgWhite) {
    titleColor = color;
    dateTimeColor = "dark";
    dividerColor = false;
  } else if (color === "light") {
    titleColor = "dark";
    dateTimeColor = "text";
    dividerColor = false;
  } else {
    titleColor = "white";
    dateTimeColor = "white";
    dividerColor = true;
  }

  return (
    <Snackbar
      TransitionComponent={Fade}
      autoHideDuration={5000}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      {...rest}
      action={
        <IconButton size="small" aria-label="close" color="inherit" onClick={close}>
          <Icon fontSize="small">close</Icon>
        </IconButton>
      }
    >
      <MDBox
        variant={bgWhite ? "contained" : "gradient"}
        bgColor={bgWhite ? "white" : color}
        minWidth="21.875rem"
        maxWidth="100%"
        shadow="md"
        borderRadius="md"
        p={1}
        sx={{
          backgroundColor: colors.background.card

        }}
      >
        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          color="dark"
          p={1.5}
        >
          <MDBox display="flex" alignItems="center" lineHeight={0}>
            <MDSnackbarIconRoot fontSize="small" ownerState={{ color, bgWhite }}>
              {icon}
            </MDSnackbarIconRoot>
            <MDTypography
              variant="button"
              fontWeight="medium"
              color={titleColor}
              textGradient={bgWhite}
            >
              {title}
            </MDTypography>
          </MDBox>
          <MDBox display="flex" alignItems="center" lineHeight={0}>
            <MDTypography variant="caption" color={dateTimeColor}>
              {dateTime}
            </MDTypography>
            <Icon
              sx={{
                color: colors.white.main,
                fontWeight: ({ typography: { fontWeightBold } }) => fontWeightBold,
                cursor: "pointer",
                marginLeft: 2,
                transform: "translateY(-1px)",
              }}
              onClick={close}
            >
              close
            </Icon>
          </MDBox>
        </MDBox>
        <Divider sx={{ margin: 0 }} light={dividerColor} />
        <MDBox
          p={1.5}
          sx={{
            fontSize: ({ typography: { size } }) => size.sm,
            color: colors.white.main,
          }}
        >
          {content}
        </MDBox>
      </MDBox>
    </Snackbar>
  );
}

// Setting default values for the props of MDSnackbar
MDSnackbar.defaultProps = {
  bgWhite: false,
  color: "info",
};

export default MDSnackbar;
