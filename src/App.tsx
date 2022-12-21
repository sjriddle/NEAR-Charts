

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { JSXElementConstructor, Key, ReactElement, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import routes from "routes";
import theme from "theme";

export default function App() {
  const { pathname } = useLocation();


  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes: any[]): any =>
    allRoutes.map(
      (route: {
        collapse: any;
        route: string;
        component: ReactElement<any, string | JSXElementConstructor<any>>;
        key: Key;
      }) => {
        if (route.collapse) {
          return getRoutes(route.collapse);
        }

        if (route.route) {
          return <Route path={route.route} element={route.component} key={route.key} />;
        }

        return null;
      }
    );


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Routes>
          {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/dashboards/analytics" />} />
      </Routes>
    </ThemeProvider>
  );
}
