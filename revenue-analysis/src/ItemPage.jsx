import React, { useState, useEffect } from "react";
import Charts from "./Charts"
import axios from "axios";
import { useLocation } from 'react-router-dom'

function User(props) {
  const charWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  const charMonth = ["1st Week", "2nd Week", "3rd Week", "4rd Week"]
  const charYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  const location = useLocation()
  const { from } = location.state
  const [data, setData] = useState([])
  const [currentData, setCurrentData] = useState([])
  const [charBottomInfo, setCharBottomInfo] = useState(charWeek)

 

  const setWeek = () => {
    let temp = data.slice(0, 7)
    setCurrentData(temp)
    setCharBottomInfo(charWeek)
  }
  const setMonth = () => {
    let temp = data.slice(0, 29)
    setCurrentData(temp)
    setCharBottomInfo(charMonth)
  }
  const setYear = () => {
    let temp = data.slice(0, 99)
    setCurrentData(temp)
    setCharBottomInfo(charYear)
  }

  useEffect(() => {
    const getAndPrepareData = async () => {
      const queryData = await axios.get(from);
      const filtered = queryData.data.data.filter((item)=> {return item.curency !== "null"})
      const curencyAndDateToNum = filtered.forEach((item)=> {item.date = Date.parse(item.date); item.curency = Number(item.curency)})
      const sortedByDate = filtered.sort((a, b)=> { return b.date - a.date})
      const dataNumbers = sortedByDate.map((item) => {return item.curency})
      setData(dataNumbers);
      let defaultData = dataNumbers.slice(0, 7)
      setCurrentData(defaultData)
    };
    getAndPrepareData();
  }, []);
  return (
    <>
    <header>
      <h2>Revenue</h2>
    <div>
      <button onClick={()=> setWeek()} >Week</button>
      <button onClick={()=> setMonth()} >Month</button>
      <button onClick={()=> setYear()} >Year</button>
    </div></header>
    <main><Charts charData={currentData} period={charBottomInfo}/></main>
    <footer>
    <div>sum</div>
    </footer>
    
    </>
    

  )
}

export default User