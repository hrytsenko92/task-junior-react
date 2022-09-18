import React, { useState } from "react";

const Table = ({ data, sortData }) => {
console.log(data)
  return (
    <table>
      <thead>
        <tr>
          <td
            onClick={() => {
              sortData();
            }}
          >
            NAME
          </td>
          <td>Date</td>
          <td>State</td>
        </tr>
      </thead>
      <tbody>
        {data.map((person) => {
          return (
            <tr key={person._id}>
              <td>
                <a>{person.name}</a>
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
