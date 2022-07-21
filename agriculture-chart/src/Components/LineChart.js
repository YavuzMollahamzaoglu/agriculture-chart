import React from "react";
import { Line } from "react-chartjs-2";
import waterLogo from "../images/waterLogo.svg";

const LineChart = () => {
  const state = {
    labels: ["12:00", "13:00", "14:00", "15:00", "16:00"],
    datasets: [
      {
        label: "Level of Water Per Hour(m)",
        backgroundColor: "blue",
        borderColor: "white",
        pointBackgroundColor: "green",
        borderWidth: 5,
        pointBorderColor: "green",
        data: [7, 6, 8, 6, 10],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      title: {
        text: "Average Level Water Per Hour as Meter",
        display: true,
        fontSize: 20,
      },
    },
  };

  return (
    <div style={{ width: "30%", height: "30%", display: "flex" }}>
      <Line data={state} options={options} />
      <img src={waterLogo} alt="Wind Logo" style={{ width: 70 }} />
    </div>
  );
};

export default LineChart;
