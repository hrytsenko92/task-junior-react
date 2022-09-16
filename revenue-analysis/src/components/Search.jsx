import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";

const Search = () => {
    const [list, setList] = useState([])
  useEffect(() => {
    const getRecords = async () => {
      const res = await axios.get(`https://oril-coins-test.herokuapp.com/list`);
      setList(res);
      console.log(res.data)
    };
    getRecords();
  }, []);
  return (
    <div>
      <Table />
    </div>
  );
};

export default Search;
