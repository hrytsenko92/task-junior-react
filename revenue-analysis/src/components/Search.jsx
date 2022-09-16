import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";

const Search = () => {
    const [list, setList] = useState([])
    const [query, setQuery] = useState("")
    const keys = ["isActive", "name", "date"]

    const find = (data) => {
        return data.filter((item) => item.name.toLowerCase().includes(list))
    }
  useEffect(() => {
    const getRecords = async () => {
      const res = await axios.get(`https://oril-coins-test.herokuapp.com/list`); setList(res.data);
    };
    getRecords();
  }, []);
  console.log(list[0].name)
  console.log(query)
  return (
    <div>
        <input type="text" placeholder="Search..." className="" onChange={(e) => setQuery(e.target.value) } />
        <ul>

        </ul>

        <Table find={find(list)}/>
    </div>
  );
};

export default Search;
