import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const state = {
    labels: ["12:00", "13:00", "14:00", "15:00", "16:00"],
    datasets: [
      {
        label: "Wind Speed Per Hour(KM)",
        backgroundColor: "red",
        borderColor: "blue",
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
    <div>
      <Bar data={state} options={options} />
    </div>
  );
};

export default BarChart;
