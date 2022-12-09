import React, { useState, useLayoutEffect } from "react";

import { ChartsHeader, LineChart } from "../../components";

import LineChart_POW from "../../components/Charts/LineChart_POW";

import DateInputTemplate from "../../components/DateInputTemplate";
import axios from "axios";
import PATH from "../../util/PATH";

const Line_POW = () => {
  const [runDate, setrunDate] = useState("");
  const [lineChartData, setLineChartData] = useState(null);
  const { URL, AHU_TOTAL_POEWR } = PATH;
  const dateChange = (evt) => {
    setrunDate(
      evt.target.value.slice(0, 4) +
        evt.target.value.slice(5, 7) +
        evt.target.value.slice(8, 10)
    );
  };

  useLayoutEffect(() => {
    axios
      .get(`${URL}${AHU_TOTAL_POEWR}${runDate}`)
      .then((res) => res.data)
      .then((data) => {
        console.log("받아오는 데이터:", data);
      })
      .catch(console.error);
    console.log("보내는 데이터 :", runDate);
  }, [runDate]);

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Line" title="Inflation Rate" />
      <div className="w-full">
        <DateInputTemplate onChange={dateChange} value={runDate} />
        <LineChart_POW LinePrimaryXAxis={lineChartData} />
      </div>
    </div>
  );
};

export default Line_POW;
