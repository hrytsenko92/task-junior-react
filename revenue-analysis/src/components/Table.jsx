import React, { useState, useEffect } from "react";

const Table = ({ data }) => {

  const headers = [
    { key: "userName", label: "NAME" },
    { key: "userDate", label: "DATE" },
    { key: "userState", label: "STATE" },
  ];
  return (
    <table>
      <thead>
        <tr>
          {headers.map((row) => {
            return <td key={row.key}>{row.label}</td>;
          })}
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
