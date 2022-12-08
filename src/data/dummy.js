import React from "react";
import { AiOutlineCalendar, AiOutlineShoppingCart } from "react-icons/ai";
import {
  FiShoppingBag,
  FiEdit,
  FiCreditCard,
  FiStar,
  FiShoppingCart,
} from "react-icons/fi";
import {
  BsKanban,
  BsBoxSeam,
  BsCurrencyDollar,
  BsShield,
  BsChatLeft,
} from "react-icons/bs";
import { BiColorFill } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import { CiBatteryFull, CiMicrochip } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineSupervisorAccount } from "react-icons/md";

import { TiTick } from "react-icons/ti";

import { GrLocation } from "react-icons/gr";
import avatar from "./avatar.jpg";
import avatar2 from "./avatar2.jpg";
import avatar3 from "./avatar3.png";
import avatar4 from "./avatar4.jpg";

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

export const kanbanGrid = [
  { headerText: "To Do", keyField: "Open", allowToggle: true },

  { headerText: "In Progress", keyField: "InProgress", allowToggle: true },

  {
    headerText: "Testing",
    keyField: "Testing",
    allowToggle: true,
    isExpanded: false,
  },

  { headerText: "Done", keyField: "Close", allowToggle: true },
];
const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.EmployeeImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);

const gridEmployeeCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);

const customerGridImage = (props) => (
  <div className="image flex gap-4">
    <img
      className="rounded-full w-10 h-10"
      src={props.CustomerImage}
      alt="employee"
    />
    <div>
      <p>{props.CustomerName}</p>
      <p>{props.CustomerEmail}</p>
    </div>
  </div>
);

const customerGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p
      style={{ background: props.StatusBg }}
      className="rounded-full h-3 w-3"
    />
    <p>{props.Status}</p>
  </div>
);
export const areaPrimaryXAxis = {
  valueType: "DateTime",
  labelFormat: "y",
  majorGridLines: { width: 0 },
  intervalType: "Years",
  edgeLabelPlacement: "Shift",
  labelStyle: { color: "gray" },
};

