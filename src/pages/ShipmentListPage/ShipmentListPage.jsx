import { Box } from "@mui/material";
import Shipments from "../../components/Shipments/Shipments";

import React from "react";
import MenuList from "../../components/MenuList/MenuList";

const ShipmentListPage = () => {

  return (
    <Box sx={{ display: "flex", backgroundColor: "background.default" }}>
      <MenuList />
      <Box
        flex={3}
        sx={{
          padding: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Shipments />
      </Box>
    </Box>
  );
};

export default ShipmentListPage;
