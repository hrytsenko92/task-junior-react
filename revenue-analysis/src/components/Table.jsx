import React, { useState, useContext } from "react";
import { Context } from "./context";

const Table = ({ data, sortData }) => {
    const {fSetUserLink} = useContext(Context)

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
                <a href="" onClick={fSetUserLink(person.href)}>{person.name}</a>
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
