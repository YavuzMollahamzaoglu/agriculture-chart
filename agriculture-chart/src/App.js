import React from "react";
import BarChart from "./Components/BarChart";
import { Chart, registerables } from "chart.js";
import "./App.css";
import LineChart from "./Components/LineChart";

Chart.register(...registerables);

function App() {
  return (
    <div className="App">
      <BarChart />
      <li>Wind Speed at 12:00 pm is 3 km/h</li>
      <li>Wind Speed at 13:00 pm is 5 km/h</li>
      <li>Wind Speed at 14:00 pm is 4 km/h</li>
      <li>Wind Speed at 15:00 pm is 7 km/h</li>
      <li>Wind Speed at 12:00 pm is 6 km/h</li>
      <LineChart />
      <li>Water Level at 12:00 pm is 7 meter</li>
      <li>Water Level at 13:00 pm is 6 meter</li>
      <li>Water Level at 14:00 pm is 8 meter</li>
      <li>Water Level at 15:00 pm is 6 meter</li>
      <li>Water Level at 12:00 pm is 10 meter</li>
    </div>
  );
}

export default App;
