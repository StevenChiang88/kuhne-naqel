import {
  Button,
  Modal,
  Box,
  Grid,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { GeneralButton } from "../../styles/styled";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
const EditModal = ({
  open,
  handleClose,
  data,
  updateHandler,
  IdDataRefetch,
}) => {
  const [editData, setEditData] = useState({
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

  useEffect(() => {
    setEditData(data);
  }, [data]);

  const trackingIDInputHandler = (e) => {
    setEditData((prev) => ({ ...prev, TrackingID: e.target.value }));
  };
  const customerNameInputHandler = (e) => {
    setEditData((prev) => ({ ...prev, CustomerName: e.target.value }));
  };
  const shipperInputHandler = (e) => {
    setEditData((prev) => ({ ...prev, Shpper: e.target.value }));
  };

  const consigneeInputHandler = (e) => {
    setEditData((prev) => ({ ...prev, Consignee: e.target.value }));
  };
  const incotermInputHandler = (e) => {
    setEditData((prev) => ({ ...prev, Incoterm: e.target.value }));
  };
  const voyageInputHandler = (e) => {
    setEditData((prev) => ({ ...prev, Voyage: e.target.value }));
  };
  const cargoDimensionInputHandler = (e) => {
    setEditData((prev) => ({ ...prev, CargoDimension: e.target.value }));
  };
  const cargoWeightInputHandler = (e) => {
    setEditData((prev) => ({ ...prev, CargoWeight: e.target.value }));
  };
  const POLInputHandler = (e) => {
    setEditData((prev) => ({ ...prev, POL: e.target.value }));
  };
  const PODInputHandler = (e) => {
    setEditData((prev) => ({ ...prev, POD: e.target.value }));
  };

  const sellingRateInputHandler = (e) => {
    setEditData((prev) => ({ ...prev, SellingRate: e.target.value }));
  };
  const buyingRateInputHandler = (e) => {
    setEditData((prev) => ({ ...prev, BuyingRate: e.target.value }));
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            backgroundColor: "background.default",
            padding: "2rem",
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 400,
            transform: "translate(-50%, -50%)",
            display: "flex",
            justifyContent: "center",
            color: "primary.main",
          }}
        >
          <form id="editForm">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <InputLabel>TrackingID</InputLabel>
                <Input
                  disabled={true}
                  onChange={trackingIDInputHandler}
                  type="text"
                  value={editData.TrackingID}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel>CustomerName</InputLabel>

                <Input
                  onChange={customerNameInputHandler}
                  type="text"
                  value={editData.CustomerName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel>Shipper</InputLabel>
                <Input
                  onChange={shipperInputHandler}
                  type="text"
                  value={editData.Shpper}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel>Consignee</InputLabel>

                <Input
                  onChange={consigneeInputHandler}
                  type="text"
                  value={editData.Consignee}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel>Incoterm</InputLabel>
                <Input
                  onChange={incotermInputHandler}
                  value={editData.Incoterm}
                  type="text"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel>Voyage</InputLabel>
                <Input
                  onChange={voyageInputHandler}
                  value={editData.Voyage}
                  type="text"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel>Cargo dimension(cbm)</InputLabel>
                <Input
                  onChange={cargoDimensionInputHandler}
                  value={editData.CargoDimension}
                  type="text"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel>CargoWeightt(kg)</InputLabel>
                <Input
                  onChange={cargoWeightInputHandler}
                  value={editData.CargoWeight}
                  type="number"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel>POL</InputLabel>
                <Input
                  onChange={POLInputHandler}
                  value={editData.POL}
                  type="text"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel>POD</InputLabel>

                <Input
                  onChange={PODInputHandler}
                  value={editData.POD}
                  type="text"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    inputFormat="YYYY/MM/DD"
                    label="ETD"
                    //valueETA是給DatePicker雙向綁定
                    value={editData.ETD}
                    onChange={(newValue) => {
                      setEditData((prev) => ({ ...prev, ETD: newValue }));
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    inputFormat="YYYY/MM/DD"
                    label="ETA"
                    //valueETA是給DatePicker雙向綁定
                    value={editData.ETA}
                    onChange={(newValue) => {
                      //轉換格式後才是真正要的資料
                      setEditData((prev) => ({ ...prev, ETA: newValue }));
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel>SellingRate</InputLabel>
                <Input
                  onChange={sellingRateInputHandler}
                  value={editData.SellingRate}
                  type="number"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel>BuyingRate</InputLabel>
                <Input
                  onChange={buyingRateInputHandler}
                  value={editData.BuyingRate}
                  type="number"
                />
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <GeneralButton
                onClick={() => {
                  console.log(updateHandler);
                  updateHandler(editData);
                  IdDataRefetch();
                }}
              >
                Update
              </GeneralButton>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
export default EditModal;
