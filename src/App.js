import { Box, ThemeProvider } from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Analytics from "./pages/AnalyticsPage/Analytics";
import CreateShipmentPage from "./pages/CreateShipmentPage/CreateShipmentPage";
import LogingPage from "./pages/LoginPage/LoginPage";
import ShipmentListPage from "./pages/ShipmentListPage/ShipmentListPage";
import ShipmentSearchPage from "./pages/ShipmentSearchPage/ShipmentSearchPage";
import ThemeContext from "./store/ThemeContext";
import { LightTheme, DarkTheme } from "./styles/Muitheme";

function App() {
  const auth = useSelector((state) => state.auth);
  const [muiTheme, setMuiTheme] = useState(LightTheme);
  const ThemeHandler = () => {
    setMuiTheme(muiTheme === LightTheme ? DarkTheme : LightTheme);
  };
  return (
    <ThemeContext.Provider value={{ ThemeHandler, muiTheme }}>
      <ThemeProvider theme={muiTheme}>
        <Box sx={{ height: "100vh", backgroundColor: "background.default" }}>
          <Routes>
            <Route
              path="/"
              element={
                auth.isLogged ? (
                  <CreateShipmentPage />
                ) : (
                  <Navigate to={"/login"} replace />
                )
              }
            />
            <Route
              path="shipmentsearch"
              element={
                auth.isLogged ? (
                  <ShipmentSearchPage />
                ) : (
                  <Navigate to={"/login"} replace />
                )
              }
            />
            <Route
              path="shipmentlist"
              element={
                auth.isLogged ? (
                  <ShipmentListPage />
                ) : (
                  <Navigate to={"/login"} replace />
                )
              }
            />
            <Route
              path="analytics"
              element={
                auth.isLogged ? (
                  <Analytics />
                ) : (
                  <Navigate to={"/login"} replace />
                )
              }
            />
            <Route path="login" element={<LogingPage />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
