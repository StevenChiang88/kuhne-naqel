import {
  TextField,
  Box,
  Input,
  Typography,
  Grid,
  InputLabel,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import MenuList from "../../components/MenuList/MenuList";
import { useAddShipmentMutation } from "../../store/shipmentApi";
import { GeneralButton } from "../../styles/styled";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
const CreateShipmentPage = () => {
  const result = useAddShipmentMutation();
  const [addShipment, { isError }] = useAddShipmentMutation();

  //valueETA, ETD是給mui的datePicker做雙向綁定
  const [valueETA, setValueETA] = useState(null);
  const [valueETD, setValueETD] = useState(null);

  const [inputData, setInputData] = useState({
    TrackingID: "",
    CustomerName: "",
    Shpper: "",
    Consignee: "",
    Incoterm: "",
    Voyage: "",
    CargoDimension: "",
    CargoWeight: "",
    POL: "",
    POD: "",
    ETD: "",
    ETA: "",
    SellingRate: "",
    BuyingRate: "",
  });

  const trackingIDInputHandler = (e) => {
    setInputData((prev) => ({ ...prev, TrackingID: e.target.value }));
  };
  const customerNameInputHandler = (e) => {
    setInputData((prev) => ({ ...prev, CustomerName: e.target.value }));
  };
  const shipperInputHandler = (e) => {
    setInputData((prev) => ({ ...prev, Shpper: e.target.value }));
  };

  const consigneeInputHandler = (e) => {
    setInputData((prev) => ({ ...prev, Consignee: e.target.value }));
  };
  const incotermInputHandler = (e) => {
    setInputData((prev) => ({ ...prev, Incoterm: e.target.value }));
  };
  const voyageInputHandler = (e) => {
    setInputData((prev) => ({ ...prev, Voyage: e.target.value }));
  };
  const cargoDimensionInputHandler = (e) => {
    setInputData((prev) => ({ ...prev, CargoDimension: e.target.value }));
  };
  const cargoWeightInputHandler = (e) => {
    setInputData((prev) => ({ ...prev, CargoWeight: e.target.value }));
  };
  const POLInputHandler = (e) => {
    setInputData((prev) => ({ ...prev, POL: e.target.value }));
  };
  const PODInputHandler = (e) => {
    setInputData((prev) => ({ ...prev, POD: e.target.value }));
  };

  // 這兩個handler是給原生input才能用
  // const ETDInputHandler = (e) => {
  //   setInputData((prev) => ({ ...prev, ETD: e.target.value }));
  // };
  // const ETAInputHandler = (e) => {
  //   setInputData((prev) => ({ ...prev, ETA: e.target.value }));

  // };
  const sellingRateInputHandler = (e) => {
    setInputData((prev) => ({ ...prev, SellingRate: e.target.value }));
  };
  const buyingRateInputHandler = (e) => {
    setInputData((prev) => ({ ...prev, BuyingRate: e.target.value }));
  };

  const submitHandler = () => {
    console.log(inputData);
    addShipment(inputData).then((res) => {
      if (!res.error) {
        alert("新增成功");
      } else {
        alert(res.error.data.error.message);
      }
    });
    setInputData({
      TrackingID: "",
      CustomerName: "",
      Shpper: "",
      Consignee: "",
      Incoterm: "",
      Voyage: "",
      CargoDimension: "",
      CargoWeight: "",
      POL: "",
      POD: "",
      ETD: "",
      ETA: "",
      SellingRate: "",
      BuyingRate: "",
    });
    // isError === false ? alert("新增成功") : alert("新增失敗");
  };
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "background.default",
      }}
    >
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
        <Box sx={{ padding: "5rem" }}>
          <form id="shipmentsForm">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Input
                  required
                  onChange={trackingIDInputHandler}
                  value={inputData.TrackingID}
                  type="text"
                  placeholder="Tracking ID"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Input
                  required
                  onChange={customerNameInputHandler}
                  value={inputData.CustomerName}
                  type="text"
                  placeholder="Customer Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Input
                  required
                  onChange={shipperInputHandler}
                  value={inputData.Shpper}
                  type="text"
                  placeholder="Shipper"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Input
                  required
                  onChange={consigneeInputHandler}
                  value={inputData.Consignee}
                  type="text"
                  placeholder="Consignee"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Input
                  required
                  onChange={incotermInputHandler}
                  value={inputData.Incoterm}
                  type="text"
                  placeholder="Incoterm"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Input
                  required
                  onChange={voyageInputHandler}
                  value={inputData.Voyage}
                  type="text"
                  placeholder="Voyage"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Input
                  required
                  onChange={cargoDimensionInputHandler}
                  value={inputData.CargoDimension}
                  type="text"
                  placeholder="Cargo dimension(cbm)"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Input
                  required
                  onChange={cargoWeightInputHandler}
                  value={inputData.CargoWeight}
                  type="number"
                  placeholder="Cargo Weight(kg)"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Input
                  required
                  onChange={POLInputHandler}
                  value={inputData.POL}
                  type="text"
                  placeholder="POL"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Input
                  required
                  onChange={PODInputHandler}
                  value={inputData.POD}
                  type="text"
                  placeholder="POD"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    // inputFormat="YYYY/MM/DD"  不知為何會少一天
                    label="ETD"
                    //valueETA是給DatePicker雙向綁定
                    value={valueETD}
                    onChange={(newValue) => {
                      console.log(newValue);
                      //轉換格式後才是真正要的資料
                      const x = newValue.format("YYYY-MM-DD");
                      setInputData((prev) => ({ ...prev, ETD: x }));
                      setValueETD(x);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="ETA"
                    //valueETA是給DatePicker雙向綁定
                    value={valueETA}
                    onChange={(newValue) => {
                      //轉換格式後才是真正要的資料
                      const y = newValue.format("YYYY-MM-DD");
                      setInputData((prev) => ({ ...prev, ETA: y }));
                      setValueETA(y);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Input
                  required={true}
                  onChange={sellingRateInputHandler}
                  value={inputData.SellingRate}
                  type="number"
                  placeholder="Selling Rate"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Input
                  required={true}
                  onChange={buyingRateInputHandler}
                  value={inputData.BuyingRate}
                  type="number"
                  placeholder="Buying Rate"
                />
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <GeneralButton onClick={submitHandler}>
                Create Shipment
              </GeneralButton>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateShipmentPage;
