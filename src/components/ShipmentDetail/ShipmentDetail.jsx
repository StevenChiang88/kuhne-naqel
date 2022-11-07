import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useGetShipmentByIdQuery } from "../../store/shipmentApi";
import { GeneralButton } from "../../styles/styled";
import EditModal from "../EditModal/EditModal";

const ShipmentDetail = ({ filteredData, updateHandler, setOpen, open }) => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { data: IdData, refetch: IdDataRefetch } = useGetShipmentByIdQuery(
    filteredData.id
  );
  console.log(filteredData.id);
  return (
    <>
      {IdData && (
        <Box sx={{ color: "primary.main" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography>TrackingID</Typography>
              <Typography>{IdData.data.attributes.TrackingID}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>Customer Name</Typography>
              <Typography>{IdData.data.attributes.CustomerName}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>Shipper</Typography>
              <Typography>{IdData.data.attributes.Shpper}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>Consignee</Typography>
              <Typography>{IdData.data.attributes.Consignee}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>Incoterm</Typography>
              <Typography>{IdData.data.attributes.Incoterm}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>Voyage</Typography>
              <Typography>{IdData.data.attributes.Voyage}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>CargoDimension</Typography>
              <Typography>{IdData.data.attributes.CargoDimension}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>CargoWeight</Typography>
              <Typography>{IdData.data.attributes.CargoWeight}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>POL</Typography>
              <Typography>{IdData.data.attributes.POL}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>POD</Typography>
              <Typography>{IdData.data.attributes.POD}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>ETD</Typography>
              <Typography>{IdData.data.attributes.ETD}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>ETA</Typography>
              <Typography>{IdData.data.attributes.ETA}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>SellingRate</Typography>
              <Typography>{IdData.data.attributes.SellingRate}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>BuyingRate</Typography>
              <Typography>{IdData.data.attributes.BuyingRate}</Typography>
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <GeneralButton onClick={handleOpen}>Edit</GeneralButton>
          </Box>

          {filteredData.length == 0 ? null : (
            <EditModal
              open={open}
              handleClose={handleClose}
              data={filteredData}
              setOpen={setOpen}
              updateHandler={updateHandler}
              IdDataRefetch={IdDataRefetch}
            />
          )}
        </Box>
      )}
    </>
  );
};

export default ShipmentDetail;