export const areaPrimaryYAxis = {
  labelFormat: "{value}%",
  lineStyle: { width: 0 },
  maximum: 4,
  interval: 1,
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelStyle: { color: "gray" },
};
export const barPrimaryXAxis = {
  valueType: "Category",
  interval: 1,
  majorGridLines: { width: 0 },
};
export const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: "transparent" },
};
const areaChartData = [
  [
    { x: new Date(2002, 0, 1), y: 2.2 },
    { x: new Date(2003, 0, 1), y: 3.4 },
    { x: new Date(2004, 0, 1), y: 2.8 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 2.5 },
    { x: new Date(2008, 0, 1), y: 2.9 },
    { x: new Date(2009, 0, 1), y: 3.8 },
    { x: new Date(2010, 0, 1), y: 1.4 },
    { x: new Date(2011, 0, 1), y: 3.1 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 2 },
    { x: new Date(2003, 0, 1), y: 1.7 },
    { x: new Date(2004, 0, 1), y: 1.8 },
    { x: new Date(2005, 0, 1), y: 2.1 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 1.5 },
    { x: new Date(2009, 0, 1), y: 2.8 },
    { x: new Date(2010, 0, 1), y: 1.5 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
];

export const areaCustomSeries = [
  {
    dataSource: areaChartData[0],
    xName: "x",
    yName: "y",
    name: "실제 사용량",
    opacity: "0.8",
    type: "SplineArea",
    width: "2",
  },
  {
    dataSource: areaChartData[1],
    xName: "x",
    yName: "y",
    name: "예상 사용량",
    opacity: "0.8",
    type: "SplineArea",
    width: "2",
  },
];

const areaChartData_AN_AHU = [
  [
    { x: new Date(2002, 0, 1), y: 4.2 },
    { x: new Date(2003, 0, 1), y: 4.4 },
    { x: new Date(2004, 0, 1), y: 4.8 },
    { x: new Date(2005, 0, 1), y: 4.6 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 2.5 },
    { x: new Date(2008, 0, 1), y: 2.9 },
    { x: new Date(2009, 0, 1), y: 3.8 },
    { x: new Date(2010, 0, 1), y: 1.4 },
    { x: new Date(2011, 0, 1), y: 3.1 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 2 },
    { x: new Date(2003, 0, 1), y: 1.7 },
    { x: new Date(2004, 0, 1), y: 1.8 },
    { x: new Date(2005, 0, 1), y: 2.1 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 1.5 },
    { x: new Date(2009, 0, 1), y: 2.8 },
    { x: new Date(2010, 0, 1), y: 1.5 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
];

export const areaCustomSeries_AN_AHU = [
  {
    dataSource: areaChartData_AN_AHU[0],
    xName: "x",
    yName: "y",
    name: "실제 사용량",
    opacity: "0.8",
    type: "SplineArea",
    width: "2",
  },
  {
    dataSource: areaChartData_AN_AHU[1],
    xName: "x",
    yName: "y",
    name: "예상 사용량",
    opacity: "0.8",
    type: "SplineArea",
    width: "2",
  },
];

const areaChartData_AN_CHILER = [
  [
    { x: new Date(2002, 0, 1), y: 1.2 },
    { x: new Date(2003, 0, 1), y: 1.4 },
    { x: new Date(2004, 0, 1), y: 1.8 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 1.3 },
    { x: new Date(2007, 0, 1), y: 2.5 },
    { x: new Date(2008, 0, 1), y: 2.9 },
    { x: new Date(2009, 0, 1), y: 3.8 },
    { x: new Date(2010, 0, 1), y: 1.4 },
    { x: new Date(2011, 0, 1), y: 3.1 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 2 },
    { x: new Date(2003, 0, 1), y: 1.7 },
    { x: new Date(2004, 0, 1), y: 1.8 },
    { x: new Date(2005, 0, 1), y: 2.1 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 1.5 },
    { x: new Date(2009, 0, 1), y: 2.8 },
    { x: new Date(2010, 0, 1), y: 1.5 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
];

export const areaCustomSeries_AN_CHILER = [
  {
    dataSource: areaChartData_AN_CHILER[0],
    xName: "x",
    yName: "y",
    name: "실제 사용량",
    opacity: "0.8",
    type: "SplineArea",
    width: "2",
  },
  {
    dataSource: areaChartData_AN_CHILER[1],
    xName: "x",
    yName: "y",
    name: "예상 사용량",
    opacity: "0.8",
    type: "SplineArea",
    width: "2",
  },
];

const areaChartData_AN_BOILER = [
  [
    { x: new Date(2002, 0, 1), y: 2.2 },
    { x: new Date(2003, 0, 1), y: 3.4 },
    { x: new Date(2004, 0, 1), y: 2.8 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 2.5 },
    { x: new Date(2008, 0, 1), y: 2.9 },
    { x: new Date(2009, 0, 1), y: 3.8 },
    { x: new Date(2010, 0, 1), y: 1.4 },
    { x: new Date(2011, 0, 1), y: 3.1 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 2 },
    { x: new Date(2003, 0, 1), y: 1.7 },
    { x: new Date(2004, 0, 1), y: 1.8 },
    { x: new Date(2005, 0, 1), y: 2.1 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 1.5 },
    { x: new Date(2009, 0, 1), y: 2.8 },
    { x: new Date(2010, 0, 1), y: 1.5 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
];

export const areaCustomSeries_AN_BOILER = [
  {
    dataSource: areaChartData_AN_BOILER[0],
    xName: "x",
    yName: "y",
    name: "실제 사용량",
    opacity: "0.8",
    type: "SplineArea",
    width: "2",
  },
  {
    dataSource: areaChartData_AN_BOILER[1],
    xName: "x",
    yName: "y",
    name: "예상 사용량",
    opacity: "0.8",
    type: "SplineArea",
    width: "2",
  },
];

export const barChartData = [
  [
    { x: "2022.10.1", y: 46 },
    { x: "2022.10.2", y: 30 },
    { x: "2022.10.3", y: 48 },
    { x: "2022.10.4", y: 80 },
    { x: "2022.10.5", y: 41 },
    { x: "2022.10.6", y: 37 },
    { x: "2022.10.7", y: 33 },
    { x: "2022.10.8", y: 80 },
    { x: "2022.10.9", y: 48 },
    { x: "2022.10.10", y: 50 },
    { x: "2022.10.11", y: 20 },
    { x: "2022.10.12", y: 29 },
    { x: "2022.10.13", y: 38 },
    { x: "2022.10.14", y: 39 },
    { x: "2022.10.15", y: 40 },
    { x: "2022.10.16", y: 42 },
    { x: "2022.10.17", y: 43 },
    { x: "2022.10.18", y: 30 },
    { x: "2022.10.19", y: 42 },
    { x: "2022.10.20", y: 44 },
    { x: "2022.10.21", y: 45 },
    { x: "2022.10.22", y: 46 },
    { x: "2022.10.23", y: 48 },
  ],
];

export const barCustomSeries = [
  {
    dataSource: barChartData[0],
    xName: "x",
    yName: "y",
    name: "AHU",
    type: "Column",
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
    },
  },
];

export const barChartData_AHU = [
  [
    { x: "2022.10.1", y: 46 },
    { x: "2022.10.2", y: 30 },
    { x: "2022.10.3", y: 48 },
    { x: "2022.10.4", y: 80 },
    { x: "2022.10.5", y: 41 },
    { x: "2022.10.6", y: 37 },
    { x: "2022.10.7", y: 33 },
    { x: "2022.10.8", y: 80 },
    { x: "2022.10.9", y: 48 },
    { x: "2022.10.10", y: 50 },
    { x: "2022.10.11", y: 20 },
    { x: "2022.10.12", y: 29 },
    { x: "2022.10.13", y: 38 },
    { x: "2022.10.14", y: 39 },
    { x: "2022.10.15", y: 40 },
    { x: "2022.10.16", y: 42 },
    { x: "2022.10.17", y: 43 },
    { x: "2022.10.18", y: 30 },
    { x: "2022.10.19", y: 42 },
    { x: "2022.10.20", y: 44 },
    { x: "2022.10.21", y: 45 },
    { x: "2022.10.22", y: 46 },
    { x: "2022.10.23", y: 48 },
  ],
];

export const barCustomSeries_AHU = [
  {
    dataSource: barChartData_AHU[0],
    xName: "x",
    yName: "y",
    name: "AHU",
    type: "Column",
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
    },
  },
];

export const barChartData_CHILER = [
  [
    { x: "2022.10.1", y: 46 },
    { x: "2022.10.2", y: 30 },
    { x: "2022.10.3", y: 48 },
    { x: "2022.10.4", y: 200 },
    { x: "2022.10.5", y: 41 },
    { x: "2022.10.6", y: 37 },
    { x: "2022.10.7", y: 33 },
    { x: "2022.10.8", y: 80 },
    { x: "2022.10.9", y: 48 },
    { x: "2022.10.10", y: 50 },
    { x: "2022.10.11", y: 20 },
    { x: "2022.10.12", y: 29 },
    { x: "2022.10.13", y: 38 },
    { x: "2022.10.14", y: 39 },
    { x: "2022.10.15", y: 40 },
    { x: "2022.10.16", y: 42 },
    { x: "2022.10.17", y: 43 },
    { x: "2022.10.18", y: 30 },
    { x: "2022.10.19", y: 42 },
    { x: "2022.10.20", y: 44 },
    { x: "2022.10.21", y: 45 },
    { x: "2022.10.22", y: 46 },
    { x: "2022.10.23", y: 48 },
  ],
];

export const barCustomSeries_CHILER = [
  {
    dataSource: barChartData_CHILER[0],
    xName: "x",
    yName: "y",
    name: "AHU",
    type: "Column",
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
    },
  },
];

export const barChartData_BOILER = [
  [
    { x: "2022.10.1", y: 20 },
    { x: "2022.10.2", y: 30 },
    { x: "2022.10.3", y: 48 },
    { x: "2022.10.4", y: 20 },
    { x: "2022.10.5", y: 41 },
    { x: "2022.10.6", y: 37 },
    { x: "2022.10.7", y: 33 },
    { x: "2022.10.8", y: 80 },
    { x: "2022.10.9", y: 48 },
    { x: "2022.10.10", y: 50 },
    { x: "2022.10.11", y: 20 },
    { x: "2022.10.12", y: 29 },
    { x: "2022.10.13", y: 38 },
    { x: "2022.10.14", y: 39 },
    { x: "2022.10.15", y: 40 },
    { x: "2022.10.16", y: 42 },
    { x: "2022.10.17", y: 43 },
    { x: "2022.10.18", y: 30 },
    { x: "2022.10.19", y: 42 },
    { x: "2022.10.20", y: 44 },
    { x: "2022.10.21", y: 45 },
    { x: "2022.10.22", y: 20 },
    { x: "2022.10.23", y: 48 },
  ],
];

export const barCustomSeries_BOILER = [
  {
    dataSource: barChartData_BOILER[0],
    xName: "x",
    yName: "y",
    name: "AHU",
    type: "Column",
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
    },
  },
];
export const colorMappingData = [
  [
    { x: "Jan", y: 6.96 },
    { x: "Feb", y: 8.9 },
    { x: "Mar", y: 12 },
    { x: "Apr", y: 17.5 },
    { x: "May", y: 22.1 },
    { x: "June", y: 25 },
    { x: "July", y: 29.4 },
    { x: "Aug", y: 29.6 },
    { x: "Sep", y: 25.8 },
    { x: "Oct", y: 21.1 },
    { x: "Nov", y: 15.5 },
    { x: "Dec", y: 9.9 },
  ],
  ["#FFFF99"],
  ["#FFA500"],
  ["#FF4040"],
];

export const rangeColorMapping = [
  { label: "1°C to 10°C", start: "1", end: "10", colors: colorMappingData[1] },

  {
    label: "11°C to 20°C",
    start: "11",
    end: "20",
    colors: colorMappingData[2],
  },

  {
    label: "21°C to 30°C",
    start: "21",
    end: "30",
    colors: colorMappingData[3],
  },
];

export const ColorMappingPrimaryXAxis = {
  valueType: "Category",
  majorGridLines: { width: 0 },
  title: "Months",
};

export const ColorMappingPrimaryYAxis = {
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelFormat: "{value}°C",
  title: "Temperature",
};

export const FinancialPrimaryXAxis = {
  valueType: "DateTime",
  minimum: new Date("2016, 12, 31"),
  maximum: new Date("2017, 9, 30"),
  crosshairTooltip: { enable: true },
  majorGridLines: { width: 0 },
};

export const FinancialPrimaryYAxis = {
  title: "Price",
  minimum: 100,
  maximum: 180,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
};

export const LinePrimaryXAxis = {
  valueType: "DateTime",
  labelFormat: "y",
  intervalType: "Years",
  edgeLabelPlacement: "Shift",
  majorGridLines: { width: 0 },
  background: "white",
};

export const LinePrimaryYAxis = {
  labelFormat: "{value}%",
  rangePadding: "None",
  minimum: 0,
  maximum: 100,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "Main",
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: "Monitoring",
    links: [
      {
        name: "AHU",
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: "CHILER",
        icon: <IoMdContacts />,
      },
      {
        name: "BOILER",
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: "ANALYSIS",
    links: [
      {
        name: "AN-AHU",
        icon: <AiOutlineCalendar />,
      },
      {
        name: "AN-CHILER",
        icon: <BsKanban />,
      },
      {
        name: "AN-BOILER",
        icon: <FiEdit />,
      },
      {
        name: "POWER",
        icon: <BiColorFill />,
      },
      {
        name: "GAS",
        icon: <BiColorFill />,
      },
    ],
  },
];

export const chatData = [
  {
    image: avatar2,
    message: "Roman Joined the Team!",
    desc: "Congratulate him",
    time: "9:08 AM",
  },
  {
    image: avatar3,
    message: "New message received",
    desc: "Salma sent you new message",
    time: "11:56 AM",
  },
  {
    image: avatar4,
    message: "New Payment received",
    desc: "Check your earnings",
    time: "4:39 AM",
  },
  {
    image: avatar,
    message: "Jolly completed tasks",
    desc: "Assign her new tasks",
    time: "1:12 AM",
  },
];

export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: "39,354",
    percentage: "-4%",
    title: "공조기",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red-600",
  },
  {
    icon: <BsBoxSeam />,
    amount: "4,396",
    percentage: "+23%",
    title: "보일러",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
    pcColor: "green-600",
  },
  {
    icon: <CiMicrochip />,
    amount: "423,39",
    percentage: "+38%",
    title: "칠러",
    iconColor: "rgb(228, 106, 118)",
    iconBg: "rgb(255, 244, 229)",

    pcColor: "green-600",
  },
  {
    icon: <CiBatteryFull />,
    amount: "39,354",
    percentage: "-12%",
    title: "전력",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
    pcColor: "red-600",
  },
];

export const recentTransactions = [
  {
    icon: <BsCurrencyDollar />,
    amount: "+$350",
    title: "Paypal Transfer",
    desc: "Money Added",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "green-600",
  },
  {
    icon: <BsShield />,
    amount: "-$560",
    desc: "Bill Payment",
    title: "Wallet",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
    pcColor: "red-600",
  },
  {
    icon: <FiCreditCard />,
    amount: "+$350",
    title: "Credit Card",
    desc: "Money reversed",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",

    pcColor: "green-600",
  },
  {
    icon: <TiTick />,
    amount: "+$350",
    title: "Bank Transfer",
    desc: "Money Added",

    iconColor: "rgb(228, 106, 118)",
    iconBg: "rgb(255, 244, 229)",
    pcColor: "green-600",
  },
  {
    icon: <BsCurrencyDollar />,
    amount: "-$50",
    percentage: "+38%",
    title: "Refund",
    desc: "Payment Sent",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red-600",
  },
];

export const weeklyStats = [
  {
    icon: <FiShoppingCart />,
    amount: "-$560",
    title: "Top Sales",
    desc: "Johnathan Doe",
    iconBg: "#FB9678",
    pcColor: "red-600",
  },
  {
    icon: <FiStar />,
    amount: "-$560",
    title: "Best Seller",
    desc: "MaterialPro Admin",
    iconBg: "rgb(254, 201, 15)",
    pcColor: "red-600",
  },
  {
    icon: <BsChatLeft />,
    amount: "+$560",
    title: "Most Commented",
    desc: "Ample Admin",
    iconBg: "#00C292",
    pcColor: "green-600",
  },
];

export const medicalproBranding = {
  data: [
    {
      title: "Due Date",
      desc: "Oct 23, 2021",
    },
    {
      title: "Budget",
      desc: "$98,500",
    },
    {
      title: "Expense",
      desc: "$63,000",
    },
  ],
  teams: [
    {
      name: "Bootstrap",
      color: "orange",
    },
    {
      name: "Angular",
      color: "#FB9678",
    },
  ],
  leaders: [
    {
      image: avatar2,
    },
    {
      image: avatar3,
    },
    {
      image: avatar2,
    },
    {
      image: avatar4,
    },
    {
      image: avatar,
    },
  ],
};

export const themeColors = [
  {
    name: "blue-theme",
    color: "#1A97F5",
  },
  {
    name: "green-theme",
    color: "#03C9D7",
  },
  {
    name: "purple-theme",
    color: "#7352FF",
  },
  {
    name: "red-theme",
    color: "#FF5C8E",
  },
  {
    name: "indigo-theme",
    color: "#1E4DB7",
  },
  {
    color: "#FB9678",
    name: "orange-theme",
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: "My Profile",
    desc: "Account Settings",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
  {
    icon: <BsShield />,
    title: "My Inbox",
    desc: "Messages & Emails",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
  },
  {
    icon: <FiCreditCard />,
    title: "My Tasks",
    desc: "To-do and Daily Tasks",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
];

export const lineChartData = [
  [
    { x: new Date(2005, 0, 1), y: 21 },
    { x: new Date(2006, 0, 1), y: 24 },
    { x: new Date(2007, 0, 1), y: 36 },
    { x: new Date(2008, 0, 1), y: 38 },
    { x: new Date(2009, 0, 1), y: 54 },
    { x: new Date(2010, 0, 1), y: 57 },
    { x: new Date(2011, 0, 1), y: 70 },
  ],
  [
    { x: new Date(2005, 0, 1), y: 28 },
    { x: new Date(2006, 0, 1), y: 44 },
    { x: new Date(2007, 0, 1), y: 48 },
    { x: new Date(2008, 0, 1), y: 50 },
    { x: new Date(2009, 0, 1), y: 66 },
    { x: new Date(2010, 0, 1), y: 78 },
    { x: new Date(2011, 0, 1), y: 84 },
  ],

  [
    { x: new Date(2005, 0, 1), y: 10 },
    { x: new Date(2006, 0, 1), y: 20 },
    { x: new Date(2007, 0, 1), y: 30 },
    { x: new Date(2008, 0, 1), y: 39 },
    { x: new Date(2009, 0, 1), y: 50 },
    { x: new Date(2010, 0, 1), y: 70 },
    { x: new Date(2011, 0, 1), y: 100 },
  ],
];
export const dropdownData = [
  {
    Id: "1",
    Time: "March 2021",
  },
  {
    Id: "2",
    Time: "April 2021",
  },
  {
    Id: "3",
    Time: "May 2021",
  },
];
export const dropdownData_AHU = [
  {
    Id: "1",
    Time: "공조기_01",
  },
  {
    Id: "2",
    Time: "공조기_02",
  },
  {
    Id: "3",
    Time: "공조기_03",
  },
  {
    Id: "4",
    Time: "공조기_04",
  },
  {
    Id: "5",
    Time: "공조기_05",
  },
  {
    Id: "6",
    Time: "공조기_06",
  },
  {
    Id: "7",
    Time: "공조기_07",
  },
  {
    Id: "8",
    Time: "공조기_08",
  },
];

export const dropdownData_CHILER = [
  {
    Id: "1",
    Time: "칠러_01",
  },
  {
    Id: "2",
    Time: "칠러_02",
  },
];

export const dropdownData_BOILER = [
  {
    Id: "1",
    Time: "보일러_01",
  },
  {
    Id: "2",
    Time: "보일러_02",
  },
  {
    Id: "3",
    Time: "보일러_03",
  },
  {
    Id: "4",
    Time: "보일러_04",
  },
  {
    Id: "5",
    Time: "보일러_05",
  },
];

export const dropdownData_AN_AHU = [
  {
    Id: "1",
    Time: "공조기_01",
  },
  {
    Id: "2",
    Time: "공조기_02",
  },
  {
    Id: "3",
    Time: "공조기_03",
  },
  {
    Id: "4",
    Time: "공조기_04",
  },
  {
    Id: "5",
    Time: "공조기_05",
  },
  {
    Id: "6",
    Time: "공조기_06",
  },
  {
    Id: "7",
    Time: "공조기_07",
  },
  {
    Id: "8",
    Time: "공조기_08",
  },
];

export const dropdownData_AN_CHILER = [
  {
    Id: "1",
    Time: "칠러_01",
  },
  {
    Id: "2",
    Time: "칠러_02",
  },
];

export const dropdownData_AN_BOILER = [
  {
    Id: "1",
    Time: "보일러_01",
  },
  {
    Id: "2",
    Time: "보일러_02",
  },
  {
    Id: "3",
    Time: "보일러_03",
  },
  {
    Id: "4",
    Time: "보일러_04",
  },
  {
    Id: "5",
    Time: "보일러_05",
  },
];

export const SparklineAreaData = [
  { x: 1, yval: 2 },
  { x: 2, yval: 6 },
  { x: 3, yval: 8 },
  { x: 4, yval: 5 },
  { x: 5, yval: 10 },
];

export const lineCustomSeries = [
  {
    dataSource: lineChartData[0],
    xName: "x",
    yName: "y",
    name: "공조기_1",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line",
  },

  {
    dataSource: lineChartData[1],
    xName: "x",
    yName: "y",
    name: "공조기_2",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line",
  },

  {
    dataSource: lineChartData[2],
    xName: "x",
    yName: "y",
    name: "공조기_3",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line",
  },

  {
    dataSource: lineChartData[2],
    xName: "x",
    yName: "y",
    name: "공조기_4",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line",
  },

  {
    dataSource: lineChartData[2],
    xName: "x",
    yName: "y",
    name: "공조기_4",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line",
  },

  {
    dataSource: lineChartData[2],
    xName: "x",
    yName: "y",
    name: "공조기_4",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line",
  },

  {
    dataSource: lineChartData[2],
    xName: "x",
    yName: "y",
    name: "공조기_4",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line",
  },

  {
    dataSource: lineChartData[2],
    xName: "x",
    yName: "y",
    name: "공조기_4",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line",
  },
];
