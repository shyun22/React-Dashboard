import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import { Ecommerce } from "./pages";
import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";
import Bar_AHU from "./pages/Charts/Bar_AHU";
import Bar_CHILER from "./pages/Charts/Bar_CHILER";
import Bar_BOILER from "./pages/Charts/Bar_BOILER";
import Area_AHU from "./pages/Charts/Area_AHU";
import Area_CHILER from "./pages/Charts/Area_CHILER";
import Area_BOILER from "./pages/Charts/Area_BOILER";
import Line_POW from "./pages/Charts/LIne_POW";
import ColorMapping_GAS from "./pages/Charts/ColorMapping_GAS";
import Main from "./pages/Main";

const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: "50%" }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/Main" element={<Ecommerce />} />

                {/* MONITORING  */}
                <Route path="/AHU" element={<Bar_AHU />} />
                <Route path="/CHILER" element={<Bar_CHILER />} />
                <Route path="/BOILER" element={<Bar_BOILER />} />

                {/* apps  */}
                <Route path="/AN-AHU" element={<Area_AHU />} />
                <Route path="/AN-CHILER" element={<Area_CHILER />} />
                <Route path="/AN-BOILER" element={<Area_BOILER />} />
                <Route path="/POWER" element={<Line_POW />} />
                <Route path="/GAS" element={<ColorMapping_GAS />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
