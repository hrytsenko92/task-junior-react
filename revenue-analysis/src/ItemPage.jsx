import React, { useState, useEffect } from "react";
import Charts from "./Charts";
import Info from "./Info";
import axios from "axios";
import { useLocation } from "react-router-dom";

function User(props) {
  const charWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const charMonth = ["1st Week", "2nd Week", "3rd Week", "4rd Week"];
  const charYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const location = useLocation();
  const { from } = location.state;
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [charBottomInfo, setCharBottomInfo] = useState(charWeek);

  const [total, setTotal] = useState("");
  const [minData, setMinData] = useState("");
  const [mediumData, setMediumData] = useState("");
  const [maxData, setMaxData] = useState("");

  const setTotalSum = () => {
    setTotal(currentData.reduce((a, b) => a + b, 0).toFixed(2));
  };
  const setMinSum = () => {
    setMinData(Math.min(...currentData).toFixed(2));
  };
  const setMaxSum = () => {
    setMaxData(Math.max(...currentData).toFixed(2));
  };
  const setMediumSum = () => {
    setMediumData(currentData.reduce((a, b) => (a + b)) / currentData.length.toFixed(2))
  };


  // // setMinData(Math.min(...charData).toFixed(2))
  // // setMaxData(Math.max(...charData).toFixed(2))
  // // setMediumData(charData.reduce((a, b) => (a + b)) / charData.length)

  const setWeek = () => {
    let temp = data.slice(0, 7);
    setCurrentData(temp);
    setCharBottomInfo(charWeek);
    setTotalSum();
    setMinSum();
    setMaxSum();
    setMediumSum();
  };
  const setMonth = () => {
    let temp = data.slice(0, 29);
    setCurrentData(temp);
    setCharBottomInfo(charMonth);
    setTotalSum();
    setMinSum();
    setMaxSum();
    setMediumSum();
  };
  const setYear = () => {
    let temp = data.slice(0, 99);
    setCurrentData(temp);
    setCharBottomInfo(charYear);
    setTotalSum();
    setMinSum();
    setMaxSum();
    setMediumSum();
  };

  useEffect(() => {
    const getAndPrepareData = async () => {
      const queryData = await axios.get(from);
      const filtered = queryData.data.data.filter((item) => {
        return item.curency !== "null";
      });
      const curencyAndDateToNum = filtered.forEach((item) => {
        item.date = Date.parse(item.date);
        item.curency = Number(item.curency);
      });
      const sortedByDate = filtered.sort((a, b) => {
        return b.date - a.date;
      });
      const dataNumbers = sortedByDate.map((item) => {
        return item.curency;
      });
      setData(dataNumbers);
      let defaultData = dataNumbers.slice(0, 7);
      setCurrentData(defaultData);
      setTotal(defaultData.reduce((a, b) => a + b, 0).toFixed(2));
      setMinData(Math.min(...defaultData).toFixed(2));
      setMaxData(Math.max(...defaultData).toFixed(2));
      setMediumData(defaultData.reduce((a, b) => (a + b)) / defaultData.length.toFixed(2))
    };
    getAndPrepareData();
  }, []);

  console.log(total);
  return (
    <>
      <header>
        <h2>Revenue</h2>
        <div>
          <button onClick={() => setWeek()}>Week</button>
          <button onClick={() => setMonth()}>Month</button>
          <button onClick={() => setYear()}>Year</button>
        </div>
      </header>
      <main>
        <Charts charData={currentData} period={charBottomInfo} />
      </main>
      <footer>
        <Info
          total={total}
          minData={minData}
          mediumData={mediumData}
          maxData={maxData}
        />
      </footer>
    </>
  );
}

export default User;
