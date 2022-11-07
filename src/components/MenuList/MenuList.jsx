import { Box, List, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../store/reducer/authSlice";
import { MenuListItem } from "../../styles/styled";
import "./MenuList.css";
import search from "../../pictures/search.svg";
import Analytics from "../../pictures/Analytics.svg";
import create from "../../pictures/create.svg";
import ListLogo from "../../pictures/ListLogo.svg";
import Logout from "../../pictures/Logout.svg";
import light from "../../pictures/light.svg";
import dark from "../../pictures/dark.svg";

import ThemeContext from "../../store/ThemeContext";

const MenuList = () => {
  // const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const themeCTX = useContext(ThemeContext);

  return (
    <Box
      boxShadow={2}
      flex={1}
      sx={{
        backgroundColor: "#1B70BB",
        position: "relative",
      }}
    >
      <List sx={{ position: "sticky", top: 0, height: "100vh" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
            Kuhnel-naqel
          </Typography>

          <MenuListItem>
            <img className="ListLogo" src={create} alt="create" />
            <NavLink end to="/" className="Navlink">
              CreateShipment
            </NavLink>
          </MenuListItem>

          <MenuListItem>
            <img className="ListLogo" src={search} alt="search" />

            <NavLink to="/shipmentsearch" className="Navlink">
              ShipmentSearch
            </NavLink>
          </MenuListItem>
          <MenuListItem>
            <img className="ListLogo" src={ListLogo} alt="ListLogo" />

            <NavLink to="/shipmentlist" className="Navlink">
              ShipmentList
            </NavLink>
          </MenuListItem>
          <MenuListItem>
            <img className="ListLogo" src={Analytics} alt="Analytics" />

            <NavLink to="/analytics" className="Navlink">
              Analytics
            </NavLink>
          </MenuListItem>
          <MenuListItem>
            {themeCTX.muiTheme.palette.mode === "light" ? (
              <img className="ListLogo" src={light} alt="lightLogo" />
            ) : (
              <img className="ListLogo" src={dark} alt="darkLogo" />
            )}
            <p
              style={{ cursor: "pointer" }}
              onClick={() => {
                themeCTX.ThemeHandler();
              }}
            >
              mode
            </p>
          </MenuListItem>

          <MenuListItem onClick={() => dispatch(logout())}>
            <img className="ListLogo" src={Logout} alt="LogoutLogo" />

            <Typography sx={{ cursor: "pointer" }}> logout</Typography>
          </MenuListItem>
        </Box>
      </List>
    </Box>
  );
};

export default MenuList;
 