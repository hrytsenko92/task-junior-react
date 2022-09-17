import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";

const Search = () => {
  const [list, setList] = useState([]);
//   const [query, setQuery] = useState("");
  const keys = ["isActive", "name", "date"];

  const find = (etv) => {
    console.log(etv)
    let temp = list.filter((item) => keys.some((key) => item[key].toLowerCase().include(etv)));
    setList(temp);
  };


  useEffect(() => {
    const getRecords = async () => {
      const res = await axios.get(`https://oril-coins-test.herokuapp.com/list`);
    //   console.log(res.data)
      const isAct = res.data.map((item) => {return item.isActive === true ? {...item, isA: 'Active'} : {...item, isA: "Disable"}})
      console.log(isAct)
      setList(isAct);
    };
    getRecords();
  }, []);


// console.log(list)
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className=""
        onChange={(e) => find(e.target.value)}
      />
      <ul></ul>

      {/* <Table data={find(list)}/> */}
      <Table data={list}/>
    </div>
  );
};

export default Search;
