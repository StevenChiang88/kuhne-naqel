import { Box, ThemeProvider } from "@mui/material";
import React from "react";
import { useContext } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ThemeContext from "../../store/ThemeContext";

const Charts = ({ data }) => {
  //拿到2022資料
  const DataIn2022 = data.data.filter((item) => {
    return new Date(item.attributes.ETD).getFullYear() == 2022;
  });

  const chartData = [];
  //分類好2022每個月
  for (let i = 0; i < 12; i++) {
    const x = DataIn2022.filter((item) => {
      return new Date(item.attributes.ETD).getMonth() == i;
    });
    chartData.push(x);
  }

  console.log("每月資料", chartData);
  const dataForChart = [];

  chartData.forEach((i, index) => {
    let y = {
      month: index + 1,
      BR: 0,
      SR: 0,
    };
    i.forEach((j) => {
      y.BR += j.attributes.BuyingRate;
      y.SR += j.attributes.SellingRate;
    });
    dataForChart.push(y);
  });

  console.log(dataForChart, "test");

  const themeCTX = useContext(ThemeContext);

  return (
    <ThemeProvider theme={themeCTX.muiTheme}>
      <Box>
        <BarChart width={700} height={260} data={dataForChart}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            stroke={themeCTX.muiTheme.palette.primary.main}
          >
            <Label
              value="months for 2022"
              offset={0}
              position="insideBottom"
              fill={themeCTX.muiTheme.palette.primary.main}
            />
          </XAxis>
          <YAxis stroke={themeCTX.muiTheme.palette.primary.main} />
          <Tooltip />
          <Legend verticalAlign="top" />
          <Bar dataKey="BR" fill="#8884d8" />
          <Bar dataKey="SR" fill="#82ca9d" />
        </BarChart>
        <Box sx={{ marginTop: "1.5rem" }}>
          <AreaChart width={700} height={260} data={dataForChart}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="month"
              stroke={themeCTX.muiTheme.palette.primary.main}
            >
              <Label
                value="months for 2022"
                offset={0}
                position="insideBottom"
                fill={themeCTX.muiTheme.palette.primary.main}
              />
            </XAxis>
            <YAxis stroke={themeCTX.muiTheme.palette.primary.main} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="BR"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="SR"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Charts;
