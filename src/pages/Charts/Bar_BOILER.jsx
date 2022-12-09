import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
} from "@syncfusion/ej2-react-charts";

import {
  barCustomSeries_BOILER,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";
import { ChartsHeader } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { dropdownData_BOILER } from "../../data/dummy";
import PATH from "../../util/PATH";
import DateInputTemplate from "../../components/DateInputTemplate";

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 ml-auto rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: "Time", value: "Id" }}
      style={{ border: "none", color: currentMode === "Dark" && "white" }}
      value="1"
      dataSource={dropdownData_BOILER}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
);

const Bar_BOILER = () => {
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
      <ChartsHeader category="Bar" title="보일러 사용량" />
      <div className=" w-full">
        <DateInputTemplate onChange={dateChange} value={runDate} />
        <DropDown />
        <ChartComponent
          id="charts"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          legendSettings={{ background: "white" }}
        >
          <Inject
            services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}
          />
          <SeriesCollectionDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {barCustomSeries_BOILER.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Bar_BOILER;
