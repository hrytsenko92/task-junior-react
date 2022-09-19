import React from "react";
import { Link } from "react-router-dom";

const Table = ({ data, sortDate, sortState }) => {
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
              <Link to="/User" state={{ from: person.href }}>{person.name}</Link> 
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
