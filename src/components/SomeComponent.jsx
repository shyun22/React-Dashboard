import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import moment from "react-moment";
import "moment/locale/ko";
import { AxisLabelBorder } from "@syncfusion/ej2/heatmap";

function SomeComponent() {
  const [startDate, setStartDate] = useState(new Date());
  const onFinish = async () => {
    const blob = new Blob([JSON.stringify(startDate)], {
      type: "application/json",
    });
    FormData.appden("startDate", blob);
    await AxisLabelBorder({
      method: "POST",
      url: "https://127.0.0.1:8888/",
      mode: "cors",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: FormData,
    });
  };

  console.log(onFinish);

  return (
    <DatePicker
      className="text-center dark:text-gray-200 text-xl mb-12 mt-3 bg-pink-500 rounded-full "
      locale={ko}
      dateFormat="yyyy/MM/dd"
      startDate={new Date()}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
}

export default SomeComponent;
