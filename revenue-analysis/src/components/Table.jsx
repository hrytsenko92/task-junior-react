import React, { useState, useEffect } from "react";

const Table = ({ data, sortData}) => {

  return (
    <table>
      <thead>
        <tr>
            <td onClick={()=>{sortData("name")}}>NAME</td>
            <td>Date</td>
            <td>State</td>
        </tr>
      </thead>
      <tbody>
        {data.map((person) => {
          return (
            <tr key={person._id}>
              <td>{person.name}</td>
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
