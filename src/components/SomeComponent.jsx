import React, { useLayoutEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import "moment/locale/ko";
import PATH from "../util/PATH";
import axios from "axios";

function SomeComponent() {
  const { URL } = PATH;
  const [startDate, setStartDate] = useState(new Date());
  const [changeDate, setChagneDate] = useState("");
  function onChange(startDate) {
    console.log("onChangeData: ", startDate);
  }

  useLayoutEffect(() => {
    console.log("서버로 주는 데이터 :", startDate);
    axios
      .get(`${URL}/GetAhuTotalPowerHourly`, { setStartDate })
      .then((res) => res.data)
      .then((data) => {
        console.log("받아오는 데이터 :", data);
        setStartDate(data);
      })
      .catch(console.error);
  }, [startDate]);

  // console.log(startDate);

  return (
    <DatePicker
      className="text-center dark:text-gray-200 text-xl mb-12 mt-3 bg-pink-500 rounded-full "
      locale={ko}
      dateFormat="yyyy/MM/dd"
      startDate={new Date()}
      selected={startDate}
      onChange={onChange}
    />
  );
}

export default SomeComponent;
