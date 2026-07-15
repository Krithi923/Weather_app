# Weather Today 🌤️

I built a clean, responsive weather web application using React and Vite. The app fetches real-time data from the OpenWeatherMap API and features a dynamic UI—the background gradient changes automatically depending on whether the searched city is clear, cloudy, rainy.

Live Demo: [View Live Application](https://krithi923.github.io/Weather_app/) 

---

## ✨ Features I Implemented

*   **Real-Time Data:** Fetches the current temperature, high/low tracking, and condition descriptions instantly.
*   **Dynamic Theming:** Wrote conditional CSS logic that reads the current weather state and switches the background colors seamlessly to match the climate.
*   **Kelvin to Celsius Conversion:** Handled the temperature math directly inside the JavaScript code so it displays perfectly in Celsius.
*   **Security Configuration:** Abstracted my private API credentials into local environment variables (`.env`) and updated `.gitignore` to make sure my keys never leak onto GitHub.

---

## 📂 How I Organized the Project

I built the app using a modular, component-driven directory structure to keep the code neat and organized:

```text
WeatherAPI/
├── public/
│   └── favicon.svg       # My custom cloud tab icon
├── src/
│   ├── Components/
│   │   ├── Date/         # Tracks and displays the calendar info
│   │   ├── Description/  # Handles secondary weather details
│   │   ├── Search/       # Manages the input bar and updates location state
│   │   ├── Temperature/  # Renders the current layout temperatures
│   │   └── Title/        # Renders the brand heading
│   ├── App.css           # Global layout styles and my dynamic weather class blocks
│   ├── App.jsx           # Main component managing my unified async fetches and state hooks
│   ├── index.css         # Global resets
│   └── main.jsx          # Entry point
├── .env                  # My private API key (kept local)
├── .gitignore            # Tells git what to ignore
└── package.json          # My project script configurations
