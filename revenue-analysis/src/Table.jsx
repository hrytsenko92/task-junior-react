import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Table = ({ data, sortDate, sortState }) => {
  // let ur = useLocation();
  // const [modify, setModify] = useState([]);

  // useEffect(() => {
  //   const utcDate = () => {
  //     let res = data.map((item) => {
  //       let nDate = new Date(item.date).toLocaleString("pl-PL").split(",").slice(0, 1);
  //       return { ...item, dateModify: nDate[0] };
  //     });
  //     setModify(res);
  //   };
  //   utcDate();
  // }, [data]);
  console.log(data);
  return (
    <table>
      <thead>
        <tr>
          <td>NAME</td>
          <td
            onClick={() => {
              sortDate();
            }}
          >
            DATE
          </td>
          <td
            onClick={() => {
              sortState();
            }}
          >
            STATE
          </td>
        </tr>
      </thead>
      <tbody>
        {data.map((person) => {
          return (
            <tr key={person._id}>
              <td>
                <Link to="/User">{person.name}</Link>
              </td>
              <td>{person.dateModify}</td>
              <td>{person.isA}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
