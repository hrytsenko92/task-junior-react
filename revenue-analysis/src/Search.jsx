import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";

const Search = () => {
  const [list, setList] = useState([]);
  const [query, setQuery] = useState([]);
  const [sortPositionState, SetSortPositionState] = useState(false);
  const [sortPositionDate, SetSortPositionDate] = useState(false);

  const find = (etv) => {
    let temp = list.filter((list) => list.name.toLowerCase().includes(etv));
    setQuery(temp);
  };
  const sortDate = () => {
    if (sortPositionDate === false) {
      let sorted = query.sort((a, b) => a.date - b.date);
      setQuery(sorted);
      SetSortPositionDate(true);
    } else {
      let sorted = query.sort((a, b) => b.date - a.date);
      setQuery(sorted);
      SetSortPositionDate(false);
    }
  };
  const sortState = () => {
    if (sortPositionState === false) {
      let sorted = query.sort((a, b) => a.isActive - b.isActive);
      setQuery(sorted);
      SetSortPositionState(true);
    } else {
      let sorted = query.sort((a, b) => b.isActive - a.isActive);
      setQuery(sorted);
      SetSortPositionState(false);
    }
  };

 
  useEffect(() => {
    const getAndPrepareData = async () => {
      const res = await axios.get(`https://oril-coins-test.herokuapp.com/list`);
      const dataIsActive = res.data.map((item) => {
        return item.isActive === true
          ? { ...item, isA: "Active" }
          : { ...item, isA: "Disable" };
      });
      const dataAddHref = dataIsActive.map((item) => {
        return {
          ...item,
          href: `https://oril-coins-test.herokuapp.com/item/${item.id}`,
        };
      });
      const dateUtcToTimeStamp = dataAddHref.forEach((item) => {item.date = Date.parse(item.date)});
      setList(dataAddHref); 
      setQuery(dataAddHref); 
    };
    getAndPrepareData();
  }, []);
  return (
    <Router>
      <input
        type="text"
        placeholder="Search..."
        className=""
        onChange={(e) => find(e.target.value)}
      />
      <Table data={query} sortDate={()=> sortDate()} sortState={()=> sortState()}/>
      {/* //   <Routes>
    //     <Route exact path="/" element={<Table />} />
    //     <Route path="/User" element={<User />} />
    //   </Routes> */}
      //{" "}
    </Router>
  );
};

export default Search;
