import React, { useLayoutEffect, useState } from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  SplineAreaSeries,
  Legend,
} from "@syncfusion/ej2-react-charts";

import { ChartsHeader } from "../../components";
import {
  areaCustomSeries_AN_CHILER,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

import DateInputTemplate from "../../components/DateInputTemplate";
import axios from "axios";
import PATH from "../../util/PATH";

const Area_CHILER = () => {
  const { currentMode } = useStateContext();
  const [runDate, setrunDate] = useState("");
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
      <ChartsHeader category="Area" title="칠러 사용량 비교 데이터" />
      <div className="w-full">
        <DateInputTemplate onChange={dateChange} value={runDate} />
        <ChartComponent
          id="charts"
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          legendSettings={{ background: "white" }}
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
          <SeriesCollectionDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {areaCustomSeries_AN_CHILER.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Area_CHILER;
