import React from "react";

import { ChartsHeader, LineChart } from "../../components";
import SomeComponent from "../../components/SomeComponent";
import LineChart_POW from "../../components/Charts/LineChart_POW";

const Line_POW = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Line" title="Inflation Rate" />
    <div className="w-full">
      <SomeComponent />
      <LineChart_POW />
    </div>
  </div>
);

export default Line_POW;
