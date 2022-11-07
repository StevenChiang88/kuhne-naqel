import { Box, Card, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import Charts from "../../components/Charts/Charts";
import MenuList from "../../components/MenuList/MenuList";
import { useGetShipmentsQuery } from "../../store/shipmentApi";
const Analytics = () => {
  const totalData = {};
  const { data, isSuccess } = useGetShipmentsQuery();
  if (isSuccess === true) {
    let TotalSellingRate2021 = 0;
    let TotalBuyingRate2021 = 0;
    let netValue2021 = 0;
    let TotalSellingRate2022 = 0;
    let TotalBuyingRate2022 = 0;
    let netValue2022 = 0;
    // 2021
    const filteredData2021 = data.data.filter((item) => {
      return new Date(item.attributes.ETD).getFullYear() == 2021;
    });
    filteredData2021.forEach((item) => {
      TotalSellingRate2021 += item.attributes.SellingRate;
      TotalBuyingRate2021 += item.attributes.BuyingRate;
    });
    netValue2021 = (
      TotalSellingRate2021 - TotalBuyingRate2021
    ).toLocaleString();
    TotalSellingRate2021 = TotalSellingRate2021.toLocaleString();
    TotalBuyingRate2021 = TotalBuyingRate2021.toLocaleString();

    totalData.data2021 = {
      TotalSellingRate: TotalSellingRate2021,
      TotalBuyingRate: TotalBuyingRate2021,
      netValue: netValue2021,
    };

    //2022
    const filteredData2022 = data.data.filter((item) => {
      return new Date(item.attributes.ETD).getFullYear() == 2022;
    });

    filteredData2022.forEach((item) => {
      TotalSellingRate2022 += item.attributes.SellingRate;
      TotalBuyingRate2022 += item.attributes.BuyingRate;
    });
    netValue2022 = (
      TotalSellingRate2022 - TotalBuyingRate2022
    ).toLocaleString();
    TotalSellingRate2022 = TotalSellingRate2022.toLocaleString();
    TotalBuyingRate2022 = TotalBuyingRate2022.toLocaleString();

    totalData.data2022 = {
      TotalSellingRate: TotalSellingRate2022,
      TotalBuyingRate: TotalBuyingRate2022,
      netValue: netValue2022,
    };
  }

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
          padding: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          overflow: "auto",
        }}
      >
        {totalData.data2021 ? (
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <Card sx={{ padding: "2rem" }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    paddingBottom: "1rem",
                  }}
                >
                  Staticts for 2021
                </Typography>
                <Typography>
                  SellingRate:&nbsp;{totalData.data2021.TotalSellingRate}
                </Typography>
                <Typography>
                  BuyingRate:&nbsp;{totalData.data2021.TotalBuyingRate}
                </Typography>
                <Typography>
                  NetValue:&nbsp;{totalData.data2021.netValue}
                </Typography>
              </Card>

              <Card sx={{ padding: "2rem" }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    paddingBottom: "1rem",
                  }}
                >
                  Staticts for 2022
                </Typography>
                <Typography>
                  SellingRate:&nbsp; {totalData.data2022.TotalSellingRate}
                </Typography>
                <Typography>
                  BuyingRate:&nbsp;{totalData.data2022.TotalBuyingRate}
                </Typography>
                <Typography>
                  NetValue:&nbsp;{totalData.data2022.netValue}
                </Typography>
              </Card>
            </Box>
            <Charts data={data} />
          </Box>
        ) : (
          <p>數據加載中</p>
        )}
      </Box>
    </Box>
  );
};

export default Analytics;
