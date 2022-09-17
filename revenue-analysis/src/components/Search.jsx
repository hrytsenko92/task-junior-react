import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";

const Search = () => {
  const [list, setList] = useState([]);
  const [query, setQuery] = useState([]);
  const [sortPosition, SetSortPosition] = useState(false)

  const find = (etv) => {
    let temp = list.filter(list => list.name.toLowerCase().includes(etv))
    setQuery(temp);
  };
  const sortData = () => {
    if (sortPosition === false) {
        let sorted = query.sort((a,b) => a.name - b.name ? 1 : -1)
        setQuery(sorted);
        SetSortPosition(true)
        console.log(sorted)
        console.group(sortPosition)
    } else {
        let sorted = query.sort((a,b) => b.name - a.name ? 1 : -1)
        setQuery(sorted);
        SetSortPosition(false)
        console.log(sorted)
        console.log(sortPosition)
    }
  }

  useEffect(() => {
    const getRecords = async () => {
      const res = await axios.get(`https://oril-coins-test.herokuapp.com/list`);
      const isAct = res.data.map((item) => {return item.isActive === true ? {...item, isA: 'Active'} : {...item, isA: "Disable"}})
      setList(isAct);
      setQuery(isAct);
    };
    getRecords();
  }, []);
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className=""
        onChange={(e) => find(e.target.value)}
      />
      <Table data={query} sortData={() => sortData()}/>
    </div>
  );
};

export default Search;
