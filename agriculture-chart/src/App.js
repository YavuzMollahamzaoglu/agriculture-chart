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
      <p>Wind Speed at 12:00 pm is 3 km/h</p>
      <p>Wind Speed at 13:00 pm is 5 km/h</p>
      <p>Wind Speed at 14:00 pm is 4 km/h</p>
      <p>Wind Speed at 15:00 pm is 7 km/h</p>
      <p>Wind Speed at 12:00 pm is 6 km/h</p>
      <LineChart />
      <p>Water Level at 12:00 pm is 7 </p>
      <p>Water Level at 13:00 pm is 6 km/h</p>
      <p>Water Level at 14:00 pm is 8 km/h</p>
      <p>Water Level at 15:00 pm is 6 km/h</p>
      <p>Water Level at 12:00 pm is 10 km/h</p>
    </div>
  );
}

export default App;
