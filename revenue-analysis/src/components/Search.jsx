import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";

const Search = () => {
  const [list, setList] = useState([]);
  const [query, setQuery] = useState([]);

  const find = (etv) => {
    let temp = list.filter(list => list.name.toLowerCase().includes(etv))
    setQuery(temp);
  };

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
      <Table data={query}/>
    </div>
  );
};

export default Search;
