import React from "react";
import { Bar } from "react-chartjs-2";
import windLogo from "../images/windLogo.svg";

const BarChart = () => {
  const state = {
    labels: ["12:00", "13:00", "14:00", "15:00", "16:00"],
    datasets: [
      {
        label: "Wind Speed Per Hour(KM)",
        backgroundColor: "green",
        borderColor: "white",
        borderWidth: 3,
        data: [3, 5, 4, 7, 6],
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
        text: "Average Wind Speed per hour",
        display: true,
        fontSize: 20,
      },
    },
  };

  return (
    <div style={{ width: "30%", height: "30%", display: "flex" }}>
      <Bar data={state} options={options} />
      <img src={windLogo} alt="Wind Logo" style={{ width: 70 }} />
    </div>
  );
};

export default BarChart;
