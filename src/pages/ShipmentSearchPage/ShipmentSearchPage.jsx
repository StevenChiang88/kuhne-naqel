import { Search } from "@mui/icons-material";
import { Box, Typography, Input } from "@mui/material";
import React, { useState, useEffect } from "react";
import MenuList from "../../components/MenuList/MenuList";
import ShipmentDetail from "../../components/ShipmentDetail/ShipmentDetail";
import {
  useGetShipmentsQuery,
  useUpdateShipmentMutation,
} from "../../store/shipmentApi";

const ShipmentSearchPage = () => {
  const [updateShipment, { error: updateError }] = useUpdateShipmentMutation();

  const { data } = useGetShipmentsQuery();

  const [open, setOpen] = useState(false);
  const [inputKeyword, setInputKeyword] = useState("");
  const [filteredData, setFilteredData] = useState();

  const filterHandler = () => {
    const NEW = data.data.filter((item) => {
      return item.attributes.TrackingID == inputKeyword;
    });

    if (NEW.length === 1) {
      const dataForEdit = {
        id: NEW[0].id,
        TrackingID: NEW[0].attributes.TrackingID,
        CustomerName: NEW[0].attributes.CustomerName,
        Shpper: NEW[0].attributes.Shpper,
        Consignee: NEW[0].attributes.Consignee,
        Incoterm: NEW[0].attributes.Incoterm,
        Voyage: NEW[0].attributes.Voyage,
        CargoDimension: NEW[0].attributes.CargoDimension,
        CargoWeight: NEW[0].attributes.CargoWeight,
        POL: NEW[0].attributes.POL,
        POD: NEW[0].attributes.POD,
        ETD: NEW[0].attributes.ETD,
        ETA: NEW[0].attributes.ETA,
        SellingRate: NEW[0].attributes.SellingRate,
        BuyingRate: NEW[0].attributes.BuyingRate,
      };
      setFilteredData(dataForEdit);
    } else {
      alert("資料不存在");
    }
  };

  const updateHandler = (shipment) => {
    updateShipment(shipment);
    !updateError ? alert("更新成功") : alert("更新失敗");

    setOpen(false);
  };

  const inputHandler = (e) => {
    setInputKeyword(e.target.value);
  };

  return (
    <Box display="flex" sx={{ backgroundColor: "background.default" }}>
      <MenuList />
      <Box
        flex={3}
        sx={{
          padding: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            padding: "5rem",
            display: "flex",
            flexDirection: "column",
            minWidth: "500px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "primary.main",
                fontWeight: "bold",
                marginRight: "1rem",
              }}
            >
              Tracking ID :
            </Typography>
            <Input
              sx={{ width: "60%" }}
              type="text"
              value={inputKeyword}
              placeholder="Searching for Tracking ID"
              onChange={inputHandler}
            />
            <Search
              sx={{
                color: "primary.main",
                cursor: "pointer",
                width: "40px",
                height: "40px",
                marginLeft: "10px",
              }}
              onClick={filterHandler}
            />
          </Box>
          <Box>
            {filteredData ? (
              <ShipmentDetail
                filteredData={filteredData}
                setFilteredData={setFilteredData}
                updateHandler={updateHandler}
                setOpen={setOpen}
                open={open}
              />
            ) : null}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ShipmentSearchPage;
