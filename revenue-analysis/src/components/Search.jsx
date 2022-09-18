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
    } else {
        let sorted = query.sort((a,b) => b.name - a.name ? 1 : -1)
        setQuery(sorted);
        SetSortPosition(false)
    }
  }

  useEffect(() => {
    const getAndPrepareData = async () => {
      const res = await axios.get(`https://oril-coins-test.herokuapp.com/list`);
      const dataIsActive = res.data.map((item) => {return item.isActive === true ? {...item, isA: 'Active'} : {...item, isA: "Disable"}})
      const dataAddHref = dataIsActive.map((item) => {return {...item, href: `https://oril-coins-test.herokuapp.com/item/${item.id}`}})
      const dataCutDate = dataAddHref.forEach((item) => {
        let temp = item.date.slice(0,10)
        let result = temp.split("-").reverse().join(".")
        item.date = result;
    })
      setList(dataAddHref);
      setQuery(dataAddHref);
    };
    getAndPrepareData();
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
