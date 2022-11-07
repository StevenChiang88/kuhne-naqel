import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, fabClasses } from "@mui/material";
import EditModal from "../EditModal/EditModal";
import {
  useDelShipmentMutation,
  useGetShipmentsQuery,
  useUpdateShipmentMutation,
} from "../../store/shipmentApi";
import { GeneralButton } from "../../styles/styled";

export default function Shipments() {
  const { data, isSuccess, refetch } = useGetShipmentsQuery();
  const [delShipment, { isSuccess: delSuccess }] = useDelShipmentMutation();
  const [updateShipment, { isError: updateError }] =
    useUpdateShipmentMutation();
  // convert data from strapi to fit MUI data table
  const convertedData = [];
  if (isSuccess == true) {
    data.data.map((item) => {
      convertedData.push({ ...item.attributes, id: item.id });
    });
  }
  const delHandler = (id) => {
    delShipment(id);
  };

  const updateHandler = (shipment) => {
    updateShipment(shipment);
    updateError == false ? alert("更新成功") : alert("更新失敗");
    setOpen(false);
  };

  const [open, setOpen] = useState(false);
  const [rowdata, setRowdata] = useState();

  const handleClose = () => setOpen(false);

  const columns = [
    { field: "TrackingID", headerName: "Tracking ID", width: 130 },
    { field: "CustomerName", headerName: "Customer name", width: 130 },
    { field: "Shpper", headerName: "Shipper", width: 130 },
    { field: "Consignee", headerName: "Consignee", width: 130 },
    { field: "Incoterm", sortable: false, headerName: "Incoterm", width: 100 },
    { field: "Voyage", sortable: false, headerName: "Voyage", width: 180 },
    {
      field: "CargoDimension",
      headerName: "CargoDimension",
      type: "number",
      width: 130,
    },
    {
      field: "CargoWeight",
      headerName: "CargoWeight",
      type: "number",
      width: 110,
    },
    { field: "POL", sortable: false, headerName: "POL", width: 80 },
    { field: "POD", sortable: false, headerName: "POD", width: 80 },
    { field: "ETD", headerName: "ETD", width: 100 },
    { field: "ETA", headerName: "ETA", width: 100 },
    {
      field: "SellingRate",
      headerName: "SellingRate",
      type: "number",
      width: 100,
    },
    {
      field: "BuyingRate",
      headerName: "BuyingRate",
      type: "number",
      width: 100,
    },
    {
      field: "Delete",
      headerName: "Delete",
      sortable: false,
      width: 80,
      renderCell: (row) => {
        return (
          <GeneralButton
            onClick={() => {
              delHandler(row.row.id);
            }}
          >
            Delete
          </GeneralButton>
        );
      },
    },

    {
      field: "Edit",
      headerName: "Edit",
      sortable: false,
      width: 80,
      renderCell: (row) => {
        return (
          <GeneralButton
            onClick={() => {
              setOpen(true);
              setRowdata(row.row);
            }}
          >
            Edit
          </GeneralButton>
        );
      },
    },
  ];
  return isSuccess == true ? (
    <div style={{ height: 400, width: "100%" }}>
      <GeneralButton
        onClick={() => {
          refetch();
        }}
      >
        更新資料
      </GeneralButton>
      <DataGrid
        rows={convertedData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowId={(row) => row.id}
      />
      {rowdata ? (
        <EditModal
          open={open}
          handleClose={handleClose}
          data={rowdata}
          setOpen={setOpen}
          updateHandler={updateHandler}
        />
      ) : null}
    </div>
  ) : (
    <p>數據加載中</p>
  );
}
