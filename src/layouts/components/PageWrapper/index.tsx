

import MDBox from "components/MDBox";
import { useLocation } from "react-router-dom";
import colors from "theme/base/colors";

function PageLayout({ children }: any): JSX.Element {
    const { pathname } = useLocation();
    const background = colors.background.default;

  return (
    <MDBox
      width="100vw"
      height="100%"
      minHeight="100vh"
      bgColor={background}
      sx={{ overflowX: "hidden" }}
    >
      {children}
    </MDBox>
  );
}

// Declaring default props for PageLayout
PageLayout.defaultProps = {
  background: "default",
};

export default PageLayout;
