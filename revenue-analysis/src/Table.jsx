import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Table = ({ data, sortDate, sortState }) => {
  // let ur = useLocation();
  // const [modify, setModify] = useState([])
  console.log(data)
  return (
          <table>
        <thead>
          <tr>
            <td>NAME</td>
            <td onClick={() => {sortDate()}}>DATE</td>
            <td onClick={() => {sortState()}}>STATE</td>
          </tr>
        </thead>
        <tbody>
          {data.map((person) => {
            return (
              <tr key={person._id}>
                <td>
                    <Link to="/User">{person.name}</Link>
                </td>
                <td>{person.date}</td>
                <td>{person.isA}</td>
              </tr>
            );
          })}
        </tbody>
      </table> 
  );
};

export default Table;




