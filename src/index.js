import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WeatherSearch from "./WeatherSearch";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
    </div>
    <footer>
      <a href="https://github.com/alenak26/weather_react"> Open-sorce code</a>{" "}
      by Olena Koloshynska
    </footer>
  </StrictMode>
);
