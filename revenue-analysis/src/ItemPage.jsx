import React, { useState, useEffect } from "react";
import Charts from "./Charts"
import axios from "axios";
import { useLocation } from 'react-router-dom'

function User(props) {
  const location = useLocation()
  const { from } = location.state
  const [data, setData] = useState([])
  const [currentData, setCurrentData] = useState([]) /// add props
  const [charBottomInfo, setCharBottomInfo] = useState(charWeek)

  const charWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  const charMonth = ["January", "	February", "March", "April", "May", "June", "July", "August", "	September", "October", "November", "December"]
  const charYear = ["All year"]

  const setWeek = () => {
    let temp = data.splice(0, 7)
    setCurrentData(temp)
    setCharBottomInfo(charWeek)
  }
  const setMonth = () => {
    let temp = data.splice(0, 29)
    setCurrentData(temp)
    setCharBottomInfo(charMonth)
  }
  const setYear = () => {
    let temp = data.splice(0, 364)
    setCurrentData(temp)
    setCharBottomInfo(charYear)
  }

  useEffect(() => {
    const getAndPrepareData = async () => {
      const queryData = await axios.get(from);
      const filtered = queryData.data.data.filter((item)=> {return item.curency !== "null"})
      const curencyAndDateToNum = filtered.forEach((item)=> {item.date = Date.parse(item.date); item.curency = Number(item.curency)})
      const sortedByDate = filtered.sort((a, b)=> { return b.date - a.date})
      setData(sortedByDate);
      let defaultData = sortedByDate.splice(0, 7)
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